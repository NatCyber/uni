using EGST.Application.Dto.Concentration;
using EGST.Application.Interfaces;
using EGST.Domain.Entities;
using EGST.Infrastructure.Context;
using Microsoft.EntityFrameworkCore;

namespace EGST.Infrastructure.Repositories
{
    public class ConcentrationRepository : IConcentrationRepository
    {
        EGSTDbContext _dbContext;
        public ConcentrationRepository(EGSTDbContext dbContext)
        {
            _dbContext = dbContext;
        }
        public async Task<Concentration> Add(CreateConcentrationDto Dto)
        {
            try
            {
                var concentration = new Concentration
                {
                    Id = Guid.NewGuid(),
                    Name = Dto.Name,
                    Code = Dto.Code,
                    ProgramId = Dto.ProgramId
                };

                await _dbContext.AddAsync(concentration);
                await _dbContext.SaveChangesAsync();
                return concentration;
            }
            catch (Exception ex)
            {
                throw new Exception(ex.ToString());
            }


        }

        public async Task<string> Delete(Guid id)
        {
            try
            {
                var toDelete = await _dbContext.Concentrations.FindAsync(id);
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

        public async Task<IEnumerable<Concentration>> GetAllConcentrationsAsync()
        {
            try
            {
                var concentrations = await _dbContext.Concentrations.Where(c => c.IsActive == true).ToListAsync();
                return concentrations;
            }
            catch (Exception ex)
            {
                throw new Exception(ex.ToString());
            }
        }

        public async Task<Concentration> Update(UpdateConcentrationDto Dto)
        {
            try
            {
                var toupdate = await _dbContext.Concentrations.FindAsync(Dto.Id);
                if (toupdate != null)
                {
                    if (Dto.Name != null)
                    {
                        toupdate.Name = Dto.Name;
                    }
                    if (Dto.Code != null)
                    {
                        toupdate.Code = Dto.Code;
                    }
                    _dbContext.Update(toupdate);
                    await _dbContext.SaveChangesAsync();
                }
                return toupdate;
            }
            catch (Exception ex)
            {
                throw new Exception(ex.ToString());
            }
        }
    }
}
