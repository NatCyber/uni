namespace EGST.Application.Dto.Concentration
{
    public class CreateConcentrationDto
    {
        public string Name { get; set; }
        public string Code { get; set; }
        public Guid ProgramId { get; set; }
    }
}
