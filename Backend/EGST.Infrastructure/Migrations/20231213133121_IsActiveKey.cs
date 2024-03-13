using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace EGST.Infrastructure.Migrations
{
    /// <inheritdoc />
    public partial class IsActiveKey : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<Guid>(
                name: "BatchId",
                table: "Student",
                type: "uniqueidentifier",
                nullable: false,
                defaultValue: new Guid("00000000-0000-0000-0000-000000000000"));

            migrationBuilder.AddColumn<bool>(
                name: "IsActive",
                table: "Student",
                type: "bit",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<bool>(
                name: "IsActive",
                table: "Programs",
                type: "bit",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<bool>(
                name: "IsActive",
                table: "Modules",
                type: "bit",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<bool>(
                name: "IsActive",
                table: "Courses",
                type: "bit",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<bool>(
                name: "IsActive",
                table: "Course_Offering",
                type: "bit",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<bool>(
                name: "IsActive",
                table: "Concentrations",
                type: "bit",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<bool>(
                name: "IsActive",
                table: "Batch",
                type: "bit",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<bool>(
                name: "IsActive",
                table: "Applications",
                type: "bit",
                nullable: false,
                defaultValue: false);

            migrationBuilder.CreateIndex(
                name: "IX_Student_BatchId",
                table: "Student",
                column: "BatchId");

            migrationBuilder.AddForeignKey(
                name: "FK_Student_Batch_BatchId",
                table: "Student",
                column: "BatchId",
                principalTable: "Batch",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Student_Batch_BatchId",
                table: "Student");

            migrationBuilder.DropIndex(
                name: "IX_Student_BatchId",
                table: "Student");

            migrationBuilder.DropColumn(
                name: "BatchId",
                table: "Student");

            migrationBuilder.DropColumn(
                name: "IsActive",
                table: "Student");

            migrationBuilder.DropColumn(
                name: "IsActive",
                table: "Programs");

            migrationBuilder.DropColumn(
                name: "IsActive",
                table: "Modules");

            migrationBuilder.DropColumn(
                name: "IsActive",
                table: "Courses");

            migrationBuilder.DropColumn(
                name: "IsActive",
                table: "Course_Offering");

            migrationBuilder.DropColumn(
                name: "IsActive",
                table: "Concentrations");

            migrationBuilder.DropColumn(
                name: "IsActive",
                table: "Batch");

            migrationBuilder.DropColumn(
                name: "IsActive",
                table: "Applications");
        }
    }
}
