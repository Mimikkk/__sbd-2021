using System;

namespace Backend.Models.Base;

public abstract record Footprint
{
  public Guid id = Guid.NewGuid();
  public DateTime createdAt = DateTime.Now;
  public DateTime updatedAt = DateTime.Now;
}
