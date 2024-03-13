using EGST.Application.Features.Program.Command;
using EGST.Application.Interfaces;
using MediatR;

namespace EGST.Application.Features.Programs.Command
{
    public class CreateProgramCommandHandler : IRequestHandler<CreateProgramCommand, Domain.Entities.Programs>
    {
        private readonly IProgramRepository _programRepository;

        public CreateProgramCommandHandler(IProgramRepository programRepository)
        {
            _programRepository = programRepository;
        }
        public async Task<Domain.Entities.Programs> Handle(CreateProgramCommand request, CancellationToken cancellationToken)
        {
            var program = await _programRepository.Create(request.Dto);

            return program;
        }
    }
}
