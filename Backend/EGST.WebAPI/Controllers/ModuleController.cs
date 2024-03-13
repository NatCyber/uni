using EGST.Application.Dto.Modules;
using EGST.Application.Features.Modules.Command;
using EGST.Application.Features.Modules.Query;
using EGST.Domain.Entities;
using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace EGST.WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ModuleController : ControllerBase
    {
        private readonly IMediator _mediator;

        public ModuleController ( IMediator mediator )
        {
            _mediator = mediator;
        }

        [HttpGet("get-modules")]
        public async Task<IEnumerable<Module>> GetModules ()
        {
            var modules = await _mediator.Send(new GetAllModulesQuery());
            return modules;
        }

        [HttpPost("add-module")]
        public async Task<IActionResult> AddModule ( [FromBody] CreateModuleDto Dto )
        {
            var module = await _mediator.Send(new CreateModuleCommand(Dto));
            return Ok(module);
        }
        [HttpPut("update-module")]
        public async Task<IActionResult> UpdateModule ( [FromBody] UpdateModuleDto Dto )
        {
            var updated = await _mediator.Send(new UpdateModuleCommand(Dto));
            return Ok(updated);
        }
        [HttpDelete("delete-module")]
        public async Task<string> DeleteModule ( [FromBody] string Id )
        {
            var result = await _mediator.Send(new DeleteModuleCommand(Guid.Parse(Id)));
            return result;
        }
    }
}
