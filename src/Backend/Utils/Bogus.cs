using System.Runtime.Serialization;
using Bogus;

namespace Backend.Utils;

public static class BogusExtensions
{
  private static void RecordInstantiation<T>(IRuleSet<T> faker) where T : class =>
    faker.CustomInstantiator(_ => (FormatterServices.GetUninitializedObject(typeof(T)) as T)!);

  public static Faker<T> Record<T>(this Faker<T> faker) where T : class =>
    faker.AffectedBy(RecordInstantiation!);
}
