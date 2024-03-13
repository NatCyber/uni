using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace EGST.Infrastructure.Migrations
{
    /// <inheritdoc />
    public partial class approvalFlow : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<DateTime>(
                name: "ExamDate",
                table: "Applications",
                type: "datetime2",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "ExamStatus",
                table: "Applications",
                type: "int",
                nullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "InterviewDate",
                table: "Applications",
                type: "datetime2",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "InterviewSatus",
                table: "Applications",
                type: "int",
                nullable: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "ExamDate",
                table: "Applications");

            migrationBuilder.DropColumn(
                name: "ExamStatus",
                table: "Applications");

            migrationBuilder.DropColumn(
                name: "InterviewDate",
                table: "Applications");

            migrationBuilder.DropColumn(
                name: "InterviewSatus",
                table: "Applications");
        }
    }
}
