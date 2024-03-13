namespace EGST.Domain.Entities
{
    public class Concentration
    {
        public Guid Id { get; set; }
        public string Name { get; set; } = null!;
        public string Code { get; set; }
        public Guid ProgramId { get; set; }
        public bool IsActive { get; set; } = true;
        public virtual List<Course> Courses { get; set; } = new List<Course>();
        public virtual Programs Program { get; set; } = null!;
    }
}
