using EGST.Application.Dto.Instructor;
using EGST.Domain.Entities;

namespace EGST.Application.Interfaces
{
    public interface IInstructorRepository
    {
        Task<Instructor> Create ( CreateInstructorDto dto );
        Task<IEnumerable<Instructor>> GetAll ();
        Task<Instructor> Update ( UpdateInstructorDto dto );
        Task<string> Delete ( Guid id );
    }
}
