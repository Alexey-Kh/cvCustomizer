import { Popover, Typography } from "@mui/material";

function BasicPopover({ open, anchorEl, onClose, content }) {
  return (
    <Popover
      // id={id}
      open={open}
      anchorEl={anchorEl}
      onClose={onClose}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right"
      }}
    >
      <Typography sx={{ p: 2 }}>{content}</Typography>
    </Popover>
  );
}

export default BasicPopover;
