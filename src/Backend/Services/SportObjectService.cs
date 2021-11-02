using System;

namespace Backend.Services;

public static class SportObjectService
{
  public static string Get() => $"word babble: {new Bogus.DataSets.Lorem().Word()}";
  public static string GetById(Guid id) => $"number babble: {id}";
}
