
using EGST.Domain.Enums;

namespace EGST.Domain.Entities
{
    public class Batch
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public string ProgramId { get; set; }
        public ProgramStream ProgramStream { get; set; }
        public TheoBackground TheoBackground { get; set; }
        public int AcademicYear { get; set; }
        public bool IsActive { get; set; } = true;
    }
}
