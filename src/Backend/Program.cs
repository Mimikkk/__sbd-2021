using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Backend.Services;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Cors.Infrastructure;
using Microsoft.AspNetCore.HttpOverrides;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Routing;
using Microsoft.Extensions.DependencyInjection;
using static Backend.Utils.Unit;

namespace Backend;

public static class Program
{
  public static void Main() => Application.Run();

  static Program()
  {
    Application = ConfiguredBuild();
    RegisterEndpoints();
    RegisterUses();
  }

  private static WebApplication ConfiguredBuild() =>
    WebApplication.CreateBuilder().AffectedBy(ConfigureBuild).Build();

  private static void ConfigureBuild(WebApplicationBuilder builder) => builder.Services
    .Configure<ForwardedHeadersOptions>(ForwardedHeadersOptionsPolicy)
    .AddHttpsRedirection(HttpsRedirectionPolicy)
    .AddCors(CorsPolicy)
    .AddMvcCore();

  private static void HttpsRedirectionPolicy(HttpsRedirectionOptions options) => options.HttpsPort = 443;

  private static void CorsPolicy(CorsOptions options) => options.AddPolicy("CorsPolicy", ConfigureCorsPolicy);

  private static void ConfigureCorsPolicy(CorsPolicyBuilder builder) => builder.AllowAnyOrigin()
    .AllowAnyMethod()
    .AllowAnyHeader();

  private static void ForwardedHeadersOptionsPolicy(ForwardedHeadersOptions options)
  {
    options.ForwardedHeaders = ForwardedHeaders.XForwardedFor | ForwardedHeaders.XForwardedProto;
    options.KnownNetworks.Clear();
    options.KnownProxies.Clear();
  }

  private static void RegisterEndpoints() => Endpoints
    .ForEach(Endpoint.Register);

  private static void RegisterUses() => Application
    .UseForwardedHeaders()
    .UseRouting()
    .UseDefaultFiles()
    .UseStaticFiles()
    .UseCors("CorsPolicy")
    .UseEndpoints(EndpointsPolicy);

  private static void EndpointsPolicy(IEndpointRouteBuilder endpoints) => endpoints.MapDefaultControllerRoute();

  internal static readonly List<Endpoint> Endpoints = new() {
    new("/hello", RequestType.Get, SportObjectService.Get),
    new("/hello/{id:guid}", RequestType.Get, SportObjectService.GetById),
  };

  internal static readonly WebApplication Application = null!;
}
