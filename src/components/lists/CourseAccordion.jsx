import React from 'react';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Chip,
  Stack
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import DisciplineAccordion from './DisciplineAccordion';

export default function CourseAccordion({
  course,
  expanded,
  openDiscipline,
  disciplineRef
}) {
  return (
    <Accordion sx={{ ml: 2 }} disableGutters expanded={expanded}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Stack direction="row" spacing={1} alignItems="center">
          <Typography component="h3" variant="subtitle1">
            {course.name}
          </Typography>
          <Chip label={course.modality} size="small" />
          <Chip label={course.campus} size="small" variant="outlined" />
        </Stack>
      </AccordionSummary>

      <AccordionDetails>
        {course.disciplines.map(d => (
          <DisciplineAccordion
            key={d.code}
            discipline={d}
            /* só essa disciplina abre */
            expanded={expanded && openDiscipline === d.code}
            // passa ref só p/ a disciplina selecionada
            scrollRef={openDiscipline === d.code ? disciplineRef : null}
          />
        ))}
      </AccordionDetails>
    </Accordion>
  );
}
