// src/components/lists/CourseAccordion.jsx
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
  onToggle,
  openDiscipline,
  setOpenDiscipline,
  disciplineRef
}) {
  return (
    <Accordion
      sx={{ ml: 2 }}
      disableGutters
      expanded={expanded}
      onChange={onToggle}
    >
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
        {course.disciplines.map((d) => (
          <DisciplineAccordion
            key={d.code}
            discipline={d}
            /**
             * Só expande a disciplina se:
             * 1) este curso estiver expandido (expanded),
             * 2) openDiscipline === código desta disciplina
             */
            expanded={expanded && openDiscipline === d.code}
            /**
             * onToggle de disciplina:
             * - se o código atual já estiver aberto, fecha (seta null);
             * - senão, seta como aberto.
             */
            onToggle={() => {
              if (openDiscipline === d.code) {
                setOpenDiscipline(null);
              } else {
                setOpenDiscipline(d.code);
              }
            }}
            /**
             * Se este código de disciplina for exatamente o openDiscipline,
             * então passamos a ref para rolar até aqui. Senão, null.
             */
            scrollRef={openDiscipline === d.code ? disciplineRef : null}
          />
        ))}
      </AccordionDetails>
    </Accordion>
  );
}
