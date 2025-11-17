import { Container, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import Boxes from "./boxes";

export default function Video() {
  return (
    <>
      <div className="relative w-full h-[500px] md:h-[600px] lg:h-[700px]">
        {/* Image de fond */}
        <img
          src="./assets/images/video-bg.jpg"
          alt="Background video"
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        />

        {/* Texte en surimpression */}
        <Typography
          className="absolute z-10 text-[#ee626b] font-bold text-sm md:text-lg"
          style={{
            top: "10%",
            left: "50%",
            transform: "translateX(-50%)",
          }}
        >
          | VIDEO VIEW
        </Typography>

        <Typography
          variant="h3"
          className="absolute z-10 text-white text-center font-bold text-4xl md:text-4xl"
          style={{
            top: "20%",
            left: "50%",
            transform: "translateX(-50%)",
            lineHeight: "1.4",
          }}
        >
          Get Closer View &<br /> Different Feeling
        </Typography>

        {/* Image encadrée responsive */}
        <div className="absolute z-20 top-[75%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-lg overflow-hidden shadow-lg w-full max-w-[1000px] px-4">
          <div className="relative w-full">
            <img
              src="./assets/images/video-frame.jpg"
              alt="Video Frame"
              className="w-full h-auto block"
            />
            <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-4 rounded-full shadow-lg hover:scale-110 transition">
              <Link to={"https://youtu.be/EdGSPoAFt00?si=n5npqDmzWJ-VJkix"}>
                <img
                  src="./assets/images/play-button.png"
                  alt="Play"
                  className="w-6 h-6"
                />
              </Link>
            </button>
          </div>
        </div>
      </div>

      {/* Contenu après l’image */}
      <Container maxWidth="xl">
        <div className="mt-20 text-center">
          <Boxes />
        </div>
      </Container>
    </>
  );
}
