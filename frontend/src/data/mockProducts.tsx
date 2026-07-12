import type { Product } from "../types/Product"

export const mockProducts: Product[] = [

  {
    sku: "PKG-1001",
    name: "30mL Amber Glass Bottle",
    category: "Packaging Component",
    uom: "EA",
    lotTracked: true,
    expirationTracked: false,
    status: "Active"
  },

  {
    sku: "PKG-2005",
    name: "Child Resistant Cap",
    category: "Packaging Component",
    uom: "EA",
    lotTracked: true,
    expirationTracked: false,
    status: "Active"
  },

  {
    sku: "RM-3010",
    name: "HDPE Resin",
    category: "Raw Material",
    uom: "KG",
    lotTracked: true,
    expirationTracked: true,
    status: "Active"
  },

  {
    sku: "FG-5001",
    name: "Vitamin Supplement Bottle 30ct",
    category: "Finished Good",
    uom: "CASE",
    lotTracked: true,
    expirationTracked: true,
    status: "Active"
  },

  {
    sku: "PKG-4012",
    name: "Printed Folding Carton - 30ct",
    category: "Packaging Component",
    uom: "EA",
    lotTracked: true,
    expirationTracked: false,
    status: "Active"
  }

]