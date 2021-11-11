using Backend.Utils;
using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.DependencyInjection;

namespace Backend.Applications;

public static partial class Application
{
  private static WebApplication Build() => WebApplication
    .CreateBuilder()
    .AffectedBy(BuildConfiguration)
    .Build();

  private static void BuildConfiguration(WebApplicationBuilder builder) => builder.Services
    .Configure<ForwardedHeadersOptions>(ForwardedHeadersOptionsPolicy)
    .AddHttpsRedirection(HttpsRedirectionPolicy)
    .AddCors(CorsPolicy)
    
    .AddMvcCore();
}
