namespace EGST.Domain.Entities;
public partial class Programs
{
    public Guid Id { get; set; }
    public string Name { get; set; } = null!;
    public string Code { get; set; } = null!;
    public string Description { get; set; } = null!;
    public bool IsActive { get; set; } = true;
    public virtual ICollection<Course> Courses { get; set; } = new List<Course>();
    public virtual ICollection<Concentration>? Concentrations { get; set; }
}
