using EGST.Application.Interfaces;
using MediatR;

namespace EGST.Application.Features.CourseOffering.Queries
{
    public class GetCoursesOfferingQuery : IRequest<IEnumerable<Domain.Entities.CourseOffering>>
    {
    }
    public class GetAllOfferingQueryHandler : IRequestHandler<GetCoursesOfferingQuery, IEnumerable<Domain.Entities.CourseOffering>>
    {
        private readonly ICourseOfferingRepository _courseOfferingRepository;
        public GetAllOfferingQueryHandler(ICourseOfferingRepository courseOfferingRepository)
        {
            _courseOfferingRepository = courseOfferingRepository;
        }
        public async Task<IEnumerable<Domain.Entities.CourseOffering>> Handle(GetCoursesOfferingQuery request, CancellationToken cancellationToken)
        {
            var courseOfferings = await _courseOfferingRepository.GetAll();
            return courseOfferings;
        }
    }
}
