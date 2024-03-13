using EGST.Application.Dto.Program;
using EGST.Application.Dto.Programs;
using EGST.Application.Features.Program.Command;
using EGST.Application.Features.Programs.Command;
using EGST.Application.Features.Programs.Query;
using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace EGST.WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProgramsController : ControllerBase
    {
        private readonly IMediator _mediator;

        public ProgramsController ( IMediator mediator )
        {
            _mediator = mediator;
        }
        [HttpPost("new-program")]
        public async Task<IActionResult> AddProgram ( [FromBody] CreateProgramDto Dto )
        {
            var program = await _mediator.Send(new CreateProgramCommand(Dto));
            return Ok(program);
        }

        [HttpGet("all-programs")]
        public async Task<IEnumerable<Domain.Entities.Programs>> GetPrograms ()
        {
            var programs = await _mediator.Send(new GetAllProgramsQuery());
            return programs;
        }

        [HttpPut("update-program")]
        public async Task<IActionResult> UpdateProgram ( [FromBody] UpdateProgramDto Dto )
        {
            var program = await _mediator.Send(new UpdateProgramCommand(Dto));
            return Ok(program);
        }
        [HttpDelete("delete-program")]
        public async Task<string> DeleteProgram ( [FromBody] string id )
        {
            var result = await _mediator.Send<string>(new DeleteProgramCommand(Guid.Parse(id)));
            return result;
        }
    }
}
