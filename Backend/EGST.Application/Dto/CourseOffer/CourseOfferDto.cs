using EGST.Domain.Enums;

namespace EGST.Application.Dto.CourseOffer
{
    public class CourseOffer
    {
        public Guid CourseId { get; set; }
        public Guid ProgramId { get; set; }
        public Guid ConcentrationId { get; set; }
        public Guid BatchId { get; set; }
        public int YearId { get; set; }
        public int SemesterId { get; set; }
        public int TheoBackgroundId { get; set; }
        public int StreamId { get; set; }
    }
    public class CourseOfferDto
    {
        public List<CourseOffer> Offerings { get; set; } = new List<CourseOffer>();
    }
}
