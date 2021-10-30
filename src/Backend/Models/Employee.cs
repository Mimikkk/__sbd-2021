using Backend.Models.Base;

namespace Backend.Models;

public record Employee(string name, string surname) : Person(name, surname);
