import { Box } from "@mui/material";
import PieChart from "../../components/PieChart";
import Header from "../../components/Header";

const Pie = () => {
  return (
    <Box>
      <Header title="Pie Chart" description="Pie Chart" />
      <Box sx={{
        height: "75vh"
      }}>
        <PieChart />
      </Box>
    </Box>
  )
}

export default Pie;