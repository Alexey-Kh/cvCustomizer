import { IconButton, Tooltip } from "@mui/material";

function BasicIconButtonWithTooltip({
  children,
  tooltipTitle,
  tooltipPlacement,
  ...props
}) {
  if (props.disabled) {
    return null;
  }
  return (
    <Tooltip
      placement={tooltipPlacement ? tooltipPlacement : "bottom"}
      title={tooltipTitle}
      arrow
    >
      <IconButton {...props}>{children}</IconButton>
    </Tooltip>
  );
}

export default BasicIconButtonWithTooltip;
