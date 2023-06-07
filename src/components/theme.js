import { createTheme } from "@mui/material";

const theme = createTheme({
  components: {
    // Name of the component
    MuiGrid: {
      styleOverrides: {
        // Name of the slot
        item: {
          // Some CSS
          backgroundColor: "#eaeff1",
          padding: "12px 12px"
        }
      }
    },
    MuiAccordionSummary: {
      styleOverrides: {
        root: {
          "& .MuiAccordionSummary-content": {
            margin: "0 !important"
          }
        }
      }
    }
  }
});

export default theme;
