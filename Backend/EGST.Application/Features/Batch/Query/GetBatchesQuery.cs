using EGST.Application.Interfaces;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EGST.Application.Features.Batch.Query
{
    public record GetBatchesQuery : IRequest<IEnumerable<Domain.Entities.Batch>>
    {
    }

    public class GetBatchesQueryHandler : IRequestHandler<GetBatchesQuery, IEnumerable<Domain.Entities.Batch>>
    {
        IBatchRepository _repository;
        public GetBatchesQueryHandler(IBatchRepository repository)
        {
            _repository = repository;
        }
        public async Task<IEnumerable<Domain.Entities.Batch>> Handle ( GetBatchesQuery request, CancellationToken cancellationToken )
        {
            var allBatches = await _repository.GetAllBatches ();
            return allBatches;
        }
    }
}
