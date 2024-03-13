using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace EGST.Infrastructure.Migrations
{
    /// <inheritdoc />
    public partial class offeringedit : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropIndex(
                name: "IX_Course_Offering_Course_id",
                table: "Course_Offering");

            migrationBuilder.CreateIndex(
                name: "IX_Course_Offering_Course_id_ProgramId_OfferYear",
                table: "Course_Offering",
                columns: new[] { "Course_id", "ProgramId", "OfferYear" },
                unique: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropIndex(
                name: "IX_Course_Offering_Course_id_ProgramId_OfferYear",
                table: "Course_Offering");

            migrationBuilder.CreateIndex(
                name: "IX_Course_Offering_Course_id",
                table: "Course_Offering",
                column: "Course_id");
        }
    }
}
