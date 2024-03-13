using EGST.Domain.Enums;

namespace EGST.Domain.Entities;
public partial class StudentApplication
{
    public Guid Id { get; set; }
    public string BigObject { get; set; } = null!;
    public StudentApplictionSatus Status { get; set; }
    public bool IsActive { get; set; } = true;
    public DateTime ApplicationDate { get; set; } = DateTime.Now;
    public DateTime? ExamDate { get; set; }
    public ExamStatus? ExamStatus { get; set; }
    public DateTime? InterviewDate { get; set; }
    public ExamStatus? InterviewSatus { get; set; }
}
