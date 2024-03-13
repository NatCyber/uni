using EGST.Application.Interfaces;
using EGST.Domain.Entities;
using MediatR;

namespace EGST.Application.Features.Courses.Command
{
    public class CreateCourseCommandHandler : IRequestHandler<CreateCourseCommand, Domain.Entities.Course>
    {
        private readonly ICourseRepository _courseRepo;

        public CreateCourseCommandHandler(ICourseRepository courseRepository)
        {
            _courseRepo = courseRepository;
        }
        public async Task<Domain.Entities.Course> Handle(CreateCourseCommand request, CancellationToken cancellationToken)
        {
            try
            {
                var res = await _courseRepo.Create(request.dto);
                return res;
            }
            catch (Exception ex)
            {
                throw new Exception(ex.ToString());
            }
        }
    }
}
