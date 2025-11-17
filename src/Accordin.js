import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function Accordin() {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography component="span">Best Useful Link?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          Dolor almesit amet, consectetur adipiscing elit, sed doesn't eiusmod
          tempor kinfolk tonx seitan crucifix 3 wolf moon bicycle rights
          keffiyeh snackwave wolf same vice, chillwave vexillologist incididunt
          ut labore consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua.
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography component="span">How does this work?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          Dolor almesit amet, consectetur adipiscing elit, sed doesn't eiusmod
          tempor kinfolk tonx seitan crucifix 3 wolf moon bicycle rights
          keffiyeh snackwave wolf same vice, chillwave vexillologist incididunt
          ut labore consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua.
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
          <Typography component="span">why does villa id the Best?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          Dolor almesit amet, consectetur adipiscing elit, sed doesn't eiusmod
          tempor kinfolk tonx seitan crucifix 3 wolf moon bicycle rights
          keffiyeh snackwave wolf same vice, chillwave vexillologist incididunt
          ut labore consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua.
        </AccordionDetails>
        
      </Accordion>
    </div>
  );
}
