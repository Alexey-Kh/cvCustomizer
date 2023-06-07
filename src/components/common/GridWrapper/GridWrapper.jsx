import { Grid } from "@mui/material";

function GridWrapper({ children }) {
  return (
    <Grid item xs={12}>
      {children}
    </Grid>
  );
}

export default GridWrapper;
