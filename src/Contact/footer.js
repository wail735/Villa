import { Box, Typography, Container} from "@mui/material";

export default function Footer() {
  return (
    <Box sx={{ backgroundColor: "rgb(30, 30, 30)", color: "#fff", py: 4, mt: 8 }}>
      <Container maxWidth="lg">
        <Typography variant="h6" gutterBottom>
          Copyright © 2048 Villa Agency Co., Ltd. All rights reserved. Design:TemplateMo
        </Typography>
      </Container>
    </Box>
  );
}
