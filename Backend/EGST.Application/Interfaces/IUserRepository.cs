using EGST.Application.Dto.Auth;
using EGST.Application.Features.Users.Command.Registration;
using EGST.Domain.Entities;

namespace EGST.Application.Interfaces
{
    public interface IUserRepository
    {
        Task<User> Create(UserCreationCommand request);

        Task<IEnumerable<User>> GetAll();

        Task<LoginResponse> Login(LoginRequest loginDto);
    }
}
