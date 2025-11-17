import { useState } from "react";
import PageHeader from "./PageHeader";
import { Button } from "@mui/material";
import Properties from "./Properties/Properties";

export default function Propertie() {
  const [activeBtn, setActiveBtn] = useState(1);

  const btn = [
    { id: 1, title: "Show All" },
    { id: 2, title: "Appartement" },
    { id: 3, title: "Villa House" },
    { id: 4, title: "Penthouse" },
  ];

  return (
    <div>
      <PageHeader />
      <div className="p-4 flex flex-col sm:flex-row gap-4 justify-center mt-10">
        {btn.map((bt) => (
          <Button
            key={bt.id}
            variant="contained"
            onClick={() => setActiveBtn(bt.id)}
            className="w-full sm:w-[140px]"
            style={{
              backgroundColor: activeBtn === bt.id ? "#f35525" : "black",
              color: "#fff",
              padding: "10px 20px",
            }}
          >
            {bt.title}
          </Button>
        ))}
      </div>

      {/* يولي يظهر كامل داخل Properties */}
      <Properties activeBtn={activeBtn} />
    </div>
  );
}
