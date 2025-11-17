import * as React from "react";
import Container from "@mui/material/Container";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InboxIcon from "@mui/icons-material/Inbox";
import Divider from "@mui/material/Divider";

export default function Header() {
  const image = [
    { id: 1, src: "/assets/images/email-icon.png", name: "info@company.com" },
    {
      id: 2,
      src: "/assets/images/email-icon.png",
      name: "Sunny Isles Beach, FL 33160",
    },
  ];

  const icons = [
    { id: 1, component: <FacebookIcon fontSize="small" /> },
    { id: 2, component: <TwitterIcon fontSize="small" /> },
    { id: 3, component: <InboxIcon fontSize="small" /> },
    { id: 4, component: <InstagramIcon fontSize="small" /> },
  ];

  return (
    <Container maxWidth="1xl">
      <div className="hidden md:flex flex-row justify-around items-center gap-6 mt-2">
        {/* Info */}
        <div className="flex flex-row gap-6">
          {image.map((img) => (
            <div key={img.id} className="flex items-center gap-4">
              <img src={img.src} alt={img.name} className="h-6" />
              <span className="text-sm">{img.name}</span>
            </div>
          ))}
        </div>

        {/* Circulaire Icons */}
        <div className="flex gap-3">
          {icons.map((icon) => (
            <div
              key={icon.id}
              className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-500 text-white hover:bg-orange-600 cursor-pointer transition"
            >
              {icon.component}
            </div>
          ))}
        </div>
      </div>
      <Divider style={{ marginTop: "10px" }} />
    </Container>
  );
}
