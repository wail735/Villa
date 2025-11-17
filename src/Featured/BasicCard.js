import * as React from "react";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import { styled } from "@mui/material/styles";

const Icon = styled("img")({
  width: 40,
  height: 40,
  marginRight: 16,
});

const InfoItem = styled(Box)({
  display: "flex",
  alignItems: "center",
  padding: "16px 0",
});

const box = [
  {
    id: 1,
    icon: "./assets/images/info-icon-01.png",
    title: "250 m2",
    subtitle: "Total Flat Space",
  },
  {
    id: 2,
    icon: "./assets/images/info-icon-02.png",
    title: "Contract",
    subtitle: "Contract Ready",
  },
  {
    id: 3,
    icon: "./assets/images/info-icon-03.png",
    title: "Payment",
    subtitle: "Payment Process",
  },
  {
    id: 4,
    icon: "./assets/images/info-icon-04.png",
    title: "Safety",
    subtitle: "24/7 Under Control",
  },
];

export default function BasicCard() {
  return (
    <Card
      sx={{
        maxWidth: 320,
        height: "100%",
        borderRadius: 3,
        boxShadow: 3,
        p: 2,
        backgroundColor: "#fff",
        transition: "all 0.3s ease-in-out", // Smooth transition
        "&:hover": {
          boxShadow: 6,
          transform: "scale(1.03)",
          backgroundColor: "#f5f5f5",
        },
      }}
    >
      {box.map((item, index) => (
        <React.Fragment key={item.id}>
          <InfoItem>
            <Icon src={item.icon} alt={item.title} />
            <Box>
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                {item.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {item.subtitle}
              </Typography>
            </Box>
          </InfoItem>
          {index < box.length - 1 && <Divider />}
        </React.Fragment>
      ))}
    </Card>
  );
}
