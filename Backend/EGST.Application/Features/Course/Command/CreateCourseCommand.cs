using EGST.Application.Dto.Courses;
using EGST.Domain.Entities;
using MediatR;

namespace EGST.Application.Features.Courses.Command
{
    public record CreateCourseCommand(CreateCourseDto dto) : IRequest<Domain.Entities.Course>
    {
    }
}
