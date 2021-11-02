using System;

namespace Backend.Models.Base;

public abstract record Person(string name, string surname, DateOnly birthdate, string phoneNumber) : Footprint
{
  public string? email = null;
}
