using EGST.Application.Dto.CourseOffer;
using EGST.Application.Interfaces;
using MediatR;


namespace EGST.Application.Features.CourseOffer.Command
{
    public record UpdateCourseOfferCommand ( UpdateCourseOfferDto Dto ) : IRequest<Domain.Entities.CourseOffering>
    {
        public class UpdateCourseOfferCommandHandler : IRequestHandler<UpdateCourseOfferCommand, Domain.Entities.CourseOffering>
        {
            ICourseOfferingRepository _repository;

            public UpdateCourseOfferCommandHandler ( ICourseOfferingRepository repository )
            {
                _repository = repository;
            }

            public async Task<Domain.Entities.CourseOffering> Handle ( UpdateCourseOfferCommand request, CancellationToken cancellationToken )
            {
                var result = await _repository.Update(request.Dto);
                return result;
            }
        }
    }
}
