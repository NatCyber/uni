using EGST.Application.Dto.Concentration;
using EGST.Application.Interfaces;
using MediatR;

namespace EGST.Application.Features.Concentration
{
    public record UpdateConcentrationCommand ( UpdateConcentrationDto Dto ) : IRequest<Domain.Entities.Concentration>
    {
        public class UpdateConcentrationCommandHandler : IRequestHandler<UpdateConcentrationCommand, Domain.Entities.Concentration>
        {
            IConcentrationRepository _concentration;
            public UpdateConcentrationCommandHandler ( IConcentrationRepository concentration )
            {
                _concentration = concentration;
            }

            public async Task<Domain.Entities.Concentration> Handle ( UpdateConcentrationCommand request, CancellationToken cancellationToken )
            {
                var result = await _concentration.Update(request.Dto);
                return result;
            }
        }
    }
}
