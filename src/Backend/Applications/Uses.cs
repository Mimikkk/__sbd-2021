using Microsoft.AspNetCore.Builder;

namespace Backend.Applications;

public static partial class Application 
{
  private static void RegisterUses() => Layout
    .UseForwardedHeaders()
    .UseRouting()
    .UseDefaultFiles()
    .UseStaticFiles()
    .UseCors("CorsPolicy")
    .UseEndpoints(EndpointsPolicy); 
}
