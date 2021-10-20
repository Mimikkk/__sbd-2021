using System;
using System.Collections.Generic;
using Microsoft.AspNetCore.Http.Extensions;
using Microsoft.AspNetCore.Mvc;

namespace Backend.Controllers
{
[Route("api/[controller]")]
public class ValuesController : ControllerBase
{
  // GET: api/values
  [HttpGet]
  public IEnumerable<int> Get()
  {
    Console.WriteLine(Request.GetDisplayUrl());
    Console.WriteLine(Request.GetEncodedUrl());

    return new[] { 1, 2 };
  }

  // POST api/values/5
  [HttpPost("{id:int}")]
  public int Post(int id) => id;
}
}