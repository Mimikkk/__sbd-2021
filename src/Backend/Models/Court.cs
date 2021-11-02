using System;
using Backend.Models.Base;

namespace Backend.Models;

public record Court(Guid sportObjectId, string floor, bool isCovered) : Footprint
{
  public bool isUnderMaintenance = false;
}
