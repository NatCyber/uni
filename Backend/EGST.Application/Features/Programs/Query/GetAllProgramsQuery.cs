using EGST.Application.Features.Modules.Query;
using EGST.Application.Interfaces;
using MediatR;

namespace EGST.Application.Features.Programs.Query
{
    public record GetAllProgramsQuery() : IRequest<IEnumerable<Domain.Entities.Programs>>
    {
        public class GetAllProgramsQHandler : IRequestHandler<GetAllProgramsQuery, IEnumerable<Domain.Entities.Programs>>
        {
            private readonly IProgramRepository _programRepository;

            public GetAllProgramsQHandler ( IProgramRepository programRepository )
            {
                _programRepository = programRepository;
            }
            public async Task<IEnumerable<Domain.Entities.Programs>> Handle ( GetAllProgramsQuery request, CancellationToken cancellationToken )
            {
                var programs = await _programRepository.GetAll();

                return programs;
            }
        }
    }
}
