using EGST.Application.Dto.Batch;
using EGST.Application.Features.Batch.Command;
using EGST.Application.Features.Batch.Query;
using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace EGST.WebAPI.Controllers
{
    [Route("api/batch")]
    [ApiController]
    public class BatchController : ControllerBase
    {
        private readonly IMediator _mediator;
        public BatchController ( IMediator mediator )
        {
            _mediator = mediator;
        }

        [HttpGet("all-batch")]
        public async Task<IActionResult> GetAll ()
        {
            var result = await _mediator.Send(new GetBatchesQuery());
            return Ok(result);
        }

        [HttpPost("new-batch")]
        public async Task<IActionResult> NewBatch ( [FromBody] CreateBatchDto dto )
        {
            var result = await _mediator.Send(new CreateBatchCommand(dto));
            return Ok(result);
        }
        [HttpPut("update-batch")]
        public async Task<IActionResult> UpdateBatch ( [FromBody] UpdateBatchDto dto )
        {
            var result = await _mediator.Send(new UpdateBatchCommand(dto));
            return Ok(result);
        }
        [HttpDelete("delete-batch")]
        public async Task<string> DeleteBatch ( [FromBody] string id )
        {
            var result = await _mediator.Send<string>(new DeleteBatchCommand(Guid.Parse(id)));
            return result;
        }
    }
}
