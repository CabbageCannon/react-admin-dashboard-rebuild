import { Box, Typography, useTheme } from "@mui/material"
import Header from "../../components/Header";
import rows from "../../data/dataInvoices";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";

const Invoices = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  
  const columns = [
    { field: "id", headerName: "ID" },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "phone",
      headerName: "Phone Number",
      flex: 1,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
    },
    {
      field: "cost",
      headerName: "Cost",
      flex: 1,
      renderCell: (params) => (
        <Typography color={colors.greenAccent[500]}>
          ${params.row.cost}
        </Typography>
      ),
    },
    {
      field: "date",
      headerName: "Date",
      flex: 1,
    },
  ];

  return (
    <Box>
      <Header title="Invoices" description="List of Invoice Balances" />
      <Box>
        <DataGrid
          columns={columns}
          rows={rows}
          disableRowSelectionOnClick
          disableColumnResize
          sx={{
            border: "none",
            backgroundColor: colors.primary[400],
            color: colors.grey[100],
            "& .MuiDataGrid-columnHeader": {
              backgroundColor: colors.blueAccent[700],
              color: colors.grey[100],
            },
            "& .MuiDataGrid-columnHeaderTitle": {
              fontWeight: "bold",
            },
            "& .MuiDataGrid-cell": {
              borderBottom: "none",
            },
            "& .MuiDataGrid-row:hover": {
              backgroundColor: colors.blueAccent[900],
            },
            "& .MuiDataGrid-row.Mui-selected": {
              backgroundColor: `${colors.blueAccent[800]} !important`,
              color: colors.grey[100],
            },
            "& .MuiDataGrid-row.Mui-selected:hover": {
              backgroundColor: `${colors.blueAccent[700]} !important`,
            },
            "& .MuiDataGrid-footerContainer": {
              backgroundColor: colors.blueAccent[700],
              borderTop: "none",
            },
            "& .MuiTablePagination-root": {
              color: colors.grey[100],
            },
            "& .MuiSvgIcon-root": {
              color: colors.grey[100],
            },
          }}
        />
      </Box>
    </Box>
  )
}

export default Invoices;
