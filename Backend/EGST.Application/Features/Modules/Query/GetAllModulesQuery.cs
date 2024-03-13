using EGST.Domain.Entities;
using MediatR;

namespace EGST.Application.Features.Modules.Query
{
    public record GetAllModulesQuery() : IRequest<IEnumerable<Module>>
    {
    }
}
