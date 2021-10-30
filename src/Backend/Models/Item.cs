using Backend.Models.Base;

namespace Backend.Models;

public record Item(string name, uint count) : Footprint;
