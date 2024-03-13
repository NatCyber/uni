using EGST.Application.Dto.Batch;
using EGST.Application.Interfaces;
using EGST.Domain.Entities;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EGST.Application.Features.Batch.Command
{
    public record CreateBatchCommand(CreateBatchDto Dto) : IRequest<Domain.Entities.Batch>
    {
    }

    public class CreateBatchCommandHandler : IRequestHandler<CreateBatchCommand, Domain.Entities.Batch>
    {
        IBatchRepository _repository;
        public CreateBatchCommandHandler(IBatchRepository repository)
        {
            _repository = repository;
        }
        public async Task<Domain.Entities.Batch> Handle ( CreateBatchCommand request, CancellationToken cancellationToken )
        {
            var result = await _repository.Add(request.Dto);
            return result;
        }
    }
}
