using EGST.Application.Interfaces;
using EGST.Domain.Entities;
using MediatR;

namespace EGST.Application.Features.Users.Command.Registration
{
    public class UserCreationCommandHandler : IRequestHandler<UserCreationCommand, User>
    {
        readonly IUserRepository _userRepository;
        public UserCreationCommandHandler(IUserRepository userRepository)
        {
            _userRepository = userRepository;
        }
        public async Task<User> Handle(UserCreationCommand request, CancellationToken cancellationToken)
        {
            var createdUser = await _userRepository.Create(request);
            return createdUser;
        }
    }
}
