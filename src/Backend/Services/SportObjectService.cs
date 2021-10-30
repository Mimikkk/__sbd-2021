using System;
using Microsoft.AspNetCore.Mvc;

namespace Backend.Services;

public static class SportObjectService
{
  [HttpGet("hello")]
  public static string Get()
  {
    return $"word babble: {new Bogus.DataSets.Lorem().Word()}";
  }

  [HttpGet("hello/{id:guid}")]
  public static string GetById(Guid id)
  {
    return $"number babble: {id}";
  }
}
