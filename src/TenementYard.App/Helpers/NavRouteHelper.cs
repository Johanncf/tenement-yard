using System;

namespace TenementYard.App.Helpers;

public static class NavRouteHelper
{
  public static bool IsActive(string href, string currentRoute)
  {
    return currentRoute.Contains(href);
  }
}
