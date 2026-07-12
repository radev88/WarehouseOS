import type{ PurchaseOrder } from "../types/PurchaseOrders"


export const mockPurchaseOrders: PurchaseOrder[] = [

  {
    poNumber: "PO-2026-001",
    supplier: "ABC Packaging Corp",
    orderDate: "07/01/2026",
    expectedDate: "07/15/2026",
    status: "Pending Receipt",
    totalItems: 3
  },


  {
    poNumber: "PO-2026-002",
    supplier: "Resin Materials Inc",
    orderDate: "06/25/2026",
    expectedDate: "07/08/2026",
    status: "Partially Received",
    totalItems: 2
  },


  {
    poNumber: "PO-2026-003",
    supplier: "Global Components LLC",
    orderDate: "06/15/2026",
    expectedDate: "07/05/2026",
    status: "Closed",
    totalItems: 5
  },


  {
    poNumber: "PO-2026-004",
    supplier: "Precision Packaging Solutions",
    orderDate: "07/10/2026",
    expectedDate: "07/22/2026",
    status: "Pending Receipt",
    totalItems: 4
  }

]