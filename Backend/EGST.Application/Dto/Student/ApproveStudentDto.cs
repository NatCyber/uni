
namespace EGST.Application.Dto.Student
{
    public class ApproveStudentDto
    {
        public Guid Id { get; set; }
        public int Status { get; set; }
        public DateTime? ExamDate { get; set; }
        public int? ExamStatus { get; set; }
        public DateTime? InterviewDate { get; set; }
        public int? InterviewStatus { get; set; }
    }
}
