using System;
using Backend.Models.Base;

namespace Backend.Models;

public record Employee(string name, string surname, DateOnly birthdate, string phoneNumber,
  decimal payroll, string bankAccountNumber) : Person(name, surname, birthdate, phoneNumber);
