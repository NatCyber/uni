using EGST.Application.Dto.Programs;
using MediatR;

namespace EGST.Application.Features.Program.Command
{
    public record CreateProgramCommand(CreateProgramDto Dto) : IRequest<Domain.Entities.Programs>
    {
    }
}
