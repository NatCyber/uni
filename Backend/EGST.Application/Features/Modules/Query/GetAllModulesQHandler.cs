using EGST.Application.Interfaces;
using EGST.Domain.Entities;
using MediatR;

namespace EGST.Application.Features.Modules.Query
{
    public class GetAllModulesQHandler : IRequestHandler<GetAllModulesQuery, IEnumerable<Module>>
    {
        private readonly IModuleRepository _moduleRepository;

        public GetAllModulesQHandler(IModuleRepository moduleRepository)
        {
            _moduleRepository = moduleRepository;
        }

        public async Task<IEnumerable<Module>> Handle(GetAllModulesQuery request, CancellationToken cancellationToken)
        {
            var modules = await _moduleRepository.GetAll();

            return modules;
        }
    }
}
