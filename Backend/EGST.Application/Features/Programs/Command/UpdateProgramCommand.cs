using EGST.Application.Dto.Program;
using EGST.Application.Interfaces;
using EGST.Domain.Entities;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EGST.Application.Features.Programs.Command
{
    public record UpdateProgramCommand ( UpdateProgramDto Dto ) : IRequest<Domain.Entities.Programs>
    {
        public class UpdateProgramCommandHandler : IRequestHandler<UpdateProgramCommand, Domain.Entities.Programs>
        {
            IProgramRepository _repository;
            public UpdateProgramCommandHandler ( IProgramRepository repository )
            {
                _repository = repository;
            }
            public async Task<Domain.Entities.Programs> Handle ( UpdateProgramCommand request, CancellationToken cancellationToken )
            {
                var result = await _repository.Update(request.Dto);
                return result;
            }
        }
    }
}
