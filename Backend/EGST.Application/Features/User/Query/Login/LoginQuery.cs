using EGST.Application.Dto.Auth;
using MediatR;

namespace EGST.Application.Features.Users.Query.Login
{
    public class LoginQuery : IRequest<LoginResponse>
    {
        public LoginQuery(LoginRequest loginDto)
        {
            this.Email = loginDto.Email;
            this.Password = loginDto.Password;
        }
        public string Email { get; set; } = string.Empty;

        public string Password { get; set; } = string.Empty;
    }
}
