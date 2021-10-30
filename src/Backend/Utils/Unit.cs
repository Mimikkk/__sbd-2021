using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Linq;

namespace Backend.Utils;

public static class Unit
{
  public static void Voided(object ignored) { }

  public static T AffectedBy<T>(this T item, Func<T, T> action)
  {
    item = action(item);
    return item;
  }

  public static T AffectedBy<T>(this T item, Action<T> inplaceAction)
  {
    inplaceAction(item);
    return item;
  }

  public static T AffectedBy<T>(this T item, params Func<T, T>[] actions) =>
    actions.Aggregate(item, AffectedBy);

  public static T AffectedBy<T>(this T item, params Action<T>[] actions) =>
    actions.Aggregate(item, AffectedBy);

  public static void ForEach<T>(this IEnumerable<T> items, Action<T> action) => items.ToImmutableList().ForEach(action);
}
