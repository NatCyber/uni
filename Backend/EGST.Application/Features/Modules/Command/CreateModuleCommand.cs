using EGST.Application.Dto.Modules;
using EGST.Domain.Entities;
using MediatR;

namespace EGST.Application.Features.Modules.Command
{
    public record CreateModuleCommand(CreateModuleDto Dto) : IRequest<Module>
    {
    }
}
