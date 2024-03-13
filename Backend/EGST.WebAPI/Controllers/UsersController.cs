using EGST.Application.Dto.Auth;
using EGST.Application.Features.Users.Command.Registration;
using EGST.Application.Features.Users.Query.Login;
using EGST.Domain.Entities;
using MediatR;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace EGST.WebAPI.Controllers
{
    [Route("api/user")]
    [ApiController]
    public class UsersController : ControllerBase
    {

        private readonly IMediator _mediator;

        public UsersController(IMediator mediator)
        {
            _mediator = mediator;
        }

        [HttpPost("CreateUser")]
        public async Task<ActionResult<User>> Register([FromBody] UserRegistrationRequest userRegisterDto)
        {
            var res = await _mediator.Send(new UserCreationCommand(userRegisterDto));

            return Ok(res);
        }

        [AllowAnonymous]
        [HttpPost("Login")]
        public async Task<IActionResult> Login([FromBody] LoginRequest loginDto)
        {
            var res = await _mediator.Send(new LoginQuery(loginDto));

            return Ok(res);
        }
    }
}
