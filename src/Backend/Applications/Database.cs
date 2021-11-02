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
    var uri = new Uri(Environment.GetEnvironmentVariable("DATABASE_URL")!);

    var userInfo = uri.UserInfo.Split(':');
    var (username, password) = (userInfo[0], userInfo[1]);

    return new NpgsqlConnectionStringBuilder {
      Host = uri.Host,
      Port = uri.Port,
      Username = username,
      Password = password,
      Database = uri.LocalPath.TrimStart('/')
    }.ToString();
  }
}
