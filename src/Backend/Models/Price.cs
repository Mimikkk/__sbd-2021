using Backend.Models.Base;

namespace Backend.Models;

public record Price(decimal cost, Discount? discount) : Footprint;