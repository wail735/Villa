import * as React from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "./styles.css"; 

export default function According() {
  const [expanded, setExpanded] = React.useState("panel3");

  const handleChange = (panel) => (_e, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const panels = [
    {
      id: "panel1",
      title: "Best useful links?",
      content: `Get the best villa website template in HTML CSS and Bootstrap for your
                business. TemplateMo provides you the best free CSS templates in the
                world. Please tell your friends about it.`,
    },
    {
      id: "panel2",
      title: "How does this work?",
      content: `Dolor almesit amet, consectetur adipiscing elit, sed doesn't eiusmod
                tempor incididunt ut labore et dolore magna aliqua.`,
    },
    {
      id: "panel3",
      title: "Why is villa agency the best?",
      content: `Dolor almesit amet, consectetur adipiscing elit, sed doesn't eiusmod
                tempor incididunt ut labore et dolore magna aliqua.`,
    },
  ];

  return (
    <div>
      {panels.map(({ id, title, content }) => (
        <Accordion
          key={id}
          expanded={expanded === id}
          onChange={handleChange(id)}
          className={expanded === id ? "active" : ""}
        >
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography component="span">{title}</Typography>
          </AccordionSummary>
          <AccordionDetails>{content}</AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}
