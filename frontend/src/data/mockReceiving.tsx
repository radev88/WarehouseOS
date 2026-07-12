import type { ReceivingOrder } from "../types/Receiving"

export const mockReceiving: ReceivingOrder[] = [

  {
    poNumber: "PO-2026-001",
    supplier: "ABC Packaging Corp",
    receivedDate: "07/10/2026",
    status: "Pending Inspection",
    items: 3
  },


  {
    poNumber: "PO-2026-002",
    supplier: "Resin Materials Inc",
    receivedDate: "07/08/2026",
    status: "Quality Hold",
    items: 1
  },


  {
    poNumber: "PO-2026-003",
    supplier: "Global Components LLC",
    receivedDate: "07/05/2026",
    status: "Released",
    items: 5
  }

]