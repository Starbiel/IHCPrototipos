import React from 'react';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CourseAccordion from './CourseAccordion';

export default function SectorAccordion({
  sector,
  expanded,
  onToggle,
  openCourse,
  openDiscipline,
  disciplineRef
}) {
  return (
    <Accordion disableGutters expanded={expanded} onChange={onToggle}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography component="h2" variant="h6">
          Setor {sector.name}
        </Typography>
      </AccordionSummary>

      <AccordionDetails>
        {sector.courses.map(cur => (
          <CourseAccordion
            key={cur.name}
            course={cur}
            expanded={expanded && openCourse === cur.name}
            openDiscipline={openDiscipline}
            disciplineRef={disciplineRef}
          />
        ))}
      </AccordionDetails>
    </Accordion>
  );
}

