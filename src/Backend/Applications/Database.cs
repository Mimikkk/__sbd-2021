using System;
using System.Collections.Generic;
using System.Linq;
using Npgsql;

namespace Backend.Applications;

public static partial class Application
{
  private static readonly string DatabaseUri = CalculateDatabaseUri();
  public static readonly NpgsqlConnection Database = EstablishConnection();

  private static NpgsqlConnection EstablishConnection()
  {
    var connection = new NpgsqlConnection(DatabaseUri);
    connection.Open();
    Console.WriteLine("Connected to the database!");

    return connection;
  }
  private static string CalculateDatabaseUri()
  {
    var database = Environment
      .GetEnvironmentVariable("DATABASE_URL")!
      .Split(' ')
      .Select(item => item.Split("="))
      .ToDictionary(item => item[0], item => item[1]);

    return new NpgsqlConnectionStringBuilder {
      Host = database["host"],
      Port = int.Parse(database["port"]),
      Username = database["user"],
      Password = database["password"],
      Database = database["dbname"]
    }.ToString();
  }
}
