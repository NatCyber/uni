using EGST.Application.Dto.Instructor;
using EGST.Application.Features.Instructor.Command;
using EGST.Application.Features.Instructor.Query;
using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace EGST.WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class InstructorsController : ControllerBase
    {
        private readonly IMediator _mediator;
        public InstructorsController(IMediator mediator)
        {
            _mediator = mediator;
        }

        [HttpGet("get-instructors")]
        public async Task<IActionResult> GetInstructors()
        {
            var result = await _mediator.Send(new GetAllIstructorsQuery());
            return Ok(result);
        }

        [HttpPost("new-instructor")]
        public async Task<IActionResult> NewInstructor(CreateInstructorDto dto)
        {
            var result = await _mediator.Send(new CreateInstructorCommand(dto));
            return Ok(result);
        }

        [HttpPut("update-instructor")]
        public async Task<IActionResult> UpdateInstructor(UpdateInstructorDto dto)
        {
            var result = await _mediator.Send(new UpdateInstructorCommand(dto));
            return Ok(result);
        }
        [HttpDelete("delete-instructor")]
        public async Task<IActionResult> DeleteInstructor([FromBody] string id)
        {
            var guid = Guid.Parse(id);
            var result = await _mediator.Send(new DeleteInstructorCommand(guid));
            return Ok(new { message = result });
        }
    }
}
