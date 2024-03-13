using EGST.Domain.Entities;

namespace EGST.Application.Dto.Modules
{
    public class CreateModuleDto
    {
        public string Name { get; set; }
        public Guid ProgramId { get; set; }
        public Guid? ConcentrationId { get; set; }
    }
}
