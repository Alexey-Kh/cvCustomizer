import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  TextField,
  DialogActions
} from "@mui/material";

function RenameDialog({ open, onClose, onSubmit, onInputChange }) {
  return (
    <div>
      <Dialog open={open} onClose={onClose}>
        <DialogTitle>Provide new name</DialogTitle>
        <DialogContent>
          {/* TODO: ensure input validation */}
          <TextField
            autoFocus
            margin="dense"
            // id="name"
            label="New section name"
            type="text"
            fullWidth
            variant="standard"
            onChange={onInputChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}>Cancel</Button>
          <Button onClick={onSubmit}>Rename</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default RenameDialog;
