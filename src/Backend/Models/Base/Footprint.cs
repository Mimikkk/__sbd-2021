using System;

namespace Backend.Models.Base;

public abstract record Footprint
{
  public Guid id { get; set; } = Guid.NewGuid();
  public DateTime createdAt { get; set; } = DateTime.Now;
  public DateTime updatedAt { get; set; } = DateTime.Now;
}
