using EGST.Application.Interfaces;
using MediatR;


namespace EGST.Application.Features.CourseOffer.Command
{
    public record DeleteCourseOfferingCommand ( Guid Id ) : IRequest<string>
    {
        public class DeleteCourseOfferingCommandHandler : IRequestHandler<DeleteCourseOfferingCommand, string>
        {
            ICourseOfferingRepository _repository;
            public DeleteCourseOfferingCommandHandler ( ICourseOfferingRepository repository )
            {
                _repository = repository;
            }
            public async Task<string> Handle ( DeleteCourseOfferingCommand request, CancellationToken cancellationToken )
            {
                var result = await _repository.Delete(request.Id);
                return result;
            }
        }
    }
}
