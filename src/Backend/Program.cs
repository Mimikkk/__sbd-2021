using Microsoft.AspNetCore;
using Microsoft.AspNetCore.Hosting;

namespace Backend;

record class A();
record struct B();
public class Program
{
  public static void Main(string[] args) =>
    CreateWebHostBuilder(args).Build().Run();

  public static IWebHostBuilder CreateWebHostBuilder(string[] args) =>
    WebHost.CreateDefaultBuilder(args)
      .UseStartup<Startup>();
}