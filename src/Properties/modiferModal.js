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
import { modalcontextUpdate } from "../Context/modalcontext";

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

export default function ModifierModal({
  selectedId,
  propertyToEdit,
  updateProperty,
}) {
  const { openModalUpdate, handleCloseModalUpdate } =
    useContext(modalcontextUpdate);
  const [data, setData] = useState({});

  React.useEffect(() => {
    if (propertyToEdit) {
      setData({
        type: propertyToEdit.boxe[0].title,
        price: propertyToEdit.boxe[0].price,
        sub: propertyToEdit.boxe[0].sub,
        Bedrooms: propertyToEdit.infos[0].Bedrooms,
        Bathrooms: propertyToEdit.infos[0].Bathrooms,
        Area: propertyToEdit.infos[0].Area,
        Floor: propertyToEdit.infos[0].Floor,
        Parking: propertyToEdit.infos[0].Parking,
        image: propertyToEdit.image,
      });
    }
  }, [propertyToEdit]);

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    updateProperty(selectedId, data);
    handleCloseModalUpdate();
  };

  return (
    <Dialog
      open={openModalUpdate}
      onClose={handleCloseModalUpdate}
      fullWidth
      maxWidth="sm"
    >
      <DialogTitle>Update Propriété</DialogTitle>

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
                  setData({ ...data, image: reader.result }); 
                };
                reader.readAsDataURL(file);
              }
            }}
          />
        </Button>

        {fields.map((field) => (
          <TextField
            key={field.id}
            margin="dense"
            name={field.name}
            label={field.label}
            fullWidth
            variant="standard"
            value={data[field.name] || ""}
            onChange={handleChange}
          />
        ))}
      </DialogContent>

      <DialogActions>
        <Button onClick={handleCloseModalUpdate}>Cancel</Button>
        <Button onClick={handleSubmit}>Confirm</Button>
      </DialogActions>
    </Dialog>
  );
}
