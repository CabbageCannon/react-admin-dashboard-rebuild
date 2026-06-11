import { useTheme } from "@mui/material/styles";
import { useState } from "react";
import { Sidebar, Menu, MenuItem, sidebarClasses } from "react-pro-sidebar";
import MenuIcon from '@mui/icons-material/Menu';
import { Box, Typography, IconButton } from "@mui/material";
import { tokens } from "../../theme";
import userImage from "../../assets/user.jpg";
import { Link } from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';
import Groups3Icon from '@mui/icons-material/Groups3';
import EditCalendarIcon from '@mui/icons-material/EditCalendar';
import PublicIcon from '@mui/icons-material/Public';
import PieChartIcon from '@mui/icons-material/PieChart';
import BarChartIcon from '@mui/icons-material/BarChart';
import MultilineChartIcon from '@mui/icons-material/MultilineChart';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import ReceiptIcon from '@mui/icons-material/Receipt';
import PersonIcon from '@mui/icons-material/Person';
import QuizIcon from '@mui/icons-material/Quiz';

const AppSidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [selected, setSelected] = useState("Dashboard");

  return (
    <Sidebar
      collapsed={isCollapsed}
      backgroundColor={colors.primary[400]}
      rootStyles={{
        border: "none",
        [`.${sidebarClasses.container}`]: {
          scrollbarWidth: "thin",
          scrollbarColor: `${colors.grey[500]} ${colors.primary[400]}`
        },
        height: "100vh"
      }}>
      <Menu
        menuItemStyles={{
          mt: "10px",
          button: ({ active }) => ({
            backgroundColor: "transparent",
            color: active ? colors.blueAccent[500] : colors.grey[100],
            "&:hover": {
              color: colors.blueAccent[500],
              backgroundColor: "transparent",
            }
          }),
        }}
        rootStyles={{
          height: "100%"
        }}>
        {/* 侧边栏头部 */}
        <Box
          onClick={(ev) => {
            ev.stopPropagation();
            setIsCollapsed(!isCollapsed)
          }}
          sx={{
            m: "10px 0 10px 0",
            color: colors.grey[100],
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          {!isCollapsed && (
            <Box sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              p: "0 10px 0 20px",
              width: "100%"
            }}>
              <Typography variant="h3">
                ADMINIS
              </Typography>
              <IconButton onClick={() => {
                setIsCollapsed(true)
              }}>
                <MenuIcon />
              </IconButton>
            </Box>
          )}
          {isCollapsed && (
            <IconButton sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center"
            }}>
              <MenuIcon />
            </IconButton>
          )}
        </Box>

        {/* 用户信息 */}
        {!isCollapsed && (
          <Box mb="25px">
            {/* 头像区域 */}
            <Box sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              mb: "20px"
            }}>
              <img src={userImage} alt="profile-user" style={{
                width: "100px",
                height: "100px",
                cursor: "pointer",
                borderRadius: "50%"
              }} />
            </Box>
            {/* 用户名区域 */}
            <Box sx={{
              textAlign: "center"
            }}>
              <Typography variant="h2" sx={{
                color: colors.grey[100],
                fontWeight: "bold",
                mt: "10px",
              }}>
                翟靖朗
              </Typography>
              <Typography variant="h5" sx={{
                color: colors.greenAccent[500]
              }}>
                Fancy Admin
              </Typography>
            </Box>
          </Box>
        )}

        <Box sx={{
          pl: "20px"
        }}>
        </Box>
        <Item title="Dashboard" to="/" icon={<HomeIcon />} selected={selected} setSelected={setSelected} />
        {/* Data部分 */}
        <Typography
          variant="h6"
          sx={{
            m: "15px 0 0 20px",
            color: colors.grey[500]
          }}>
          Data
        </Typography>
        <Item title="Manage Team" to="/team" icon={<Groups3Icon />} selected={selected} setSelected={setSelected} />
        <Item title="Contacts Information" to="/contacts" icon={<ContactPhoneIcon />} selected={selected} setSelected={setSelected} />
        <Item title="Invoices Balances" to="/invoices" icon={<ReceiptIcon />} selected={selected} setSelected={setSelected} />
        {/* Pages部分 */}
        <Typography
          variant="h6"
          sx={{
            m: "15px 0 0 20px",
            color: colors.grey[500]
          }}>
          Page
        </Typography>
        <Item title="Profile Form" to="/form" icon={<PersonIcon />} selected={selected} setSelected={setSelected} />
        <Item title="Calendar" to="/calendar" icon={<EditCalendarIcon />} selected={selected} setSelected={setSelected} />
        <Item title="FAQ Page" to="/faq" icon={<QuizIcon />} selected={selected} setSelected={setSelected} />
        {/* Charts部分 */}
        <Typography
          variant="h6"
          sx={{
            m: "15px 0 0 20px",
            color: colors.grey[500]
          }}>
          Charts
        </Typography>
        <Item title="Grography" to="/geography" icon={<PublicIcon />} selected={selected} setSelected={setSelected} />
        <Item title="Bar" to="/bar" icon={<BarChartIcon />} selected={selected} setSelected={setSelected} />
        <Item title="Pie" to="/pie" icon={<PieChartIcon />} selected={selected} setSelected={setSelected} />
        <Item title="Line" to="/line" icon={<MultilineChartIcon />} selected={selected} setSelected={setSelected} />
      </Menu>
    </Sidebar >
  );
}

function Item({ title, to, icon, selected, setSelected }) {
  return (
    <MenuItem
      active={title === selected}
      onClick={() => { setSelected(title) }}
      icon={icon}
      component={<Link to={to} />}
    >
      <Typography>
        {title}
      </Typography>
    </MenuItem>
  )
}

export default AppSidebar;