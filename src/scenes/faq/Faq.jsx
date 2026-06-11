import Header from "../../components/Header"
import { useTheme, Box, Typography } from "@mui/material"
import { tokens } from "../../theme"
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Faq = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const faqInfos = [
    {
      title: "An Important Question",
      question:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
    },
    {
      title: "Another Important Question",
      question:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
    },
    {
      title: "Your Favorite Question",
      question:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
    },
    {
      title: "Some Random Question",
      question:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
    },
    {
      title: "The Final Question",
      question:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
    },
  ];

  return (
    <Box>
      <Header title="FAQ" description="Frequently Asked Questions Page" />
      <Box sx={{
        p: "20px"
      }}>
        {faqInfos.map((faqInfo, index) => {
          return (
            <Accordion
              key={index}
              sx={{
                mb: "10px"
              }}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography
                  variant="h5"
                  sx={{
                    color: colors.greenAccent[500]
                  }}>{faqInfo.title}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>{faqInfo.question}</Typography>
              </AccordionDetails>
            </Accordion>
          )
        })}
      </Box>
    </Box>
  )
}

export default Faq;