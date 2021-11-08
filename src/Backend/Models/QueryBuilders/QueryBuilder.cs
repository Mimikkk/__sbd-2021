using System;
using System.Collections.Generic;
using Npgsql;

namespace Backend.Models.QueryBuilders;

public static class QueryBuilder<T> where T : new()
{
  public static T Item()
  {
    return new T();
  }

  public static List<T> Items(DbTable table)
  {
    using var reader = new NpgsqlCommand($"select * from {table.AsString()}").ExecuteReader();
    while (reader.Read()) { }

    return new();
  }
}
