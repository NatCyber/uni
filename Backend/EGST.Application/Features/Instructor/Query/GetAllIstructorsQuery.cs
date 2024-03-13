using EGST.Application.Interfaces;
using MediatR;


namespace EGST.Application.Features.Instructor.Query
{
    public class GetAllIstructorsQuery : IRequest<IEnumerable<Domain.Entities.Instructor>>
    {
        public class GetAllIstructorsQueryHandler : IRequestHandler<GetAllIstructorsQuery, IEnumerable<Domain.Entities.Instructor>>
        {
            private readonly IInstructorRepository _repository;

            public GetAllIstructorsQueryHandler ( IInstructorRepository repository )
            {
                _repository = repository;
            }

            public async Task<IEnumerable<Domain.Entities.Instructor>> Handle ( GetAllIstructorsQuery request, CancellationToken cancellationToken )
            {
                var instructors = await _repository.GetAll();
                return instructors;
            }
        }
    }
}
