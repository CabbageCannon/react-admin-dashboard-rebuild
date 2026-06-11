import Topbar from "./scenes/global/Topbar";
import { ThemeProvider } from "@mui/material/styles";
import { useMode, ColorModeContext } from "./theme";
import { CssBaseline } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import AppSideBar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard/Dashboard"
import Team from "./scenes/team/Team"
import Calendar from "./scenes/calendar/Calendar";
import Geography from "./scenes/geography/grography";
import Bar from "./scenes/bar/Bar";
import Pie from "./scenes/pie/Pie";
import Line from "./scenes/line/Line"
import Contacts from "./scenes/contacts/Contacts";
import Invoices from "./scenes/invoices/Invoices";
import Form from "./scenes/form/Form";
import Faq from "./scenes/faq/Faq";

function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <AppSideBar />
          <main className="content">
            <Topbar />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/team" element={<Team />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/geography" element={<Geography />}></Route>
              <Route path="/bar" element={<Bar />}></Route>
              <Route path="/pie" element={<Pie />}></Route>
              <Route path="/line" element={<Line />}></Route>
              <Route path="/contacts" element={<Contacts />}></Route>
              <Route path="/invoices" element={<Invoices />}></Route>
              <Route path="/form" element={<Form />}></Route>
              <Route path="/faq" element={<Faq />}></Route>
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App
