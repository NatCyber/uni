using EGST.Application.Dto.Auth;
using EGST.Application.Interfaces;
using MediatR;

namespace EGST.Application.Features.Users.Query.Login
{
    public class LoginQueryHandler : IRequestHandler<LoginQuery, LoginResponse>
    {
        readonly IUserRepository _userRepository;
        public LoginQueryHandler(IUserRepository userRepository)
        {
            _userRepository = userRepository;
        }

        public async Task<LoginResponse> Handle(LoginQuery request, CancellationToken cancellationToken)
        {
            var dto = new LoginRequest { Email = request.Email, Password = request.Password };
            var validUser = await _userRepository.Login(dto);
            return validUser;
        }
    }

}
