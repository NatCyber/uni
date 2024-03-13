using EGST.Domain.Entities;
using Microsoft.EntityFrameworkCore;

namespace EGST.Infrastructure.Context
{
    public class EGSTDbContext : DbContext
    {
        public EGSTDbContext(DbContextOptions<EGSTDbContext> options) : base(options) { }
        public virtual DbSet<Batch> Batch { get; set; }
        public virtual DbSet<Course> Courses { get; set; }
        public virtual DbSet<CourseOffering> CourseOfferings { get; set; }
        public virtual DbSet<Module> Modules { get; set; }
        public virtual DbSet<Programs> Programs { get; set; }
        public DbSet<Student> Students { get; set; }
        public DbSet<StudentApplication> Applications { get; set; }
        public DbSet<User> Users { get; set; }
        public DbSet<Concentration> Concentrations { get; set; }
        public DbSet<Instructor> Instructors { get; set; }


        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {

            modelBuilder.Entity<User>().HasData(
                new User
                {
                    Id = Guid.Parse("ddae0194-6117-4ce4-aa42-d408d5235d88"),
                    FullName = "Administrator",
                    Email = "admin@egst.com",
                    Password = "$2a$12$.Ui8Ph6NXiGg1nDg6mWsxOxvBZ8gtX1QCe4E4iI30/2YBtrEQGvie",
                    Role = "Admin"
                }
                );

            modelBuilder.Entity<Student>().ToTable("Student");
            modelBuilder.Entity<Course>(entity =>
            {
                entity.HasIndex(e => e.ConcentrationId, "IX_Courses_ConcentrationId");

                entity.Property(e => e.Id).ValueGeneratedNever();

                entity.HasOne(d => d.Concentration).WithMany(p => p.Courses).HasForeignKey(d => d.ConcentrationId);
            });

            modelBuilder.Entity<CourseOffering>(entity =>
            {
                entity.ToTable("Course_Offering");

                entity.Property(e => e.Id)
                    .ValueGeneratedNever()
                    .HasColumnName("id");
                entity.Property(e => e.CourseId).HasColumnName("Course_id");

                entity.HasIndex(e => new { e.CourseId, e.ProgramId, e.BatchId }).IsUnique();

                entity.HasOne(d => d.Course).WithMany(p => p.CourseOfferings)
                    .HasForeignKey(d => d.CourseId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Course_Offering_Course");
            });


            modelBuilder.Entity<Programs>(entity =>
            {
                entity.Property(e => e.Id).ValueGeneratedNever();
                entity.Property(e => e.Code).HasDefaultValueSql("(N'')");
                entity.Property(e => e.Description).HasDefaultValueSql("(N'')");
            });


            modelBuilder.Entity<Student>(entity =>
            {
                entity.ToTable("Student");

                entity.Property(e => e.Id).ValueGeneratedNever();
                entity.Property(e => e.StudentId).HasColumnName("StudentID");

                entity.HasOne(d => d.IdNavigation).WithOne(p => p.Student).HasForeignKey<Student>(d => d.Id);
            });

            modelBuilder.Entity<User>(entity =>
            {
                entity.Property(e => e.Id).ValueGeneratedNever();
            });





        }
    }
}
