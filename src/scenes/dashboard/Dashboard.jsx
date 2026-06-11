import { Box, useTheme, Typography, Button, IconButton } from "@mui/material"
import { tokens } from "../../theme";
import Header from "../../components/Header";
import DownloadIcon from '@mui/icons-material/Download';
import StatBox from "../../components/StatBox";
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import TrafficIcon from '@mui/icons-material/Traffic';
import LineChart from "../../components/LineChart";
import Transactions from "../../data/Transactions";

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode)

  return (
    <Box sx={{
      p: "20px"
    }}>
      {/* 头部 */}
      <Box sx={{
        display: "flex",
        justifyContent: "space-between"
      }}>
        <Header title="DASHBOARD" description="Welcome to your dashboard" />
        <Box sx={{
          display: "flex",
          justifyContent: "center",
          gap: "10px",
          alignItems: "center"
        }}>
          <Button sx={{
            color: colors.grey[100],
            backgroundColor: colors.greenAccent[600],
            display: "flex",
            gap: "10px"
          }}>
            <DownloadIcon />
            <Typography>
              DOWNLOAD REPORTS
            </Typography>
          </Button>
        </Box>
      </Box>

      {/* 核心内容 */}
      <Box sx={{
        display: "grid",
        gridTemplateColumns: "repeat(12,1fr)",
        gap: "20px",
        gridAutoRows: "140px"
      }}>
        {/* Row 1 */}
        <Box sx={{
          gridColumn: "span 3",
          backgroundColor: colors.primary[400]
        }}>
          <StatBox title="12,361" subTitle="Emails Sent" progress="0.2" increase="+14%" icon={<EmailIcon />} />
        </Box>
        <Box sx={{
          gridColumn: "span 3",
          backgroundColor: colors.primary[400]
        }}>
          <StatBox title="431,225" subTitle="Sales Obtained" progress="0.5" increase="+21%" icon={<LocalPhoneIcon />} />
        </Box>
        <Box sx={{
          gridColumn: "span 3",
          backgroundColor: colors.primary[400]
        }}>
          <StatBox title="32,441" subTitle="New Clients" progress="0.75" increase="+5%" icon={<PersonAddIcon />} />
        </Box>
        <Box sx={{
          gridColumn: "span 3",
          backgroundColor: colors.primary[400]
        }}>
          <StatBox title="1,325,134" subTitle="Traffic Received" progress="0.15" increase="+43%" icon={<TrafficIcon />} />
        </Box>

        {/* Row 2 */}
        <Box sx={{
          gridColumn: "span 8",
          gridRow: "span 2",
          backgroundColor: colors.primary[400],
          p: "20px"
        }}>
          <Box sx={{
            display: "flex",
            justifyContent: "space-between"
          }}>
            <Box>
              <Typography sx={{
                color: colors.grey[100]
              }}>
                Revenue Generated
              </Typography>
              <Typography
                variant="h4"
                sx={{
                  color: colors.greenAccent[600]
                }}>
                $59,342.32
              </Typography>
            </Box>
            <IconButton>
              <DownloadIcon />
            </IconButton>
          </Box>
          <Box sx={{ height: "200px" }}>
            <LineChart />
          </Box>
        </Box>
        <Box sx={{
          gridColumn: "span 4",
          gridRow: "span 2",
          backgroundColor: colors.primary[400],
          p: "10px",
          overflow:"auto"
        }}>
          {/* 标题 */}
          <Box sx={{
            display: "flex",
            justifyContent: "start",
            alignItems: "center"
          }}>
            <Typography variant="h3" sx={{ color: colors.grey[100] }}>
              Recent Transactions
            </Typography>
          </Box>
          {/* 交易内容 */}
          {Transactions.map((Transaction, i) => {
            return (
              <Box
                key={`${Transaction.txId}-${i}`}
                sx={{
                  display: "flex",
                  p: "5px",
                  justifyContent: "space-between",
                  alignItems: "center"
                }}
              >
                <Box>
                  <Typography sx={{ color: colors.greenAccent[600] }} variant="h6">
                    {Transaction.txId}
                  </Typography>
                  <Typography sx={{ color: colors.grey[100] }}>
                    {Transaction.user}
                  </Typography>
                </Box>
                <Box>
                  <Typography>{Transaction.date}</Typography>
                </Box>
                <Box sx={{
                  backgroundColor:colors.greenAccent[400],
                  p:"5px 10px 5px 10px",
                  display:"flex",
                  justifyContent:"center",
                  alignItems:"center",
                  borderRadius:"5px"
                }}>
                  <Typography>{"$"+Transaction.cost}</Typography>
                </Box>
              </Box>
            )
          })}
        </Box>
      </Box>
    </Box>
  )
}

export default Dashboard; 