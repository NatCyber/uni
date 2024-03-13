﻿// <auto-generated />
using System;
using EGST.Infrastructure.Context;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

#nullable disable

namespace EGST.Infrastructure.Migrations
{
    [DbContext(typeof(EGSTDbContext))]
    [Migration("20231103075930_offering-edit")]
    partial class offeringedit
    {
        /// <inheritdoc />
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "7.0.5")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder);

            modelBuilder.Entity("EGST.Domain.Entities.Course", b =>
                {
                    b.Property<Guid>("Id")
                        .HasColumnType("uniqueidentifier");

                    b.Property<string>("Code")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("Credit")
                        .HasColumnType("int");

                    b.Property<string>("Description")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("GradeType")
                        .HasColumnType("int");

                    b.Property<Guid>("ModuleId")
                        .HasColumnType("uniqueidentifier");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.HasIndex(new[] { "ModuleId" }, "IX_Courses_ModuleId");

                    b.ToTable("Courses");
                });

            modelBuilder.Entity("EGST.Domain.Entities.CourseOffering", b =>
                {
                    b.Property<Guid>("Id")
                        .HasColumnType("uniqueidentifier")
                        .HasColumnName("id");

                    b.Property<Guid>("CourseId")
                        .HasColumnType("uniqueidentifier")
                        .HasColumnName("Course_id");

                    b.Property<int>("OfferYear")
                        .HasColumnType("int");

                    b.Property<Guid>("ProgramId")
                        .HasColumnType("uniqueidentifier");

                    b.Property<int>("Semester")
                        .HasColumnType("int");

                    b.Property<int>("Year")
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.HasIndex("CourseId", "ProgramId", "OfferYear")
                        .IsUnique();

                    b.ToTable("Course_Offering", (string)null);
                });

            modelBuilder.Entity("EGST.Domain.Entities.Module", b =>
                {
                    b.Property<Guid>("Id")
                        .HasColumnType("uniqueidentifier");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<Guid>("ProgramId")
                        .HasColumnType("uniqueidentifier");

                    b.Property<Guid?>("ProgramsId")
                        .HasColumnType("uniqueidentifier");

                    b.HasKey("Id");

                    b.HasIndex(new[] { "ProgramsId" }, "IX_Modules_ProgramsId");

                    b.ToTable("Modules");
                });

            modelBuilder.Entity("EGST.Domain.Entities.Programs", b =>
                {
                    b.Property<Guid>("Id")
                        .HasColumnType("uniqueidentifier");

                    b.Property<string>("Code")
                        .IsRequired()
                        .ValueGeneratedOnAdd()
                        .HasColumnType("nvarchar(max)")
                        .HasDefaultValueSql("(N'')");

                    b.Property<string>("Description")
                        .IsRequired()
                        .ValueGeneratedOnAdd()
                        .HasColumnType("nvarchar(max)")
                        .HasDefaultValueSql("(N'')");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("Programs");
                });

            modelBuilder.Entity("EGST.Domain.Entities.Student", b =>
                {
                    b.Property<Guid>("Id")
                        .HasColumnType("uniqueidentifier");

                    b.Property<Guid>("StudentId")
                        .HasColumnType("uniqueidentifier")
                        .HasColumnName("StudentID");

                    b.HasKey("Id");

                    b.ToTable("Student", (string)null);
                });

            modelBuilder.Entity("EGST.Domain.Entities.StudentApplication", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uniqueidentifier");

                    b.Property<string>("BigObject")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("Applications");
                });

            modelBuilder.Entity("EGST.Domain.Entities.User", b =>
                {
                    b.Property<Guid>("Id")
                        .HasColumnType("uniqueidentifier");

                    b.Property<string>("Email")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("FullName")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Password")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Role")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("Users");

                    b.HasData(
                        new
                        {
                            Id = new Guid("ddae0194-6117-4ce4-aa42-d408d5235d88"),
                            Email = "admin@egst.com",
                            FullName = "Administrator",
                            Password = "$2a$12$.Ui8Ph6NXiGg1nDg6mWsxOxvBZ8gtX1QCe4E4iI30/2YBtrEQGvie",
                            Role = "Admin"
                        });
                });

            modelBuilder.Entity("EGST.Domain.Entities.Course", b =>
                {
                    b.HasOne("EGST.Domain.Entities.Module", "Module")
                        .WithMany("Courses")
                        .HasForeignKey("ModuleId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Module");
                });

            modelBuilder.Entity("EGST.Domain.Entities.CourseOffering", b =>
                {
                    b.HasOne("EGST.Domain.Entities.Course", "Course")
                        .WithMany("CourseOfferings")
                        .HasForeignKey("CourseId")
                        .IsRequired()
                        .HasConstraintName("FK_Course_Offering_Course");

                    b.Navigation("Course");
                });

            modelBuilder.Entity("EGST.Domain.Entities.Module", b =>
                {
                    b.HasOne("EGST.Domain.Entities.Programs", "Programs")
                        .WithMany("Modules")
                        .HasForeignKey("ProgramsId");

                    b.Navigation("Programs");
                });

            modelBuilder.Entity("EGST.Domain.Entities.Student", b =>
                {
                    b.HasOne("EGST.Domain.Entities.User", "IdNavigation")
                        .WithOne("Student")
                        .HasForeignKey("EGST.Domain.Entities.Student", "Id")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("IdNavigation");
                });

            modelBuilder.Entity("EGST.Domain.Entities.Course", b =>
                {
                    b.Navigation("CourseOfferings");
                });

            modelBuilder.Entity("EGST.Domain.Entities.Module", b =>
                {
                    b.Navigation("Courses");
                });

            modelBuilder.Entity("EGST.Domain.Entities.Programs", b =>
                {
                    b.Navigation("Modules");
                });

            modelBuilder.Entity("EGST.Domain.Entities.User", b =>
                {
                    b.Navigation("Student");
                });
#pragma warning restore 612, 618
        }
    }
}
