namespace EGST.Domain.Entities;
public partial class Student
{
    public Guid Id { get; set; }
    public Guid StudentId { get; set; }
    public Guid ApplicantId { get; set; }
    public Guid BatchId { get; set; }
    public List<Guid> CourseOfferingId { get; set; }
    public bool IsActive { get; set; } = true;
    public virtual Batch Batch { get; set; }
    public virtual List<CourseOffering> CourseOffering { get; set; }
    public virtual User IdNavigation { get; set; } = null!;
}
