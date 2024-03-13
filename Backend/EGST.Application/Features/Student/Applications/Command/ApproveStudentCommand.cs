using EGST.Application.Dto.Student;
using EGST.Application.Interfaces;
using EGST.Domain.Entities;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EGST.Application.Features.Student.Applications.Command
{
    public record ApproveStudentCommand ( ApproveStudentDto Dto ) : IRequest<StudentApplication>
    {
        public class ApproveStudentCommandHandler : IRequestHandler<ApproveStudentCommand, StudentApplication>
        {
            private readonly IStudentsRepository _repository;
            public ApproveStudentCommandHandler ( IStudentsRepository repository )
            {
                _repository = repository;
            }
            public async Task<StudentApplication> Handle ( ApproveStudentCommand request, CancellationToken cancellationToken )
            {
                try
                {
                    var result = await _repository.ApproveStudent(request.Dto);
                    return result;
                }
                catch (Exception ex)
                {
                    throw new Exception(ex.ToString());
                }
            }
        }
    }
}
