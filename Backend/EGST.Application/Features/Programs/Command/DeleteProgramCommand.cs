

using EGST.Application.Interfaces;
using MediatR;

namespace EGST.Application.Features.Programs.Command
{
    public record DeleteProgramCommand ( Guid Id ) : IRequest<string>
    {
        public class DeleteProgramCommandHandler : IRequestHandler<DeleteProgramCommand, string>
        {
            IProgramRepository _repository;
            public DeleteProgramCommandHandler ( IProgramRepository repository )
            {
                _repository = repository;
            }

            public Task<string> Handle ( DeleteProgramCommand request, CancellationToken cancellationToken )
            {
                var result = _repository.Delete(request.Id);
                return result;
            }
        }
    }
}
