namespace EGST.Domain.Entities
{
    public class Instructor
    {
        public Guid Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string PersonalTitle { get; set; }
        public string Sex { get; set; }
        public string Qualification { get; set; }
        public string Position { get; set; }
        public string Photo { get; set; }
        public string Denomination { get; set; }
        public string Mobile { get; set; }
        public string? OfficePhone { get; set; }
        public string Email { get; set; }
        public string? PostAddress { get; set; }
        public bool IsActive { get; set; } = false;
        public bool IsDeleted { get; set; } = false;
        public string Type { get; set; }
    }
}
