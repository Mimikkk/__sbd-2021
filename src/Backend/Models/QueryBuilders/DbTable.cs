using System;

namespace Backend.Models.QueryBuilders;

public enum DbTable
{
  Employees,
  Clients,
  Courts,
  Items,
  Prices,
  CourtReservations,
  ItemReservations,
  Discounts
}
public static class DbTableExtensions
{
  public static string AsString(this DbTable table) => table switch {
    DbTable.Clients           => "clients",
    DbTable.Courts            => "courts",
    DbTable.Discounts         => "discounts",
    DbTable.Employees         => "employees",
    DbTable.Items             => "items",
    DbTable.Prices            => "prices",
    DbTable.CourtReservations => "court_reservations",
    DbTable.ItemReservations  => "item_reservations",
    _                         => throw new ArgumentOutOfRangeException(nameof(table), table, null)
  };
}
