using EGST.Application.Interfaces;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EGST.Application.Features.Modules.Command
{
    public record DeleteModuleCommand ( Guid Id ) : IRequest<string>
    {

        public class DeleteModuleCommandHandler : IRequestHandler<DeleteModuleCommand, string>
        {
            IModuleRepository _repository;
            public DeleteModuleCommandHandler ( IModuleRepository repository )
            {
                _repository = repository;
            }

            public async Task<string> Handle ( DeleteModuleCommand request, CancellationToken cancellationToken )
            {
                var result = await _repository.Delete(request.Id);
                return result;
            }
        }

    }
}
