import { TextField } from "@mui/material";

function BasicTextField({ value, onChange, ...rest }) {
  return (
    <TextField
      multiline
      minRows={3}
      maxRows={20}
      variant="outlined"
      fullWidth
      value={value}
      onChange={onChange}
      {...rest}
    />
  );
}

export default BasicTextField;
