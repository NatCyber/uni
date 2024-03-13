using EGST.Application.Dto.AcademicYear;

namespace EGST.Application.Interfaces
{
    public interface IAcademicYearRepository
    {
        Task<string> CreateAcademicYear(CreateAcademicYearRequest dto);
    }
}
