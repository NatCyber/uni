using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace EGST.Infrastructure.Migrations
{
    /// <inheritdoc />
    public partial class offerYear : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropIndex(
                name: "IX_Course_Offering_Course_id_ProgramId_OfferYear_BatchId",
                table: "Course_Offering");

            migrationBuilder.DropColumn(
                name: "OfferYear",
                table: "Course_Offering");

            migrationBuilder.CreateIndex(
                name: "IX_Course_Offering_Course_id_ProgramId_BatchId",
                table: "Course_Offering",
                columns: new[] { "Course_id", "ProgramId", "BatchId" },
                unique: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropIndex(
                name: "IX_Course_Offering_Course_id_ProgramId_BatchId",
                table: "Course_Offering");

            migrationBuilder.AddColumn<int>(
                name: "OfferYear",
                table: "Course_Offering",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateIndex(
                name: "IX_Course_Offering_Course_id_ProgramId_OfferYear_BatchId",
                table: "Course_Offering",
                columns: new[] { "Course_id", "ProgramId", "OfferYear", "BatchId" },
                unique: true);
        }
    }
}
