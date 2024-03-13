using EGST.Application.Dto.Student;
using EGST.Domain.Entities;

namespace EGST.Application.Interfaces
{
    public interface IStudentsRepository
    {
        Task<StudentApplication> CreateApplication(NewApplicationDto Dto);
        Task<IEnumerable<StudentApplication>> GetApplications();
        Task<StudentApplication> ApproveStudent ( ApproveStudentDto Dto );
    }
}
