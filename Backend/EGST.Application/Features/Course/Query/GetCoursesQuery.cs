using EGST.Domain.Entities;
using MediatR;

namespace EGST.WebAPI.Controllers
{
    public class GetCoursesQuery : IRequest<IEnumerable<Course>>
    {
    }
}