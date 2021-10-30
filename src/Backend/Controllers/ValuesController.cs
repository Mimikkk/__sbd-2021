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
  public List<object[]> GetGet()
  {
    var sqlCommand = new NpgsqlCommand("SELECT * FROM test", App.DB);

    var result = new List<object[]>();
    using var dataReader = sqlCommand.ExecuteReader();

    while (dataReader.Read())
    {
      var values = new object[dataReader.FieldCount];
      for (var i = 0; i < dataReader.FieldCount; i++) values[i] = dataReader[i];
      result.Add(values);
    }

    Console.WriteLine(1);

    return result;
  }
}
}
