namespace EGST.Application.Dto.Batch
{
    public class CreateBatchDto
    {
        public string Name { get; set; }
        public string ProgramId { get; set; }
        public int ProgramStream { get; set; }
        public int TheoBackground { get; set; }
        public int AcademicYear { get; set; }
    }
}
