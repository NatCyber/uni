using EGST.Application.Dto.Course;
using EGST.Application.Dto.Courses;
using EGST.Domain.Entities;

namespace EGST.Application.Interfaces
{
    public interface ICourseRepository
    {
        Task<Course> Create(CreateCourseDto dto);
        Task<IEnumerable<Course>> GetAll();
        Task<Course> Update(UpdateCourseDto dto);
        Task<string> Delete ( Guid id );
    }
}
