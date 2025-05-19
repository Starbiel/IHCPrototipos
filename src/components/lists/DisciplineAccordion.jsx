import React from 'react';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Chip
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import DisciplineDetails from './DisciplineDetails';

export default function DisciplineAccordion({
  discipline,
  expanded,
  scrollRef
}) {
  const { code, name, workload } = discipline;

  return (
    <Accordion
      sx={{ ml: 4 }}
      disableGutters
      expanded={expanded}
      ref={scrollRef}
    >
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography component="h4" variant="body1">
          {code} – {name}
        </Typography>
        <Chip label={`${workload}h`} size="small" sx={{ ml: 2 }} />
      </AccordionSummary>

      <AccordionDetails>
        <DisciplineDetails discipline={discipline} />
      </AccordionDetails>
    </Accordion>
  );
}
