using EGST.Application.Dto.Concentration;
using EGST.Application.Interfaces;
using EGST.Domain.Entities;
using MediatR;

namespace EGST.Application.Features.Concentration
{
    public record CreateConcentrationCommand ( CreateConcentrationDto Dto ) : IRequest<Domain.Entities.Concentration>
    {
        public class CreateConcentrationCommandHandler : IRequestHandler<CreateConcentrationCommand, Domain.Entities.Concentration>
        {
            IConcentrationRepository _repository;

            public CreateConcentrationCommandHandler ( IConcentrationRepository repository )
            {
                _repository = repository;
            }
            public async Task<Domain.Entities.Concentration> Handle ( CreateConcentrationCommand request, CancellationToken cancellationToken )
            {
                var concentration = await _repository.Add(request.Dto);
                return concentration;
            }
        }
    }
}
