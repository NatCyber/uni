using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace EGST.Infrastructure.Migrations
{
    /// <inheritdoc />
    public partial class courseOfferingconcentration : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<Guid>(
                name: "ConcentrationId",
                table: "Course_Offering",
                type: "uniqueidentifier",
                nullable: false,
                defaultValue: new Guid("00000000-0000-0000-0000-000000000000"));

            migrationBuilder.CreateIndex(
                name: "IX_Course_Offering_ConcentrationId",
                table: "Course_Offering",
                column: "ConcentrationId");

            migrationBuilder.AddForeignKey(
                name: "FK_Course_Offering_Concentrations_ConcentrationId",
                table: "Course_Offering",
                column: "ConcentrationId",
                principalTable: "Concentrations",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Course_Offering_Concentrations_ConcentrationId",
                table: "Course_Offering");

            migrationBuilder.DropIndex(
                name: "IX_Course_Offering_ConcentrationId",
                table: "Course_Offering");

            migrationBuilder.DropColumn(
                name: "ConcentrationId",
                table: "Course_Offering");
        }
    }
}
