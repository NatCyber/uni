using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace EGST.Infrastructure.Migrations
{
    /// <inheritdoc />
    public partial class offeringBatch : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropIndex(
                name: "IX_Course_Offering_Course_id_ProgramId_OfferYear",
                table: "Course_Offering");

            migrationBuilder.AddColumn<Guid>(
                name: "BatchId",
                table: "Course_Offering",
                type: "uniqueidentifier",
                nullable: false,
                defaultValue: new Guid("00000000-0000-0000-0000-000000000000"));

            migrationBuilder.CreateIndex(
                name: "IX_Course_Offering_BatchId",
                table: "Course_Offering",
                column: "BatchId");

            migrationBuilder.CreateIndex(
                name: "IX_Course_Offering_Course_id_ProgramId_OfferYear_BatchId",
                table: "Course_Offering",
                columns: new[] { "Course_id", "ProgramId", "OfferYear", "BatchId" },
                unique: true);

            migrationBuilder.AddForeignKey(
                name: "FK_Course_Offering_Batch_BatchId",
                table: "Course_Offering",
                column: "BatchId",
                principalTable: "Batch",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Course_Offering_Batch_BatchId",
                table: "Course_Offering");

            migrationBuilder.DropIndex(
                name: "IX_Course_Offering_BatchId",
                table: "Course_Offering");

            migrationBuilder.DropIndex(
                name: "IX_Course_Offering_Course_id_ProgramId_OfferYear_BatchId",
                table: "Course_Offering");

            migrationBuilder.DropColumn(
                name: "BatchId",
                table: "Course_Offering");

            migrationBuilder.CreateIndex(
                name: "IX_Course_Offering_Course_id_ProgramId_OfferYear",
                table: "Course_Offering",
                columns: new[] { "Course_id", "ProgramId", "OfferYear" },
                unique: true);
        }
    }
}
