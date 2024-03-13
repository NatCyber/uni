using EGST.Application.Dto.Course;
using EGST.Application.Dto.Courses;
using EGST.Application.Features.Concentration;
using EGST.Application.Features.Course.Command;
using EGST.Application.Features.Courses.Command;
using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace EGST.WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CourseController : ControllerBase
    {
        private readonly IMediator _mediator;

        public CourseController ( IMediator mediator )
        {
            _mediator = mediator;
        }
        [HttpGet("GetCourses")]
        public async Task<IActionResult> GetCourses ()
        {
            var course = await _mediator.Send(new GetCoursesQuery());
            return Ok(course);
        }

        [HttpPost("AddCourse")]
        public async Task<IActionResult> AddCourse ( [FromBody] CreateCourseDto dto )
        {
            var course = await _mediator.Send(new CreateCourseCommand(dto));
            return Ok(course);
        }

        [HttpPut("update-course")]
        public async Task<IActionResult> UpdateCourse ( [FromBody] UpdateCourseDto dto )
        {
            var course = await _mediator.Send(new UpdateCourseCommand(dto));
            return Ok(course);
        }
        [HttpDelete("delete-course")]
        public async Task<string> DeleteCourse ( [FromBody] string id )
        {
            var result = await _mediator.Send<string>(new DeleteCourseCommand(Guid.Parse(id)));
            return result;
        }
    }
}
