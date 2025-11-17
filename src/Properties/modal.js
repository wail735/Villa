import * as React from "react";
import {
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { useContext, useState } from "react";
import { modalcontext } from "../Context/modalcontext";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

const fields = [
  { id: 1, name: "type", label: "Type" },
  { id: 2, name: "price", label: "Price" },
  { id: 3, name: "sub", label: "Détails" },
  { id: 4, name: "Bedrooms", label: "Bedrooms" },
  { id: 5, name: "Bathrooms", label: "Bathrooms" },
  { id: 6, name: "Area", label: "Area" },
  { id: 7, name: "Floor", label: "Floor" },
  { id: 8, name: "Parking", label: "Parking" },
];

export default function Modal({ addProperty }) {
  const [data, setData] = useState({});
  const { openModal, handleCloseModal } = useContext(modalcontext);

  const handleSubmit = () => {
    addProperty(data);
    handleCloseModal();
    setData({});
  };

  const isFormValid = () =>
    fields.every(
      (field) => data[field.name] && data[field.name].trim() !== ""
    ) && data.image;

  return (
    <Dialog open={openModal} onClose={handleCloseModal} fullWidth maxWidth="sm">
      <DialogTitle>Add Propriété</DialogTitle>
      <DialogContent dividers>
        <Button
          component="label"
          variant="contained"
          startIcon={<CloudUploadIcon />}
          sx={{ mb: 2 }}
        >
          Upload Image
          <VisuallyHiddenInput
            type="file"
            accept="image/*"
            onChange={(e) => {
              const file = e.target.files[0];
              if (file) {
                const reader = new FileReader();
                reader.onloadend = () => {
                  setData((prev) => ({
                    ...prev,
                    image: reader.result,
                  }));
                };
                reader.readAsDataURL(file);
              }
            }}
          />
        </Button>

        {fields.map((field) => (
          <TextField
            required
            key={field.id}
            margin="dense"
            name={field.name}
            label={field.label}
            fullWidth
            variant="standard"
            onChange={(e) =>
              setData({ ...data, [e.target.name]: e.target.value })
            }
          />
        ))}
      </DialogContent>

      <DialogActions>
        <Button onClick={handleCloseModal}>Cancel</Button>
        <Button onClick={handleSubmit} disabled={!isFormValid()}>
          Confirm
        </Button>
      </DialogActions>
    </Dialog>
  );
}
