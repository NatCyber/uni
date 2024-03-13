using EGST.Application.Interfaces;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EGST.Application.Features.Concentration.Query
{
    public class GetAllConcentrationQuery : IRequest<IEnumerable<Domain.Entities.Concentration>>
    {
        public class GetAllConcentrationQueryHandler : IRequestHandler<GetAllConcentrationQuery, IEnumerable<Domain.Entities.Concentration>>
        {
            IConcentrationRepository _repository;
            public GetAllConcentrationQueryHandler ( IConcentrationRepository repository )
            {
                _repository = repository;
            }
            public async Task<IEnumerable<Domain.Entities.Concentration>> Handle ( GetAllConcentrationQuery request, CancellationToken cancellationToken )
            {
                var result = await _repository.GetAllConcentrationsAsync();
                return result;
            }
        }
    }
}
