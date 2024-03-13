using AutoMapper;
using EGST.Application.Dto.Instructor;
using EGST.Domain.Entities;

namespace EGST.Application.Mapper
{
    public class InstructorProfile : Profile
    {
        public InstructorProfile ()
        {
            CreateMap<CreateInstructorDto, Instructor>().ForMember(dest => dest.Id, opt => Guid.NewGuid());
            CreateMap<UpdateInstructorDto, Instructor>()
            .ForAllMembers(x => x.Condition(
                ( src, dest, prop ) =>
                {
                    // ignore both null & empty string properties
                    if (prop == null) return false;
                    if (prop.GetType() == typeof(string) && string.IsNullOrEmpty((string)prop)) return false;
                    return true;
                }
            ));
        }
    }
}
