using EGST.Application.Dto.Modules;
using EGST.Application.Interfaces;
using EGST.Domain.Entities;
using MediatR;

namespace EGST.Application.Features.Modules.Command
{
    public record UpdateModuleCommand ( UpdateModuleDto Dto ) : IRequest<Module> { }

    public class UpdateModuleCommandHandler : IRequestHandler<UpdateModuleCommand, Module>
    {
        IModuleRepository _repo;
        public UpdateModuleCommandHandler ( IModuleRepository repo )
        {
            _repo = repo;
        }
        public async Task<Module> Handle ( UpdateModuleCommand request, CancellationToken cancellationToken )
        {
            var toUpdate = await _repo.Update(request.Dto);
            return toUpdate;

        }
    }
}
