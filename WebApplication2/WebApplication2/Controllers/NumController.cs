using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace WebApplication2.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class NumController : ControllerBase
    {
        [HttpPost("numK")]
        public ActionResult <int>  numk([FromBody] ArrP p)
        {
            if (p == null || p.Arr1 == null || p.Arr2 == null || p.K < 1 || p.K > (p.Arr1.Length + p.Arr2.Length)) 
                return BadRequest();
            return Numbers.check(p.Arr1, p.Arr2, p.Arr1.Length, p.Arr2.Length, 0, 0, p.K);

        }
    }
}