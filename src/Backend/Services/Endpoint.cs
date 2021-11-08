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
    RequestType.Get    => Layout.MapGet(path, action),
    RequestType.Post   => Layout.MapPost(path, action),
    RequestType.Put    => Layout.MapPut(path, action),
    RequestType.Delete => Layout.MapDelete(path, action),
    _                  => throw new ArgumentOutOfRangeException(path)
  });
}
