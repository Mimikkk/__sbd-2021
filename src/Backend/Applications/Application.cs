using Microsoft.AspNetCore.Builder;

namespace Backend.Applications;

public static partial class Application
{
  static Application()
  {
    App = Build();
    RegisterEndpoints();
    RegisterUses();
  }

  internal static readonly WebApplication App = null!;
}
