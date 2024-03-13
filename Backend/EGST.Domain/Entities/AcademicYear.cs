namespace EGST.Domain.Entities
{
    public class AcademicYear
    {
        public Guid ID { get; set; }

        public string Name { get; set; }
        public DateTime Semester_StartDate { get; set; }

        public DateTime Semester_EndDate { get; set; }

        public double Semester_Duration { get; set; }

        public AcademicYear() { }
        public AcademicYear(string name, DateTime start, DateTime end)
        {
            this.ID = Guid.NewGuid();
            this.Name = name;
            this.Semester_StartDate = start.Date;
            this.Semester_EndDate = end.Date;
            this.Semester_Duration = end.Subtract(start).TotalDays;
        }


    }
}
