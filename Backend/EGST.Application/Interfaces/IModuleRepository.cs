using EGST.Application.Dto.Modules;
using EGST.Domain.Entities;

namespace EGST.Application.Interfaces
{
    public interface IModuleRepository
    {
        Task<Module> Create ( CreateModuleDto dto );
        Task<IEnumerable<Module>> GetAll ();
        Task<Module> FindById ( Guid id );
        Task<Module> Update ( UpdateModuleDto dto );
        Task<string> Delete ( Guid id );
    }
}
