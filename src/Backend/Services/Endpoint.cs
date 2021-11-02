using System;
using Microsoft.AspNetCore.Builder;
using static Backend.Applications.Application;
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
    RequestType.Get    => App.MapGet(path, action),
    RequestType.Post   => App.MapPost(path, action),
    RequestType.Put    => App.MapPut(path, action),
    RequestType.Delete => App.MapDelete(path, action),
    _                  => throw new ArgumentOutOfRangeException(path)
  });
}
