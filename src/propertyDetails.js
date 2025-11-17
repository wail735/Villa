import { useState } from "react";
import PageHeader from "./PageHeader";
import { Card, Typography, CardContent, Divider } from "@mui/material";
import Accordin from "./Accordin";
import Ideal from "./Ideal/ideal";

export default function PropertyDetails() {
  const [showFullText, setShowFullText] = useState(false);

  const boxes = [
    {
      id: 1,
      icon: "./assets/images/info-icon-01.png",
      title: "450 m2",
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

  const fullText =
    "Get the best villa agency HTML CSS Bootstrap Template for your company website. TemplateMo provides you the best free CSS templates in the world. Please tell your friends about it. Thank you. Cloud bread kogi bitters pitchfork shoreditch tumblr yr succulents single-origin coffee schlitz enamel pin you probably haven't heard of them ugh hella. When you look for free CSS templates, you can simply type TemplateMo in any search engine website. In addition, you can type TemplateMo Digital Marketing, TemplateMo Corporate Layouts, etc. Master cleanse +1 intelligentsia swag post-ironic, slow-carb chambray knausgaard PBR&B DSA poutine neutra cardigan hoodie pop-up.";

  const shortText = fullText.slice(0, 200) + "...";

  return (
    <div className="bg-white min-h-screen">
      <PageHeader />

      <div className="p-4 flex flex-col lg:flex-row justify-center items-start gap-10">
        {/* Left side: image + address info */}
        <div className="w-full max-w-[700px] flex flex-col gap-4">
          <div className="overflow-hidden rounded-xl shadow-md h-auto lg:h-[500px]">
            <img
              alt="property-details"
              src="./assets/images/single-property.jpg"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Below the image */}
          <div className="px-2">
            <div className="inline-block bg-[#fbd9cf] text-[#1e1e24] text-sm font-medium rounded-md px-4 py-1 mb-2">
              Appartment
            </div>
            <Typography
              variant="h6"
              sx={{ fontWeight: "bold", fontSize: "1.5rem" }}
            >
              24 New Street Miami, OR 24560
            </Typography>
            <Divider sx={{ my: 2 }} />
            <Typography sx={{ color: "#4b5563" }}>
              {showFullText ? fullText : shortText}
              <span
                onClick={() => setShowFullText(!showFullText)}
                className="text-blue-600 cursor-pointer font-medium ml-2"
              >
                {showFullText ? "Show Less" : "Read More"}
              </span>
            </Typography>
            <div className="mt-10">
              <Accordin/>
            </div>
            
          </div>
        </div>

        {/* Right side: feature card */}
        <Card
          sx={{
            minWidth: 350,
            borderRadius: 4,
            height: { lg: 500 },
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            boxShadow: 4,
          }}
        >
          <CardContent>
            {boxes.map((box) => (
              <div
                key={box.id}
                className="flex items-start gap-5 py-5 border-b last:border-b-0"
              >
                <img src={box.icon} alt={box.title} width={50} />
                <div>
                  <Typography
                    variant="h5"
                    sx={{ fontWeight: "bold", color: "#1e1e24", mb: 0.5 }}
                  >
                    {box.title}
                  </Typography>
                  <Typography variant="body1" sx={{ color: "#9ca3af" }}>
                    {box.subtitle}
                  </Typography>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
      <Ideal/>
    </div>
  );
}
