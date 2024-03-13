using EGST.Application.Interfaces;
using MediatR;


namespace EGST.Application.Features.Batch.Command
{
    public record DeleteBatchCommand ( Guid Id ) : IRequest<string>
    {
        public class DeleteBatchCommandHandler : IRequestHandler<DeleteBatchCommand, string>
        {
            IBatchRepository _repository;
            public DeleteBatchCommandHandler ( IBatchRepository repository )
            {
                _repository = repository;
            }

            public async Task<string> Handle ( DeleteBatchCommand request, CancellationToken cancellationToken )
            {
                var result = await _repository.Delete(request.Id);
                return result;
            }
        }
    }
}
