import {
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Box
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import BasicIconButtonWithTooltip from "../BasicIconButtonWithTooltip/BasicIconButtonWithTooltip";
import BasicPopover from "../BasicPopover/BasicPopover";
import { useState } from "react";
import HelpIcon from "@mui/icons-material/Help";

function BasicAccordion({ summary, details }) {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClose = (event) => {
    event.stopPropagation();
    setAnchorEl(null);
  };

  const handleClick = (event) => {
    event.stopPropagation();
    setAnchorEl(event.currentTarget);
  };

  return (
    <>
      <Accordion defaultExpanded={true}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography variant="h5">{summary}</Typography>
            {/* TODO: add help text per accordion */}
            <BasicIconButtonWithTooltip
              tooltipTitle="Here will be help text"
              tooltipPlacement="right-start"
              onClick={handleClick}
              color="primary"
            >
              <HelpIcon />
            </BasicIconButtonWithTooltip>
            <BasicPopover
              open={!!anchorEl}
              anchorEl={anchorEl}
              onClose={handleClose}
              content="Popover content." //TODO
            />
          </Box>
        </AccordionSummary>
        <AccordionDetails>{details}</AccordionDetails>
      </Accordion>
    </>
  );
}

export default BasicAccordion;
