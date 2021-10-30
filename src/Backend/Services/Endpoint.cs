using System;
using Microsoft.AspNetCore.Builder;
using static Backend.Program;
using static Backend.Utils.Unit;

namespace Backend.Services;

public enum RequestType
{
  Get,
  Post,
  Put,
  Delete,
}
public readonly record struct Endpoint(string path, RequestType type, Delegate action)
{
  public static void Register(Endpoint endpoint) => endpoint.Register();
  public void Register() => Voided(type switch {
    RequestType.Get    => Application.MapGet(path, action),
    RequestType.Post   => Application.MapPost(path, action),
    RequestType.Put    => Application.MapPut(path, action),
    RequestType.Delete => Application.MapDelete(path, action),
    _                  => throw new ArgumentOutOfRangeException(path)
  });
}
