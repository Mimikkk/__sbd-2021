using System;
using Npgsql;

namespace Backend
{
public static partial class App
{
  private static readonly string DatabaseUri = CalculateDatabaseUri();
  public static readonly NpgsqlConnection DB = EstablishConnection();


  private static NpgsqlConnection EstablishConnection()
  {
    var connection = new NpgsqlConnection(DatabaseUri);
    connection.Open();
    Console.WriteLine("Connected to the database!");

    return connection;
  }
  private static string CalculateDatabaseUri()
  {
    var databaseUri = new Uri(Environment.GetEnvironmentVariable("DATABASE_URL")!);
    var userInfo = databaseUri.UserInfo.Split(':');
    var (username, password) = (userInfo[0], userInfo[1]);

    return new NpgsqlConnectionStringBuilder {
      Host = databaseUri.Host,
      Port = databaseUri.Port,
      Username = username,
      Password = password,
      Database = databaseUri.LocalPath.TrimStart('/')
    }.ToString();
  }
}
}