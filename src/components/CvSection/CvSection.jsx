import { Typography, Box, Button } from "@mui/material";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import DeleteIcon from "@mui/icons-material/Delete";
import BasicIconButtonWithTooltip from "../common/BasicIconButtonWithTooltip/BasicIconButtonWithTooltip";
import { useState, useEffect } from "react";
import RenameDialog from "../RenameDialog/RenameDialog";
import BasicTextField from "../common/BasicTextField/BasicTextField";
import handleContentPaste from "../../utils/handleContentPaste";

function CvSection({
  section,
  disabledDelete,
  handleDelete,
  handleSectionChange
}) {
  const [name, setName] = useState(section.name);
  const [newName, setNewName] = useState("");
  const [dialogOpen, setDialogOpen] = useState(false);
  const [content, setContent] = useState(section.content);

  useEffect(() => {
    handleSectionChange(section.id, name, content);
  }, [name, content]);

  const handleContentInputChange = (event) => setContent(event.target.value);
  const handleNameInputChange = (event) => setNewName(event.target.value);

  const handleDialogClick = () => {
    setDialogOpen(true);
  };

  const handleDialogClose = () => {
    setDialogOpen(false);
  };

  const handleDialogSubmit = () => {
    //TODO: add validation
    if (newName) {
      setName(newName);
    }
    setDialogOpen(false);
    //TODO: add snackbar
    //TODO: add error handling and feedback
  };

  const handleClear = () => {
    setContent("");
  };

  return (
    <Box sx={{ mb: 2 }}>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Typography variant="h6">{name}</Typography>
        <BasicIconButtonWithTooltip
          tooltipTitle="Rename"
          onClick={handleDialogClick}
          color="primary"
        >
          <DriveFileRenameOutlineIcon />
        </BasicIconButtonWithTooltip>
        <RenameDialog
          open={dialogOpen}
          onClose={handleDialogClose}
          onSubmit={handleDialogSubmit}
          onInputChange={handleNameInputChange}
        />
        <BasicIconButtonWithTooltip
          onClick={() => handleDelete(section.id)}
          disabled={disabledDelete}
          color="primary"
          tooltipTitle="Delete"
        >
          <DeleteIcon />
        </BasicIconButtonWithTooltip>
      </Box>
      <Box>
        <BasicTextField
          value={content}
          onChange={handleContentInputChange}
          onPaste={(event) => {
            handleContentPaste(event, setContent);
          }}
        />
      </Box>
      <Button variant="outlined" onClick={handleClear}>
        Clear Content
      </Button>
    </Box>
  );
}

export default CvSection;
