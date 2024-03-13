using EGST.Application.Dto.Batch;
using EGST.Application.Dto.CourseOffer;
using EGST.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EGST.Application.Interfaces
{
    public interface IBatchRepository
    {
        Task<Batch> Add ( CreateBatchDto Dto );
        Task<IEnumerable<Batch>> GetAllBatches ();
        Task<Batch> Update ( UpdateBatchDto Dto );
        Task<string> Delete ( Guid id );
    }
}
