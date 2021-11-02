using System;
using Backend.Models.Base;

namespace Backend.Models;

public record Client(string name, string surname, DateOnly birthdate, string phoneNumber) : Person(name, surname, birthdate, phoneNumber)
{
  public bool isPermanent = false;
}
