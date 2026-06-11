import { Box, useTheme } from "@mui/material"
import Header from "../../components/Header";
import { DataGrid } from "@mui/x-data-grid";
import rows from "../../data/dataContacts";
import { tokens } from "../../theme";

const Contacts = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const columns = [
    { field: "id", headerName: "ID", flex: 0.5 },
    { field: "registrarId", headerName: "Registrar ID" },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      headerAlign: "left",
      align: "left",
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
      field: "address",
      headerName: "Address",
      flex: 1,
    },
    {
      field: "city",
      headerName: "City",
      flex: 1,
    },
    {
      field: "zipCode",
      headerName: "Zip Code",
      flex: 1,
    },
  ];

  return (
    <Box>
      <Header title="Contacts" description="List of Contacts for Future Reference" />
      <Box>
        <DataGrid
          columns={columns}
          rows={rows}
          showToolbar
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
            "& .MuiDataGrid-toolbarContainer": {
              backgroundColor: colors.blueAccent[700],
              color: colors.grey[100],
            },
            "& .MuiTablePagination-root": {
              color: colors.grey[100],
            },
            "& .MuiSvgIcon-root": {
              color: colors.grey[100],
            },
            "& .MuiCheckbox-root": {
              color: `${colors.blueAccent[500]} !important`,
            },
            "& .MuiCheckbox-root.Mui-checked": {
              color: `${colors.blueAccent[500]} !important`,
            },
          }}
        />
      </Box>
    </Box>
  )
}

export default Contacts;
