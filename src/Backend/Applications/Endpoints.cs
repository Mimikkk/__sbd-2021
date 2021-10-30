using System.Collections.Generic;
using Backend.Services;
using Backend.Utils;

namespace Backend.Applications;

public static partial class Application
{
  private static void RegisterEndpoints() => Endpoints
    .ForEach(Endpoint.Register);


  internal static readonly IReadOnlyList<Endpoint> Endpoints = new List<Endpoint> {
    new("/hello", RequestType.Get, SportObjectService.Get),
    new("/hello/{id:guid}", RequestType.Get, SportObjectService.GetById),
  };
}
