using EGST.Application.Dto.CourseOffer;
using EGST.Application.Interfaces;
using EGST.Domain.Entities;
using EGST.Domain.Enums;
using EGST.Infrastructure.Context;
using Microsoft.EntityFrameworkCore;

namespace EGST.Infrastructure.Repositories
{
    public class CourseOfferingRepository : ICourseOfferingRepository
    {
        private readonly EGSTDbContext _dbContext;

        public CourseOfferingRepository ( EGSTDbContext dbContext )
        {
            _dbContext = dbContext;
        }

        public async Task<CourseOffering> Add ( CourseOffer dto )
        {
            CourseOffering courseOffering = new CourseOffering
            {
                Id = Guid.NewGuid(),
                CourseId = dto.CourseId,
                ProgramId = dto.ProgramId,
                ConcentrationId = dto.ConcentrationId,
                BatchId = dto.BatchId,
                Year = (Years)dto.YearId,
                Semester = (Semesters)dto.SemesterId,
                TheoBackground = (TheoBackground)dto.TheoBackgroundId,
                Stream =(ProgramStream) dto.StreamId,
            };

            try
            {
                await _dbContext.AddAsync(courseOffering);
                await _dbContext.SaveChangesAsync();
                return courseOffering;
            }
            catch (Exception ex)
            {
                throw new Exception(ex.ToString(), ex);
            }

        }

        public async Task<string> Delete ( Guid id )
        {
            try
            {
                var toDelete = await _dbContext.CourseOfferings.FindAsync(id);
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
        public async Task<IEnumerable<CourseOffering>> GetAll ()
        {
            var courseOfferings = await _dbContext.CourseOfferings.Include(o => o.Course).ToListAsync();
            return courseOfferings;
        }

        public async Task<CourseOffering> Update ( UpdateCourseOfferDto dto )
        {
            var toupdate = await _dbContext.CourseOfferings.FindAsync(dto.Id);
            if (toupdate != null)
            {
                if (dto.YearId != null) toupdate.Year = (Years)dto.YearId;
                if (dto.SemesterId != null) toupdate.Semester = (Semesters)dto.SemesterId;
                _dbContext.Update(toupdate);
                await _dbContext.SaveChangesAsync();
            }
            return toupdate;
        }
    }
}
