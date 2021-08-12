using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domain;

namespace Persistence
{
    public class Seed
    {
        public static async Task SeedData(DataContext context)
        {
            if (context.Orders.Any()) return;
            
            var orders = new List<Order>
            {
                new Order
                {
                    PurchaseOrderId = 1,
                    Description = "HP Laptop",
                    Quantity = 5,
                    Supplier = "HP",
                    Ordered = false,
                    DateOrdered = null,
                    Arrived = false,
                    DateArrived = null,
                    QuantityArrived = 0
                },
                new Order
                {
                    PurchaseOrderId = 1,
                    Description = "Keyboard",
                    Quantity = 5,
                    Supplier = "HP",
                    Ordered = true,
                    DateOrdered = DateTime.Now.AddDays(-10),
                    Arrived = false,
                    DateArrived = null,
                    QuantityArrived = 2
                },
                new Order
                {
                    PurchaseOrderId = 1,
                    Description = "Mouse",
                    Quantity = 5,
                    Supplier = "HP",
                    Ordered = true,
                    DateOrdered = DateTime.Now.AddDays(-10),
                    Arrived = true,
                    DateArrived = DateTime.Now.AddDays(-5),
                    QuantityArrived = 5
                },
                new Order
                {
                    PurchaseOrderId = 2,
                    Description = "Ethernet Cable",
                    Quantity = 1,
                    Supplier = "PC World",
                    Ordered = true,
                    DateOrdered = DateTime.Now.AddDays(-5),
                    Arrived = true,
                    DateArrived = DateTime.Now.AddDays(-1),
                    QuantityArrived = 1
                },
                new Order
                {
                    PurchaseOrderId = 2,
                    Description = "Router",
                    Quantity = 1,
                    Supplier = "PC World",
                    Ordered = true,
                    DateOrdered = DateTime.Now.AddDays(-5),
                    Arrived = false,
                    DateArrived = null,
                    QuantityArrived = 0
                }
            };

            await context.Orders.AddRangeAsync(orders);
            await context.SaveChangesAsync();
        }
    }
}