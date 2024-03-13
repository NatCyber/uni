using EGST.Application.Dto.Course;
using EGST.Application.Dto.Courses;
using EGST.Application.Interfaces;
using EGST.Domain.Entities;
using EGST.Infrastructure.Context;
using Microsoft.EntityFrameworkCore;

namespace EGST.Infrastructure.Repositories
{
    public class CourseRepository : ICourseRepository
    {
        private readonly EGSTDbContext _dbcontext;

        public CourseRepository(EGSTDbContext dbContext)
        {
            _dbcontext = dbContext;
        }
        public async Task<Course> Create(CreateCourseDto dto)
        {
            var course = new Course
            {
                Id = Guid.NewGuid(),
                Name = dto.Name,
                Description = dto.Description,
                Code = dto.Code,
                Credit = dto.Credit,
                GradeType = dto.GradeType,
                ProgramId = dto.ProgramId,
                ConcentrationId = dto.ConcentrationID != null ? dto.ConcentrationID : null
            };
            try
            {
                _dbcontext.Courses.Add(course);
                await _dbcontext.SaveChangesAsync();

                return course;
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
                var toDelete = await _dbcontext.Courses.FindAsync(id);
                if (toDelete != null)
                {
                    toDelete.IsActive = false;
                    await _dbcontext.SaveChangesAsync();
                    return "Deleted Successfuly";

                }
                return "Not Found";
            }
            catch (Exception ex)
            {
                throw new Exception(ex.ToString());
            }


        }
        public async Task<IEnumerable<Course>> GetAll()
        {
            var courses = await _dbcontext.Courses.Where(c => c.IsActive == true).ToListAsync();
            return courses;
        }
        public async Task<Course> Update(UpdateCourseDto dto)
        {
            try
            {
                var toEdit = await _dbcontext.Courses.FindAsync(dto.Id);
                if (toEdit != null)
                {

                    if (dto.Name != null) toEdit.Name = dto.Name;
                    if (dto.Code != null) toEdit.Code = dto.Code;
                    if (dto.Description != null) toEdit.Description = dto.Description;
                    if (dto.Credit != null) toEdit.Credit = (int)dto.Credit;
                    if (dto.GradeType != null) toEdit.GradeType = (Domain.Enums.GradeType)dto.GradeType;
                    _dbcontext.Update(toEdit);
                    await _dbcontext.SaveChangesAsync();
                    return toEdit;
                }
                else
                {
                    throw new Exception("Course Not Found");
                }

            }
            catch (Exception ex)
            {
                throw new Exception(ex.ToString());
            }
        }
    }
}
