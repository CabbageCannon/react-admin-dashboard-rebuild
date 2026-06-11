import { Box, useTheme, Typography } from "@mui/material";
import ProgressCircle from "./ProgressCircle";
import { tokens } from "../theme";

const StatBox = ({ title, subTitle, icon, progress, increase }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box sx={{
      width: "100%",
      p: "20px",
      display: "flex",
      justifyContent: "space-between"
    }}>
      {/* 左侧 */}
      <Box sx={{ flex: "1" }}>
        {icon}
        <Typography
          variant="h3"
          sx={{
            mt: "10px",
            color: colors.grey[100]
          }}>
          {title}
        </Typography>
        <Typography
          variant="h4"
          sx={{
            color: colors.greenAccent[600]
          }}>
          {subTitle}
        </Typography>
      </Box>

      {/* 右侧 */}
      <Box>
        <ProgressCircle progress={progress} increase={increase} />
        <Typography sx={{
          color: colors.greenAccent[600]
        }}>
          {increase}
        </Typography>
      </Box>
    </Box>
  )
}

export default StatBox;