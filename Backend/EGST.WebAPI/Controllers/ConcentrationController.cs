using EGST.Application.Dto.Batch;
using EGST.Application.Dto.Concentration;
using EGST.Application.Features.Batch.Command;
using EGST.Application.Features.Concentration;
using EGST.Application.Features.Concentration.Query;
using MediatR;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace EGST.WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ConcentrationController : ControllerBase
    {
        private readonly IMediator _mediator;
        public ConcentrationController ( IMediator mediator )
        {
            _mediator = mediator;
        }

        [HttpGet("get-concentrations")]
        public async Task<IActionResult> GetConcentrations ()
        {
            var result = await _mediator.Send(new GetAllConcentrationQuery());
            return Ok(result);
        }
        [HttpPost("create-concentration")]
        public async Task<IActionResult> CreateConcentrations ( [FromBody] CreateConcentrationDto dto )
        {
            var result = await _mediator.Send(new CreateConcentrationCommand(dto));
            return Ok(result);
        }
        [HttpPut("update-concentration")]
        public async Task<IActionResult> UpdateConcentration ( [FromBody] UpdateConcentrationDto dto )
        {
            var result = await _mediator.Send(new UpdateConcentrationCommand(dto));
            return Ok(result);
        }
        [HttpDelete("delete-concentration")]
        public async Task<string> DeleteConcentration ( [FromBody] string id )
        {
            var result = await _mediator.Send<string>(new DeleteConcentrationCommand(Guid.Parse(id)));
            return result;
        }
    }
}
