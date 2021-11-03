using System;
using Backend.Models.Base;

namespace Backend.Models;

public record Court(string floor, bool isCovered) : Footprint
{
  public bool isUnderMaintenance { get; set; } = false;

  public override string ToString() =>
    $"Court with {floor} floor which is {(isCovered ? "" : "not")} covered{(isUnderMaintenance ? " and under maintenance" : "")}";
}
