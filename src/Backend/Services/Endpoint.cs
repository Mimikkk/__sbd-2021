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
    RequestType.Get    => Layout.MapGet($"/api/v2/{path}", action),
    RequestType.Post   => Layout.MapPost($"/api/v2/{path}", action),
    RequestType.Put    => Layout.MapPut($"/api/v2/{path}", action),
    RequestType.Delete => Layout.MapDelete($"/api/v2/{path}", action),
    _                  => throw new ArgumentOutOfRangeException(path)
  });
}
