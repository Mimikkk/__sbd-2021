using System;
using System.Collections.Generic;
using Microsoft.AspNetCore.Http.Extensions;
using Microsoft.AspNetCore.Mvc;
using Npgsql;

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

  [HttpGet("do")]
  public int[] GetGet()
  {
    var cmd = new NpgsqlCommand("select * from test;", App.DB);

    var list = new List<int>();
    using (var reader = cmd.ExecuteReader()) list.Add(reader.GetInt32(0));
    return list.ToArray();
  }
}
}