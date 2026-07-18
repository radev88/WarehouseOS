# WarehouseOS

![WarehouseOS Banner](https://via.placeholder.com/1200x400?text=WarehouseOS)

## Full-Stack Warehouse Management System (WMS)

WarehouseOS is a full-stack warehouse management platform designed to streamline inventory operations, order fulfillment, receiving processes, and warehouse workflows.

The application provides an ERP-style experience with inventory visibility, transaction tracking, purchase and sales order management, and role-based access control.

Built to simulate the type of operational software used by modern logistics, manufacturing, and distribution companies.

---

# Features

## Authentication & Security

- JWT-based authentication
- Protected application routes
- Role-based access control
- User permission management

Supported roles:

- **Admin**
  - Full system access
  - User management
  - Inventory adjustments
  - Purchase order management

- **Manager**
  - Operational management access
  - Inventory workflows
  - Orders and receiving

- **Warehouse User**
  - Inventory operations
  - Transfers
  - Receiving
  - Sales order processing

- **Viewer**
  - Dashboard and reporting access

---

# Inventory Management

WarehouseOS provides real-time inventory tracking capabilities:

- Product inventory visibility
- Warehouse/location tracking
- Stock adjustments
- Inventory transfers
- Transaction history
- Low stock monitoring

---

# Purchasing & Receiving

Manage inbound inventory workflows:

- Create purchase orders
- Track order status
- Receive inventory
- Update inventory automatically
- Record receiving transactions

---

# Sales Order Management

Support outbound warehouse operations:

- Create sales orders
- Manage customer orders
- Pick inventory
- Fulfill shipments
- Track order status

---

# Dashboard & Reporting

Operational dashboard providing:

- Inventory metrics
- Inventory value
- Stock alerts
- Warehouse overview
- Transaction activity
- Top moving products

---

# Technology Stack

## Frontend

- React
- TypeScript
- Vite
- Tailwind CSS
- React Router
- Axios
- Lucide Icons

## Backend

- FastAPI
- Python
- SQLAlchemy ORM
- PostgreSQL
- JWT Authentication
- Pydantic

## Development Tools

- Git
- GitHub
- VS Code
- PostgreSQL
- DBeaver

---

# System Architecture

```
                 React + TypeScript
                        |
                        |
                    REST API
                        |
                        |
                 FastAPI Backend
                        |
                        |
                  SQLAlchemy ORM
                        |
                        |
                  PostgreSQL DB
```

---

# Database Design

Core entities:

- Users
- Roles
- Products
- Warehouses
- Locations
- Inventory
- Transactions
- Suppliers
- Purchase Orders
- Customers
- Sales Orders

The database structure follows ERP-style relational modeling principles.

---

# Project Structure

```
WarehouseOS
│
├── backend
│   └── app
│       ├── models
│       ├── schemas
│       ├── routers
│       ├── security
│       └── database
│
├── frontend
│   └── src
│       ├── components
│       ├── pages
│       ├── api
│       └── layouts
│
└── README.md
```

---

# Future Improvements

Planned enhancements:

- Cloud deployment
- Barcode scanning support
- Inventory cycle counting
- Advanced reporting
- Audit history
- Email notifications
- Multi-company SaaS support

---

# About

WarehouseOS was developed as a full-stack software engineering project combining:

- Warehouse operations knowledge
- ERP workflow design
- Database architecture
- Modern web development

The goal was to build a realistic business application that demonstrates how software can improve operational efficiency and inventory visibility.

---

## Author

**Rubén Alejandro Dávila**

Computer Science Student  
Full-Stack Developer | ERP & Operations Systems

Skills:
- React
- TypeScript
- Python
- FastAPI
- PostgreSQL
- SQL
- ERP Systems
- Inventory Operations
