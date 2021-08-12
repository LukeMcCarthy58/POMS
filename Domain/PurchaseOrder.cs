using System;

namespace Domain
{
    public class PurchaseOrder
    {
        public Guid PurchaseOrderId { get; set; }
        public string State { get; set; }
        public DateTime DateCreated { get; set; }
        public string Requestor { get; set; }
    }
}