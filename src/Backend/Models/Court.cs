using System;
using Backend.Models.Base;

namespace Backend.Models;

public record Court(Guid sportObjectId) : Footprint;