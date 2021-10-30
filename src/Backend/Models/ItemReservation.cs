using System;
using Backend.Models.Base;

namespace Backend.Models;

public record ItemReservation(Guid itemId, DateTime start, DateTime end, string? note) : Reservation(start, end);