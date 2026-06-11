import { Box } from "@mui/material"
import Header from "../../components/Header"
import LineChart from "../../components/LineChart"

const Line = () => {
  return (
    <Box>
      <Header title="Line Chart" description="Simple Line Chart" />
      <Box sx={{
        height: "75vh"
      }}>
        <LineChart />
      </Box>
    </Box>
  )
}

export default Line;