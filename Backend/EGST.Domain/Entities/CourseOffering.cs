using EGST.Domain.Enums;

namespace EGST.Domain.Entities;
public class CourseOffering
{
    public Guid Id { get; set; }
    public Guid CourseId { get; set; }
    public Guid ProgramId { get; set; }
    public Guid ConcentrationId { get; set; }
    public ProgramStream Stream { get; set; }
    public TheoBackground TheoBackground { get; set; }
    public Years Year { get; set; }
    public Semesters Semester { get; set; }
    public Guid BatchId { get; set; }
    public bool IsActive { get; set; } = true;
    public virtual Batch Batch { get; set; }
    public virtual Course Course { get; set; } = null!;
    public virtual Concentration Concentration { get; set; }

}
