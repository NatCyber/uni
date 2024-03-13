using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace EGST.Infrastructure.Migrations
{
    /// <inheritdoc />
    public partial class concentration : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<Guid>(
                name: "ConcentrationId",
                table: "Modules",
                type: "uniqueidentifier",
                nullable: true);

            migrationBuilder.CreateTable(
                name: "Concentrations",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    ProgramId = table.Column<Guid>(type: "uniqueidentifier", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Concentrations", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Concentrations_Programs_ProgramId",
                        column: x => x.ProgramId,
                        principalTable: "Programs",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Modules_ConcentrationId",
                table: "Modules",
                column: "ConcentrationId");

            migrationBuilder.CreateIndex(
                name: "IX_Concentrations_ProgramId",
                table: "Concentrations",
                column: "ProgramId");

            migrationBuilder.AddForeignKey(
                name: "FK_Modules_Concentrations_ConcentrationId",
                table: "Modules",
                column: "ConcentrationId",
                principalTable: "Concentrations",
                principalColumn: "Id");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Modules_Concentrations_ConcentrationId",
                table: "Modules");

            migrationBuilder.DropTable(
                name: "Concentrations");

            migrationBuilder.DropIndex(
                name: "IX_Modules_ConcentrationId",
                table: "Modules");

            migrationBuilder.DropColumn(
                name: "ConcentrationId",
                table: "Modules");
        }
    }
}
