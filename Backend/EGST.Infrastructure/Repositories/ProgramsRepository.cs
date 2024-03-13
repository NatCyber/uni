using EGST.Application.Dto.Program;
using EGST.Application.Dto.Programs;
using EGST.Application.Interfaces;
using EGST.Domain.Entities;
using EGST.Infrastructure.Context;
using Microsoft.EntityFrameworkCore;

namespace EGST.Infrastructure.Repositories
{
    public class ProgramsRepository : IProgramRepository
    {
        private EGSTDbContext _dbContext;

        public ProgramsRepository(EGSTDbContext dbContext)
        {
            _dbContext = dbContext;
        }
        public async Task<Programs> Create(CreateProgramDto dto)
        {
            var newProgram = new Programs
            {
                Id = Guid.NewGuid(),
                Name = dto.Name,
                Code = dto.Code,
                Description = dto.Description,
            };
            try
            {
                _dbContext.Programs.Add(newProgram);
                await _dbContext.SaveChangesAsync();
                return newProgram;
            }
            catch (Exception ex)
            {
                throw new Exception(ex.ToString());
            }


        }

        public async Task<IEnumerable<Programs>> GetAll()
        {
            var programs = await _dbContext.Programs.Where(p => p.IsActive == true).ToListAsync();
            return programs;
        }

        public async Task<string> Delete(Guid id)
        {
            try
            {
                var toDelete = await _dbContext.Programs.FindAsync(id);
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
        public async Task<Programs> Update(UpdateProgramDto dto)
        {
            try
            {
                var toedit = await _dbContext.Programs.FindAsync(dto.Id);
                if (toedit != null)
                {
                    if (dto.Name != null) toedit.Name = dto.Name;
                    if (dto.Code != null) toedit.Code = dto.Code;
                    if (dto.Description != null) toedit.Description = dto.Description;

                }
                _dbContext.Programs.Update(toedit);
                await _dbContext.SaveChangesAsync();
                return toedit;
            }
            catch (Exception ex)
            {
                throw new Exception(ex.ToString());
            }

        }
    }
}
