using EGST.Application.Dto.Auth;
using EGST.Application.Features.Users.Command.Registration;
using EGST.Application.Interfaces;
using EGST.Domain.Entities;
using EGST.Infrastructure.Context;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace EGST.Infrastructure.Repositories
{
    public class UserRepository : IUserRepository
    {
        readonly EGSTDbContext _dbContext;
        IConfiguration _config;
        public UserRepository(EGSTDbContext dbContext, IConfiguration config)
        {
            _dbContext = dbContext;
            _config = config;
        }
        public async Task<User> Create(UserCreationCommand request)
        {
            var passHash = BCrypt.Net.BCrypt.HashPassword(request.Password);
            var newUser = new User
            {
                Id = Guid.NewGuid(),
                FullName = request.FullName,
                Email = request.Email,
                Password = passHash,
                Role = request.Role ?? "Student"
            };
            var emailExists = await _dbContext.Users.FirstOrDefaultAsync(usr => usr.Email == request.Email);
            if (emailExists != null)
            {
                throw new Exception("Email address is already taken");
            }
            else
            {
                try
                {
                    _dbContext.Users.Add(newUser);
                    await _dbContext.SaveChangesAsync();
                    return newUser;
                }
                catch (Exception ex)
                {
                    throw new Exception(ex.ToString());
                }
            }

        }

        public async Task<IEnumerable<User>> GetAll()
        {
            return await _dbContext.Users.ToListAsync();
        }

        public async Task<LoginResponse> Login(LoginRequest loginDto)
        {
            var user = await _dbContext.Users.SingleOrDefaultAsync(user => user.Email == loginDto.Email);
            if (user != null)
            {
                bool isvalidpass = BCrypt.Net.BCrypt.Verify(loginDto.Password, user.Password);
                if (!isvalidpass)
                {
                    throw new Exception("Password don't match");
                }
                else
                {
                    var token = Generate(user);
                    return new LoginResponse
                    {
                        Id = user.Id.ToString(),
                        Email = user.Email,
                        FullName = user.FullName,
                        Token = token,
                        Role = user.Role
                    };
                }
            }
            else
            {
                throw new Exception("User not found");

            }
        }

        public string Generate(User user)
        {
            var securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_config["Jwt:Key"]));
            var credentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);

            var claims = new[]
            {
                new Claim(ClaimTypes.NameIdentifier, user.FullName),
                new Claim(ClaimTypes.Email, user.Email),
                new Claim(ClaimTypes.Role, user.Role)
            };

            var token = new JwtSecurityToken(_config["Jwt:Issuer"],
              _config["Jwt:Audience"],
              claims,
              expires: DateTime.Now.AddMinutes(60),
              signingCredentials: credentials);

            return new JwtSecurityTokenHandler().WriteToken(token);
        }
    }
}
