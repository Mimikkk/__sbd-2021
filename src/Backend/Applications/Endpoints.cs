using System.Collections.Generic;
using Backend.Services;
using Backend.Utils;

namespace Backend.Applications;

public static partial class Application
{
  private static void RegisterEndpoints() => Endpoints
    .ForEach(Endpoint.Register);


  internal static readonly IReadOnlyList<Endpoint> Endpoints = new List<Endpoint> {
    new("/courts", RequestType.Get, CourtService.Get),
    new("/courts", RequestType.Post, CourtService.Post),
    new("/courts/{id:guid}", RequestType.Put, CourtService.Put),
    new("/courts/{id:guid}", RequestType.Delete, CourtService.Delete),
  };
}
