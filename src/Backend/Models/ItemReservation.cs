using System;
using Backend.Models.Base;

namespace Backend.Models;

public record ItemReservation(Guid itemId, Guid clientId, DateTime start, DateTime end, uint count, string? note) : Reservation(start, end);
