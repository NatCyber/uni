using EGST.Application.Dto.CourseOffer;
using EGST.Application.Interfaces;
using MediatR;

namespace EGST.Application.Features.CourseOffer.Command
{
    public record NewCourseOfferingCommand ( CourseOfferDto dto ) : IRequest<IEnumerable<Domain.Entities.CourseOffering>>
    {
    }
    public class NewCourseOfferingCommandHandler : IRequestHandler<NewCourseOfferingCommand, IEnumerable<Domain.Entities.CourseOffering>>
    {
        private readonly ICourseOfferingRepository _courseOfferingRepository;
        public NewCourseOfferingCommandHandler ( ICourseOfferingRepository courseOfferingRepository )
        {
            _courseOfferingRepository = courseOfferingRepository;
        }

        public async Task<IEnumerable<Domain.Entities.CourseOffering>> Handle ( NewCourseOfferingCommand request, CancellationToken cancellationToken )
        {
            var result = new List<Domain.Entities.CourseOffering>();
            try
            {
                foreach (var offer in request.dto.Offerings)
                {
                    var newoffer = await _courseOfferingRepository.Add(offer);
                    result.Add(newoffer);
                }
                return result;
            }
            catch (Exception ex)
            {
                throw new Exception(ex.ToString(), ex);
            }

        }
    }
}
