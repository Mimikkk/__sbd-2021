using System;

namespace Backend.Models.Base;

public abstract record Reservation(DateTime start, DateTime end) : Footprint;
