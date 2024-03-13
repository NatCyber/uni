using EGST.Application.Dto.Batch;
using EGST.Application.Interfaces;
using EGST.Domain.Entities;
using EGST.Domain.Enums;
using EGST.Infrastructure.Context;
using Microsoft.EntityFrameworkCore;


namespace EGST.Infrastructure.Repositories
{
    public class BatchRepository : IBatchRepository
    {
        private readonly EGSTDbContext _dbContext;
        public BatchRepository(EGSTDbContext dbContext)
        {
            _dbContext = dbContext;
        }
        public async Task<Batch> Add(CreateBatchDto Dto)
        {
            try
            {
                var batch = new Batch
                {
                    Id = Guid.NewGuid(),
                    Name = Dto.Name,
                    ProgramId = Dto.ProgramId,
                    ProgramStream = (ProgramStream)Dto.ProgramStream,
                    TheoBackground = (TheoBackground)Dto.TheoBackground,
                    AcademicYear = Dto.AcademicYear,
                };
                await _dbContext.Batch.AddAsync(batch);
                await _dbContext.SaveChangesAsync();
                return batch;
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
                var toDelete = await _dbContext.Batch.FindAsync(id);
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

        public async Task<IEnumerable<Batch>> GetAllBatches()
        {
            try
            {
                var allBatch = await _dbContext.Batch.ToListAsync();
                return allBatch;
            }
            catch (Exception ex)
            {
                throw new Exception(ex.ToString());
            }
        }

        public async Task<Batch> Update(UpdateBatchDto Dto)
        {
            try
            {
                var toupdate = await _dbContext.Batch.FindAsync(Dto.Id);
                if (toupdate != null)
                {
                    if (Dto.Name != null) toupdate.Name = Dto.Name;
                    if (Dto.ProgramId != null) toupdate.ProgramId = Dto.ProgramId;

                    _dbContext.Batch.Update(toupdate);
                    await _dbContext.SaveChangesAsync();

                }
                return toupdate;
            }
            catch (Exception ex) { throw new Exception(ex.ToString()); }
        }
    }
}
