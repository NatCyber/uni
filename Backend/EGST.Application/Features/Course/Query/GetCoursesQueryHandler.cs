using EGST.Application.Interfaces;
using EGST.Domain.Entities;
using EGST.WebAPI.Controllers;
using MediatR;

namespace EGST.Application.Features.Courses.Query
{
    public class GetCoursesQueryHandler : IRequestHandler<GetCoursesQuery, IEnumerable<Domain.Entities.Course>>
    {
        private readonly ICourseRepository _courseRepository;

        public GetCoursesQueryHandler(ICourseRepository courseRepository)
        {
            _courseRepository = courseRepository;
        }
        public Task<IEnumerable<Domain.Entities.Course>> Handle(GetCoursesQuery request, CancellationToken cancellationToken)
        {
            var courses = _courseRepository.GetAll();
            return courses;
        }
    }
}
