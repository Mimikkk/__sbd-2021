using Backend.Models.Base;

namespace Backend.Models;

public record Client(string name, string surname) : Person(name, surname);
