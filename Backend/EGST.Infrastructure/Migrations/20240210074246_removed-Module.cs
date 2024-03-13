using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace EGST.Infrastructure.Migrations
{
    /// <inheritdoc />
    public partial class removedModule : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Courses_Modules_ModuleId",
                table: "Courses");

            migrationBuilder.AlterColumn<Guid>(
                name: "ModuleId",
                table: "Courses",
                type: "uniqueidentifier",
                nullable: true,
                oldClrType: typeof(Guid),
                oldType: "uniqueidentifier");

            migrationBuilder.AddColumn<Guid>(
                name: "ConcentrationId",
                table: "Courses",
                type: "uniqueidentifier",
                nullable: true);

            migrationBuilder.AddColumn<Guid>(
                name: "ProgramId",
                table: "Courses",
                type: "uniqueidentifier",
                nullable: false,
                defaultValue: new Guid("00000000-0000-0000-0000-000000000000"));

            migrationBuilder.AddColumn<string>(
                name: "Code",
                table: "Concentrations",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.CreateIndex(
                name: "IX_Courses_ConcentrationId",
                table: "Courses",
                column: "ConcentrationId");

            migrationBuilder.CreateIndex(
                name: "IX_Courses_ProgramId",
                table: "Courses",
                column: "ProgramId");

            migrationBuilder.AddForeignKey(
                name: "FK_Courses_Concentrations_ConcentrationId",
                table: "Courses",
                column: "ConcentrationId",
                principalTable: "Concentrations",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Courses_Modules_ModuleId",
                table: "Courses",
                column: "ModuleId",
                principalTable: "Modules",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Courses_Programs_ProgramId",
                table: "Courses",
                column: "ProgramId",
                principalTable: "Programs",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Courses_Concentrations_ConcentrationId",
                table: "Courses");

            migrationBuilder.DropForeignKey(
                name: "FK_Courses_Modules_ModuleId",
                table: "Courses");

            migrationBuilder.DropForeignKey(
                name: "FK_Courses_Programs_ProgramId",
                table: "Courses");

            migrationBuilder.DropIndex(
                name: "IX_Courses_ConcentrationId",
                table: "Courses");

            migrationBuilder.DropIndex(
                name: "IX_Courses_ProgramId",
                table: "Courses");

            migrationBuilder.DropColumn(
                name: "ConcentrationId",
                table: "Courses");

            migrationBuilder.DropColumn(
                name: "ProgramId",
                table: "Courses");

            migrationBuilder.DropColumn(
                name: "Code",
                table: "Concentrations");

            migrationBuilder.AlterColumn<Guid>(
                name: "ModuleId",
                table: "Courses",
                type: "uniqueidentifier",
                nullable: false,
                defaultValue: new Guid("00000000-0000-0000-0000-000000000000"),
                oldClrType: typeof(Guid),
                oldType: "uniqueidentifier",
                oldNullable: true);

            migrationBuilder.AddForeignKey(
                name: "FK_Courses_Modules_ModuleId",
                table: "Courses",
                column: "ModuleId",
                principalTable: "Modules",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
