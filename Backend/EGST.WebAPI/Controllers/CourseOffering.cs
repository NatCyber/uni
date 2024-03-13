using EGST.Application.Dto.CourseOffer;
using EGST.Application.Features.Concentration;
using EGST.Application.Features.CourseOffer.Command;
using EGST.Application.Features.CourseOffering.Queries;
using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace EGST.WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CourseOffering : ControllerBase
    {
        private readonly IMediator _mediator;

        public CourseOffering ( IMediator mediator )
        {
            _mediator = mediator;
        }

        [HttpGet("get-offerings")]
        public async Task<IActionResult> GetOfferings ()
        {
            var courseOfferings = await _mediator.Send(new GetCoursesOfferingQuery());
            return Ok(courseOfferings);
        }

        [HttpPost("save-offerings")]
        public async Task<IActionResult> AddOfferings ( CourseOfferDto dto )
        {
            var courseOfferings = await _mediator.Send(new NewCourseOfferingCommand(dto));
            return Ok(courseOfferings);
        }

        [HttpPut("update-offering")]
        public async Task<IActionResult> UpdateOffering ( UpdateCourseOfferDto dto )
        {
            var result = await _mediator.Send(new UpdateCourseOfferCommand(dto));
            return Ok(result);
        }

        [HttpDelete("delete-offering")]
        public async Task<string> DeleteCourseOffering ( [FromBody] string id )
        {
            var result = await _mediator.Send<string>(new DeleteCourseOfferingCommand(Guid.Parse(id)));
            return result;
        }
    }
}
