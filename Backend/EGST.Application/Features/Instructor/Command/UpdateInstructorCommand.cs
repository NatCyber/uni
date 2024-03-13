using EGST.Application.Dto.Instructor;
using EGST.Application.Interfaces;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EGST.Application.Features.Instructor.Command
{
    public record UpdateInstructorCommand ( UpdateInstructorDto Dto ) : IRequest<Domain.Entities.Instructor>
    {
        public class UpdateInstructorCommandHandler : IRequestHandler<UpdateInstructorCommand, Domain.Entities.Instructor>
        {
            private readonly IInstructorRepository _repository;

            public UpdateInstructorCommandHandler ( IInstructorRepository repository )
            {
                _repository = repository;
            }

            public Task<Domain.Entities.Instructor> Handle ( UpdateInstructorCommand request, CancellationToken cancellationToken )
            {
                var updatedInstructor = _repository.Update(request.Dto);
                return updatedInstructor;
            }
        }
    }
}
