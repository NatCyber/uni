using EGST.Application.Dto.Program;
using EGST.Application.Dto.Programs;
using EGST.Domain.Entities;

namespace EGST.Application.Interfaces
{
    public interface IProgramRepository
    {
        Task<Programs> Create ( CreateProgramDto dto );
        Task<IEnumerable<Programs>> GetAll ();
        Task<Programs> Update ( UpdateProgramDto dto );
        Task<string> Delete ( Guid id );
    }
}
