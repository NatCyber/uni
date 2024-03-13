namespace EGST.Domain.Entities;
public partial class Module
{
    public Guid Id { get; set; }
    public string Name { get; set; } = null!;
    public Guid ProgramId { get; set; }
    public Guid? ProgramsId { get; set; }
    public Guid? ConcentrationId { get; set; }
    public bool IsActive { get; set; } = true;
    public virtual ICollection<Course> Courses { get; set; } = new List<Course>();
    public virtual Programs? Programs { get; set; }
    public virtual Concentration? Concentration { get; set; }
}
