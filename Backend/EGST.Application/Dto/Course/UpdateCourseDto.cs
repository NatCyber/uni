using EGST.Domain.Enums;


namespace EGST.Application.Dto.Course
{
    public class UpdateCourseDto
    {
        public Guid Id { get; set; }
        public string? Name { get; set; }
        public string? Code { get; set; }
        public string? Description { get; set; }
        public int? Credit { get; set; }
        public GradeType? GradeType { get; set; }
    }
}
