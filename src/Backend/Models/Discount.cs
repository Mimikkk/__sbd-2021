using Backend.Models.Base;

namespace Backend.Models;

public record Discount(string name, decimal value, bool isPercentage) : Footprint;
