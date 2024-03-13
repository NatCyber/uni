using EGST.Application.Dto.Concentration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EGST.Application.Interfaces
{
    public interface IConcentrationRepository
    {
        Task<IEnumerable<Domain.Entities.Concentration>> GetAllConcentrationsAsync ();
        Task<Domain.Entities.Concentration> Add ( CreateConcentrationDto Dto );
        Task<Domain.Entities.Concentration> Update ( UpdateConcentrationDto Dto );
        Task<string> Delete ( Guid id );
    }
}
