using System;

namespace Domain
{
    public class Order
    {
        public Guid OrderId { get; set; }
        public int PurchaseOrderId { get; set; }
        public string Description { get; set; }
        public int Quantity { get; set; }
        public string Supplier { get; set; }
        public bool Ordered { get; set; }
        public Nullable<DateTime> DateOrdered { get; set; }
        public bool Arrived { get; set; }
        public Nullable<DateTime> DateArrived { get; set; }
        public int QuantityArrived { get; set; }
    }
}