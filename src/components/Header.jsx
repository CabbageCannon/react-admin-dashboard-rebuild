import { Box, Typography, useTheme } from "@mui/material"
import { tokens } from "../theme";

export default function Header({ title, description }) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box sx={{
      p: "20px"
    }}>
      <Typography variant="h1" sx={{
        mb: "15px",
        color: colors.grey[100],
        fontWeight:"800"
      }}>
        {title}
      </Typography>
      <Typography variant="h5" sx={{ color: colors.greenAccent[500] }}>
        {description}
      </Typography>
    </Box>
  )
}