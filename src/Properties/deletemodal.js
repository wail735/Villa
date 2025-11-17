import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { modalContextDelete } from "../Context/modalcontext";
import { useContext } from "react";

export default function DeleteModal({ selectedId, deleteProperty }) {
  const { openModalDelete, handleCloseModalDelete } =
    useContext(modalContextDelete);

  const handleConfirmDelete = () => {
    if (selectedId) {
      deleteProperty(selectedId);
      handleCloseModalDelete();
    }
  };

  return (
    <Dialog open={openModalDelete} onClose={handleCloseModalDelete}>
      <DialogTitle>{"Deleting Property"}</DialogTitle>
      <DialogContent>
        <DialogContentText>
          If you delete the property, you cannot undo it. Do you want to
          continue?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleCloseModalDelete}>Cancel</Button>
        <Button onClick={handleConfirmDelete} color="error">
          Confirm
        </Button>
      </DialogActions>
    </Dialog>
  );
}
