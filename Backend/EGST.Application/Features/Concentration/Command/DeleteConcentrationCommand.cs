using EGST.Application.Interfaces;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EGST.Application.Features.Concentration
{
    public record DeleteConcentrationCommand ( Guid Id ) : IRequest<string>
    {
        public class DeleteConcentrationCommandHandler : IRequestHandler<DeleteConcentrationCommand, string>
        {
            IConcentrationRepository _repository;
            public DeleteConcentrationCommandHandler ( IConcentrationRepository repository )
            {
                _repository = repository;
            }

            public async Task<string> Handle ( DeleteConcentrationCommand request, CancellationToken cancellationToken )
            {
                var result = await _repository.Delete(request.Id);
                return result;
            }
        }
    }
}
