using EGST.Application.Dto.Student;
using EGST.Application.Features.Student.Applications.Command;
using EGST.Application.Features.Students.Applications.Query;
using EGST.Domain.Entities;
using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace EGST.WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StudentsController : ControllerBase
    {
        private readonly IMediator _mediator;

        public StudentsController(IMediator mediator)
        {
            _mediator = mediator;
        }


        //[HttpGet("Getme")]
        //[Authorize(Roles = "Student")]
        //public async Task<IActionResult> GetStudentInfo()
        //{
        //    var currentUser = GetUser();
        //    return currentUser == null ? NotFound() : Ok(currentUser.Email + " " + currentUser.Role);
        //}

        [HttpPost("CreateApplication")]

        public async Task<StudentApplication> Createapplication([FromBody] NewApplicationDto applicationDto)
        {
            var newapplication = await _mediator.Send(new NewApplicationCommand(applicationDto));
            return newapplication;
        }

        [HttpGet("getApplications")]
        public async Task<IEnumerable<StudentApplication>> GetApplications()
        {
            var applications = await _mediator.Send(new GetApplicationQuery());
            return applications;
        }

        [HttpPost("approve")]
        public async Task<StudentApplication> ApproveStudent([FromBody] ApproveStudentDto Dto)
        {
            var updatedStatus = await _mediator.Send(new ApproveStudentCommand(Dto));
            return updatedStatus;
        }

        [HttpPost("Upload"), DisableRequestSizeLimit]
        public IActionResult Upload(IFormFile file)
        {
            try
            {
                var folderName = Path.Combine("Resources", "Images");
                var pathToSave = Path.Combine(Directory.GetCurrentDirectory(), folderName);
                if (file.Length > 0)
                {
                    var fileName = Guid.NewGuid().ToString() + file.FileName;
                    var path = String.Format("{0}://{1}{2}/Resources/Images/{3}", Request.Scheme, Request.Host, Request.PathBase, fileName);
                    var fullPath = Path.Combine(pathToSave, fileName);
                    var storepath = Path.Combine(folderName, fileName);
                    using (var stream = new FileStream(fullPath, FileMode.Create))
                    {
                        file.CopyTo(stream);
                    }
                    return Ok(new { path });
                }
                else
                {
                    return BadRequest();
                }
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Internal server error: {ex}");
            }
        }


        //public User GetUser()
        //{
        //    var identity = HttpContext.User.Identity as ClaimsIdentity;

        //    if (identity != null)
        //    {
        //        var userClaims = identity.Claims;

        //        return new User
        //        {
        //            Email = userClaims.FirstOrDefault(o => o.Type == ClaimTypes.Email)?.Value,
        //            Role = userClaims.FirstOrDefault(o => o.Type == ClaimTypes.Role)?.Value
        //        };
        //    }
        //    return null;
        //}
    }
}
