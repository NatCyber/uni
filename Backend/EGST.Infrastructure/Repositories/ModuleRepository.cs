using EGST.Application.Dto.Modules;
using EGST.Application.Interfaces;
using EGST.Domain.Entities;
using EGST.Infrastructure.Context;
using Microsoft.EntityFrameworkCore;

namespace EGST.Infrastructure.Repositories
{
    public class ModuleRepository : IModuleRepository
    {
        private readonly EGSTDbContext _dbContext;

        public ModuleRepository ( EGSTDbContext dbContext )
        {
            _dbContext = dbContext;
        }
        public async Task<Module> Create ( CreateModuleDto dto )
        {
            var newModule = new Module
            {
                Id = Guid.NewGuid(),
                Name = dto.Name,
                ProgramId = dto.ProgramId,
                ProgramsId = dto.ProgramId,
            };

            if (dto.ConcentrationId != null)
            {
                newModule.ConcentrationId = dto.ConcentrationId;
            }
            try
            {
                await _dbContext.Modules.AddAsync(newModule);
                await _dbContext.SaveChangesAsync();

                return newModule;
            }
            catch (Exception ex)
            {
                throw new Exception(ex.ToString());
            }
        }

        public async Task<string> Delete ( Guid id )
        {
            try
            {
                var toDelete = await _dbContext.Modules.FindAsync(id);
                if (toDelete != null)
                {
                    toDelete.IsActive = false;
                    await _dbContext.SaveChangesAsync();
                    return "Deleted Successfuly";

                }
                return "Not Found";
            }
            catch (Exception ex)
            {
                throw new Exception(ex.ToString());
            }


        }
        public async Task<Module> FindById ( Guid id )
        {
            var module = await _dbContext.Modules.FirstOrDefaultAsync(p => p.Id == id);
            return module;
        }

        public async Task<IEnumerable<Module>> GetAll ()
        {
            var modules = await _dbContext.Modules.ToListAsync();

            return modules;
        }

        public async Task<Module> Update ( UpdateModuleDto Dto )
        {
            try
            {
                var toUpdate = await _dbContext.Modules.FindAsync(Dto.Id);

                if (toUpdate != null)
                {
                    toUpdate.Name = Dto.Name;
                    _dbContext.Update(toUpdate);
                    await _dbContext.SaveChangesAsync();

                }
                return toUpdate;


            }
            catch (Exception ex)
            {
                throw new Exception(ex.ToString());
            }

        }
    }
}
