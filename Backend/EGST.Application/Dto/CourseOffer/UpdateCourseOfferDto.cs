using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EGST.Application.Dto.CourseOffer
{
    public class UpdateCourseOfferDto
    {
        public Guid Id { get; set; }
        public int? YearId { get; set; }
        public int? SemesterId { get; set; }
    }
}
