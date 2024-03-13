using EGST.Application.Dto.Batch;
using EGST.Application.Interfaces;
using MediatR;


namespace EGST.Application.Features.Batch.Command
{
    public record UpdateBatchCommand ( UpdateBatchDto Dto ) : IRequest<Domain.Entities.Batch>
    {
        public class UpdateBatchCommandHandler : IRequestHandler<UpdateBatchCommand, Domain.Entities.Batch>
        {
            IBatchRepository _repository;
            public UpdateBatchCommandHandler ( IBatchRepository repository )
            {
                _repository = repository;
            }
            public async Task<Domain.Entities.Batch> Handle ( UpdateBatchCommand request, CancellationToken cancellationToken )
            {
                var result = await _repository.Update(request.Dto);
                return result;
            }
        }
    }
}
