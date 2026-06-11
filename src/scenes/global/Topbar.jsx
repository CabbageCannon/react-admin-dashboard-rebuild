import { useTheme } from "@mui/material/styles"
import { ColorModeContext, tokens } from "../../theme.js"
import { useContext } from "react";
import { Box, InputBase, IconButton } from "@mui/material";
// 导入图标
import SearchIcon from "@mui/icons-material/Search"
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';

const Topbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext)

  return (
    <Box sx={{
      display: "flex",
      justifyContent: "space-between",
      p: 2
    }}>
      {/* 左侧搜索栏 */}
      <Box
        sx={{
          display: "flex",
          backgroundColor: colors.primary[400],
          borderRadius: "3px"
        }}>
        {/* 输入框 */}
        <InputBase sx={{
          ml: 2,
          flex: 1
        }}
          placeholder="Search" />
        <IconButton type="button" sx={{ p: 1 }}>
          <SearchIcon />
        </IconButton>
      </Box>

      {/* 右侧图标栏 */}
      <Box sx={{ display: "flex" }}>
        {/* 切换主题图标 */}
        <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === "dark"
            ? (<LightModeOutlinedIcon />)
            : (<DarkModeOutlinedIcon />)}
        </IconButton>
        <IconButton>
          <NotificationsNoneOutlinedIcon />
        </IconButton>
        <IconButton>
          <SettingsOutlinedIcon />
        </IconButton>
        <IconButton>
          <PermIdentityOutlinedIcon />
        </IconButton>
      </Box>
    </Box>
  );
}

export default Topbar;