using EGST.Application.Interfaces;
using MediatR;


namespace EGST.Application.Features.Course.Command
{
    public record DeleteCourseCommand ( Guid Id ) :IRequest<string>
    {
        public class DeleteCourseCommandHandler : IRequestHandler<DeleteCourseCommand, string>
        {
            ICourseRepository _repository;
            public DeleteCourseCommandHandler ( ICourseRepository repository )
            {
                _repository = repository;
            }

            public async Task<string> Handle ( DeleteCourseCommand request, CancellationToken cancellationToken )
            {
                var result = await _repository.Delete(request.Id);
                return result;
            }
        }
    }
}
