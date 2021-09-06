export interface Order {
    orderId: string;
    purchaseOrderId: number;
    description: string;
    quantity: number;
    supplier: string;
    ordered: boolean;
    dateOrdered: Date;
    arrived: boolean;
    dateArrived: Date;
    quantityArrived: number;
}