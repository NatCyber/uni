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
    public record NewApplicationCommand ( NewApplicationDto Dto ) : IRequest<StudentApplication>
    {
        public class NewApplicationCommandHandler : IRequestHandler<NewApplicationCommand, StudentApplication>
        {
            private readonly IStudentsRepository _studentsRepository;

            public NewApplicationCommandHandler ( IStudentsRepository studentsRepository )
            {
                _studentsRepository = studentsRepository;
            }
            public async Task<StudentApplication> Handle ( NewApplicationCommand request, CancellationToken cancellationToken )
            {
                try { var result = await _studentsRepository.CreateApplication(request.Dto); return result; }
                catch (Exception ex) { throw new Exception(ex.ToString(), ex); }
            }
        }
    }
}
