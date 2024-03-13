using EGST.Application.Features.Course.Command;
using EGST.Application.Interfaces;
using MediatR;


namespace EGST.Application.Features.Instructor.Command
{
    public record DeleteInstructorCommand ( Guid Id ) : IRequest<string>
    {
        public class DeleteInstructorCommandHandler : IRequestHandler<DeleteInstructorCommand, string>
        {
            IInstructorRepository _repository;
            public DeleteInstructorCommandHandler ( IInstructorRepository repository )
            {
                _repository = repository;
            }

            public async Task<string> Handle ( DeleteInstructorCommand request, CancellationToken cancellationToken )
            {
                var result = await _repository.Delete(request.Id);
                return result;
            }
        }
    }
}
