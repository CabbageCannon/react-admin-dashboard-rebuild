import { DataGrid } from "@mui/x-data-grid";
import Header from "../../components/Header";
import { Box, Typography, useTheme } from "@mui/material";
import dataTeam from "../../data/dataTeam";
import { tokens } from "../../theme";
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';

const columns = [
  {
    field: "id",
    headerName: "ID",
  }, {
    field: "name",
    headerName: "Name",
    flex: 1
  }, {
    field: "age",
    headerName: "Age"
  }, {
    field: "phone",
    headerName: "Phone Number",
    flex: 1
  }, {
    field: "email",
    headerName: "Email",
    flex: 1
  }, {
    field: "accessLevel",
    headerName: "Access Level",
    flex: 1,
    renderCell: ({ row: { access } }) => {
      const theme = useTheme();
      const colors = tokens(theme.palette.mode);
      return (
        <Box sx={{
          height:"100%",
          alignItems:"center",
          display:"flex"
        }}>
          <Box sx={{
            width: "60%",
            display: "flex",
            justifyContent: "center",
            p: "5px 0 5px 0",
            m: "0 auto",
            backgroundColor: colors.greenAccent[600],
            color: colors.grey[100],
            borderRadius: "5px",
            alignItems: "center"
          }}>
            {access === "admin" && <AdminPanelSettingsIcon />}
            {access === "manager" && <ManageAccountsIcon />}
            {access === "user" && <AccountBoxIcon />}
            <Typography>
              {access}
            </Typography>
          </Box>
        </Box>
      )
    }
  }
]

const Team = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box>
      {/* 标题部分 */}
      <Header title="Team" description="Managing the Team Members" />
      <DataGrid
        columns={columns}
        rows={dataTeam}
        checkboxSelection
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
          "& .MuiCheckbox-root": {
            color: `${colors.blueAccent[500]} !important`,
          },
          "& .MuiCheckbox-root.Mui-checked": {
            color: `${colors.blueAccent[500]} !important`,
          },
        }} />
    </Box>
  )
}

export default Team;
