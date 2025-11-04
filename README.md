# Maseru Textile ERP System

This is a custom-built ERP (Enterprise Resource Planning) system for textile production and management.

The system is built using **React**, **TypeScript**, and TailwindCSS (for styling). It is designed to manage multiple modules within the textile factory operations including:

* Dashboard (KPIs overview)
* Inventory Management
* Production
* HR (Employee Records)
* Sales & Purchases
* Reports
* New Data Entries
* Settings

## Features

### Inventory Module

* Add materials / item entries
* Update existing records
* Delete records
* Display data in clean table format

### HR Module

* Add employees
* Edit employee data
* Delete employee records
* Table view for clean data display

### Additional modules included

* Production monitoring (static for now)
* Sales & Purchases
* Settings configuration page

## Tech Stack

| Layer        | Technology       |
| ------------ | ---------------- |
| UI Framework | React + Vite     |
| Language     | TypeScript       |
| UI Styling   | Tailwind CSS     |
| Routing      | React Router DOM |

## Project Structure

```
src/
 ├─ components/
 │   ├─ Sidebar.tsx
 │   ├─ TopNav.tsx
 ├─ layouts/
 │   └─ DashboardLayout.tsx
 ├─ pages/
 │   ├─ Dashboard.tsx
 │   ├─ Inventory.tsx
 │   ├─ Production.tsx
 │   ├─ HR.tsx
 │   ├─ NewEntry.tsx
 │   ├─ Reports.tsx
```

## Running the Project

### Install Dependencies

```
npm install
```

### Start Development Server

```
npm run dev
```

Open browser:

```
http://localhost:5173/
```

## Future Plans

* Connect to backend (Node + Express)
* MongoDB database integration
* Authentication & roles
* Export (PDF / Excel) for reports
* Dashboard analytics graphs

## Author

Bothata Sello

---
