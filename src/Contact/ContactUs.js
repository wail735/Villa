import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";

export default function ContactUs() {
  const infos = [
    { id: 1, title: "Full Name", label: "Your Name..." },
    { id: 2, title: "Email Address", label: "Your E-mail..." },
    { id: 3, title: "Subject", label: "Subject..." },
  ];

  return (
    <Paper elevation={6} sx={{ p: { xs: 2, md: 4 }, borderRadius: 5 }}>
      <Box
        component="form"
        sx={{
          "& > div": { my: 1 },
        }}
        noValidate
        autoComplete="off"
      >
        {infos.map((info) => (
          <div key={info.id}>
            <Typography variant="body1" gutterBottom>
              {info.title}
            </Typography>
            <TextField
              fullWidth
              label={info.label}
              variant="outlined"
              size="small"
              style={{borderRadius:"15px"}}
            />
          </div>
        ))}

        <div>
          <Typography variant="body1" gutterBottom>
            Message
          </Typography>
          <TextField
            label="Your Message..."
            multiline
            minRows={4}
            variant="outlined"
            fullWidth
          />
        </div>

        <Button
          variant="contained"
          color="primary"
          sx={{
            mt: 2,
            backgroundColor: "#1e1e1e",
            "&:hover": {
              backgroundColor: "#333",
            },
          }}
        >
          Send Message
        </Button>
      </Box>
    </Paper>
  );
}
