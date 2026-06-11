import { Box, useTheme } from "@mui/material";
import Header from "../../components/Header";
import GeographyChart from "../../components/GeographyChart";
import { tokens } from "../../theme";

const Geography = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box>
      {/* 标题部分 */}
      <Header title="Geography" description="Simple Geography Char" />
      {/* 核心内容部分 */}
      <Box sx={{
        p: "10px",
        height: "70vh",
        border: `1px solid ${colors.primary[500]}`
      }}>
        <GeographyChart />
      </Box>
    </Box>
  )
}

export default Geography;