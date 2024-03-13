using EGST.Application.Dto.CourseOffer;
using EGST.Domain.Entities;

namespace EGST.Application.Interfaces
{
    public interface ICourseOfferingRepository
    {
        Task<IEnumerable<CourseOffering>> GetAll ();
        Task<CourseOffering> Add ( CourseOffer dto );
        Task<CourseOffering> Update ( UpdateCourseOfferDto dto );
        Task<string> Delete ( Guid id );
    }
}
