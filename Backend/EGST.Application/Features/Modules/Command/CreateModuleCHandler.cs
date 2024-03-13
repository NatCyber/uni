using EGST.Application.Interfaces;
using EGST.Domain.Entities;
using MediatR;

namespace EGST.Application.Features.Modules.Command
{
    public class CreateModuleCHandler : IRequestHandler<CreateModuleCommand, Module>
    {
        private readonly IModuleRepository _moduleRepository;

        public CreateModuleCHandler(IModuleRepository moduleRepository)
        {
            _moduleRepository = moduleRepository;
        }


        public async Task<Module> Handle(CreateModuleCommand request, CancellationToken cancellationToken)
        {
            var module = await _moduleRepository.Create(request.Dto);

            return module;
        }
    }
}
