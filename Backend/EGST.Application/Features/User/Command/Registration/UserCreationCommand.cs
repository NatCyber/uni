using EGST.Application.Dto.Auth;
using EGST.Domain.Entities;
using MediatR;

namespace EGST.Application.Features.Users.Command.Registration
{
    public record UserCreationCommand(UserRegistrationRequest dto) : IRequest<User>
    {
        public string FullName { get; set; } = dto.FullName;
        public string Email { get; set; } = dto.Email;
        public string Password { get; set; } = dto.Password;
        public string? Role { get; set; } = dto.Role;
    }
}
