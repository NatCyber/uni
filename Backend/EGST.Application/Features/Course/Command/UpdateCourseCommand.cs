using EGST.Application.Dto.Course;
using EGST.Application.Interfaces;
using EGST.Domain.Entities;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EGST.Application.Features.Course.Command
{
    public record UpdateCourseCommand ( UpdateCourseDto Dto ) : IRequest<Domain.Entities.Course>
    {
        public class UpdateCourseCommandHandler : IRequestHandler<UpdateCourseCommand, Domain.Entities.Course>
        {
            ICourseRepository _courseRepository;
            public UpdateCourseCommandHandler ( ICourseRepository courseRepository )
            {
                _courseRepository = courseRepository;
            }
            public async Task<Domain.Entities.Course> Handle ( UpdateCourseCommand request, CancellationToken cancellationToken )
            {
                var result = await _courseRepository.Update(request.Dto);
                return result;
            }
        }
    }
}
