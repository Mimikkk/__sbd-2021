using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Cors.Infrastructure;
using Microsoft.AspNetCore.HttpOverrides;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Routing;

namespace Backend.Applications;

public static partial class Application
{
  private static void CorsPolicy(CorsOptions options) => options
    .AddPolicy("CorsPolicy", ConfigureCorsPolicy);

  private static void EndpointsPolicy(IEndpointRouteBuilder endpoints) => endpoints
    .MapDefaultControllerRoute();

  private static void ConfigureCorsPolicy(CorsPolicyBuilder builder) => builder
    .AllowAnyOrigin()
    .AllowAnyMethod()
    .AllowAnyHeader();

  private static void HttpsRedirectionPolicy(HttpsRedirectionOptions options) => options
    .HttpsPort = 443;

  private static void ForwardedHeadersOptionsPolicy(ForwardedHeadersOptions options)
  {
    options.ForwardedHeaders = ForwardedHeaders.XForwardedFor | ForwardedHeaders.XForwardedProto;
    options.KnownNetworks.Clear();
    options.KnownProxies.Clear();
  }
}
