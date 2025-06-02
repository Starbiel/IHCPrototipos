// src/components/lists/SectorAccordion.jsx
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
  setOpenCourse,
  openDiscipline,
  setOpenDiscipline,
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
        {sector.courses.map((cur) => (
          <CourseAccordion
            key={cur.name}
            course={cur}
            /* ➤ Só expande o curso se este setor estiver realmente aberto E
                   se o curso em questão for igual a openCourse */
            expanded={expanded && openCourse === cur.name}
            /* ➤ Função para alternar o estado de openCourse no componente pai */
            onToggle={() =>
              setOpenCourse((prev) => (prev === cur.name ? null : cur.name))
            }
            /* ➤ Passa adiante as props relativas a disciplina */
            openDiscipline={openDiscipline}
            setOpenDiscipline={setOpenDiscipline}
            disciplineRef={disciplineRef}
          />
        ))}
      </AccordionDetails>
    </Accordion>
  );
}
