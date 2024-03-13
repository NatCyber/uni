using EGST.Domain.Enums;

namespace EGST.Domain.Entities;
public partial class Course
{
    public Guid Id { get; set; }
    public string Name { get; set; } = null!;
    public string Code { get; set; } = null!;
    public string Description { get; set; } = null!;
    public int Credit { get; set; }
    public GradeType GradeType { get; set; }
    public Guid ProgramId { get; set; }
    public Guid? ConcentrationId { get; set; }
    public bool IsActive { get; set; } = true;
    public virtual ICollection<CourseOffering> CourseOfferings { get; set; } = new List<CourseOffering>();
    public virtual Programs Program { get; set; } = null!;
    public virtual Concentration? Concentration { get; set; }
}
