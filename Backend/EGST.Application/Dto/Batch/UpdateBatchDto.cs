using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EGST.Application.Dto.Batch
{
    public class UpdateBatchDto
    {
        public Guid Id { get; set; }
        public string? Name { get; set; }
        public string? ProgramId { get; set; }
        public int? AcademicYear { get; set; }
    }
}
