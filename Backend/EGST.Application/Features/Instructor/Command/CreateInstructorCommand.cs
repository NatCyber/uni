using EGST.Application.Dto.Instructor;
using EGST.Application.Interfaces;
using MediatR;

namespace EGST.Application.Features.Instructor.Command
{
    public record CreateInstructorCommand ( CreateInstructorDto Dto ) : IRequest<Domain.Entities.Instructor>
    {
        public class CreateInstructorCommandHandler : IRequestHandler<CreateInstructorCommand, Domain.Entities.Instructor>
        {
            IInstructorRepository _repository;
            public CreateInstructorCommandHandler ( IInstructorRepository repository )
            {
                _repository = repository;
            }

            public async Task<Domain.Entities.Instructor> Handle ( CreateInstructorCommand request, CancellationToken cancellationToken )
            {
                var instructor = await _repository.Create(request.Dto);
                return instructor;
            }
        }
    }
}
