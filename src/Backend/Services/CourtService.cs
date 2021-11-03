using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
using Backend.Models;
using Bogus;
using Backend.Utils;

namespace Backend.Services;

public static class CourtService
{
  private static readonly Faker<Court> CourtFaker = new Faker<Court>()
    .Record()
    .RuleFor(item => item.floor, faker => faker.Lorem.Word())
    .RuleFor(item => item.isCovered, faker => faker.Random.Bool())
    .RuleFor(item => item.isUnderMaintenance, faker => faker.Random.Bool())
    .RuleFor(item => item.id, faker => faker.Random.Guid())
    .RuleFor(item => item.createdAt, faker => faker.Date.Recent())
    .RuleFor(item => item.updatedAt, faker => faker.Date.Future());

  public static List<Court> Get() => CourtFaker.Generate(new Random().Next(0, 50));
  public static void Put(Court model, Guid id) => Console.WriteLine($"Should update {id}: {model}");
  public static void Post(Court model) => Console.WriteLine($"Should create court: {model}");
  public static void Delete(Guid id) => Console.WriteLine($"Should delete {id}");
}
