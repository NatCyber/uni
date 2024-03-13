using EGST.Domain.Enums;

namespace EGST.Application.Dto.Courses
{
    public class CreateCourseDto
    {
        public string Name { get; set; }
        public string Code { get; set; }
        public string Description { get; set; }
        public Guid ProgramId { get; set; }
        public int Credit { get; set; }
        public GradeType GradeType { get; set; }
        public Guid? ConcentrationID { get; set; }

    }
}
