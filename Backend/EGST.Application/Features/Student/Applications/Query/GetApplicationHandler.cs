using EGST.Application.Interfaces;
using EGST.Domain.Entities;
using MediatR;

namespace EGST.Application.Features.Students.Applications.Query
{
    public record GetApplicationQuery() : IRequest<IEnumerable<StudentApplication>>;
    public class GetApplicationHandler : IRequestHandler<GetApplicationQuery, IEnumerable<StudentApplication>>
    {
        private readonly IStudentsRepository _repository;
        public GetApplicationHandler(IStudentsRepository repository)
        {
            _repository = repository;
        }
        public async Task<IEnumerable<StudentApplication>> Handle(GetApplicationQuery request, CancellationToken cancellationToken)
        {
            return await _repository.GetApplications();
        }
    }
}
