# React Admin Dashboard Rebuild Plan

## 1. Original Project Summary

Original path:

`D:\react-admin-dashboard\react-admin-dashboard`

The original project is a React admin dashboard built with:

- React 18
- Create React App
- React Router
- Material UI
- MUI X Data Grid
- Nivo charts
- FullCalendar
- Formik + Yup
- React Pro Sidebar
- Local mock data
- Light/dark theme switching

The rebuild project currently starts almost from scratch. It has a basic `package.json` and Vite installed, but no React app structure yet.

## 2. Pages To Rebuild

### Global Layout

- Sidebar
- Topbar
- Main content area
- Light/dark theme provider
- Shared app layout styles

### Dashboard

- Page header
- Four stat cards
- Revenue line chart
- Recent transactions list
- Campaign progress card
- Sales quantity bar chart
- Geography traffic map chart

### Data Pages

- Team table
- Contacts table with toolbar
- Invoices table

### Page Modules

- Profile form
- Calendar
- FAQ accordion page

### Chart Pages

- Bar chart page
- Pie chart page
- Line chart page
- Geography chart page

## 3. Shared Components

Rebuild these before rebuilding all pages:

- `Header`
- `StatBox`
- `ProgressCircle`
- `LineChart`
- `BarChart`
- `PieChart`
- `GeographyChart`
- Shared DataGrid styling
- Theme tokens and color mode hook

## 4. Recommended Development Order

### Phase 1: Project Foundation

Goal: make the rebuild project a runnable React app.

- Convert the current Vite-only setup into a React + Vite app.
- Add React, React DOM, React Router, MUI, icons, DataGrid, chart, form, and calendar dependencies.
- Create `src`, `public`, and base entry files.
- Add basic global CSS.
- Confirm the app runs locally.

### Phase 2: App Shell

Goal: reproduce the admin dashboard frame.

- Build theme tokens.
- Build dark/light mode switching.
- Build the app layout.
- Build sidebar navigation.
- Build topbar search and icon actions.
- Add routes for all pages, even if some pages are placeholders at first.

### Phase 3: Mock Data And Shared Components

Goal: prepare reusable building blocks.

- Move or recreate mock data.
- Build shared header.
- Build stat card and progress circle.
- Build chart wrappers.
- Build reusable table styling patterns.

### Phase 4: Dashboard Page

Goal: reproduce the main page first because it uses most shared pieces.

- Add stat cards.
- Add line chart.
- Add transaction list.
- Add progress card.
- Add bar chart.
- Add geography chart.
- Check responsive behavior.

### Phase 5: Data Table Pages

Goal: finish the management/data pages.

- Rebuild Team.
- Rebuild Contacts.
- Rebuild Invoices.
- Match DataGrid theme styling.
- Add checkbox selection and toolbar where needed.

### Phase 6: Form, FAQ, Calendar

Goal: finish interaction-heavy pages.

- Rebuild Formik/Yup profile form.
- Rebuild FAQ accordion page.
- Rebuild FullCalendar page.
- Verify form validation and calendar add/delete behavior.

### Phase 7: Chart Detail Pages

Goal: finish standalone chart views.

- Rebuild Bar page.
- Rebuild Pie page.
- Rebuild Line page.
- Rebuild Geography page.

### Phase 8: Polish And Verification

Goal: make the rebuild feel complete.

- Fix layout spacing.
- Clean up garbled comments from the original project.
- Check light/dark mode.
- Check navigation active states.
- Check mobile and narrow viewport behavior.
- Run build.
- Compare main pages against the original.

## 5. Suggested First Implementation Step

Start with Phase 1 and Phase 2:

1. Install the correct React dashboard dependencies.
2. Create the Vite React entry structure.
3. Build the layout shell.
4. Add placeholder routes for every page.

Only after the shell is stable, start copying/rebuilding page content.

