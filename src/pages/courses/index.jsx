import React, { useEffect, useRef, useState } from 'react';
import {
  Container,
  CircularProgress,
  Alert,
  Typography,
  Box
} from '@mui/material';
import SectorAccordion from '../../components/lists/SectorAccordion';
import ufprSectors from '../../utils/api';
import SearchDiscipline from '../../components/lists/SearchDiscipline';

export default function CoursesPage() {
  const [sectors, setSectors] = useState([]);
  const [loading, setLoading] = useState(true);

  // ↴ estados controlando expansão
  const [openSector, setOpenSector] = useState(null);
  const [openCourse, setOpenCourse] = useState(null);
  const [openDiscipline, setOpenDiscipline] = useState(null);

  // ref do Accordion da disciplina para scroll automático
  const disciplineRef = useRef(null);

  useEffect(() => {
    const t = setTimeout(() => {
      setSectors(ufprSectors);
      setLoading(false);
    }, 600);
    return () => clearTimeout(t);
  }, []);

  /** callback disparado pelo Autocomplete */
  const handleSelect = ({ sector, course, discipline }) => {
    setOpenSector(sector);
    setOpenCourse(course);
    setOpenDiscipline(discipline);
    // scroll suave depois que os accordions estiverem abertos
    // pequeno delay garante que o DOM já renderizou
    setTimeout(() => {
      disciplineRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 200);
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Cursos de Graduação com Carga Horária EaD
      </Typography>

      {/* ➊ campo de busca */}
      <SearchDiscipline sectors={sectors} onSelect={handleSelect} />

      {loading ? (
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }} aria-busy="true">
          <CircularProgress />
        </Box>
      ) : (
        sectors.map(sec => (
          <SectorAccordion
            key={sec.name}
            sector={sec}
            expanded={openSector === sec.name}
            onToggle={() =>
              setOpenSector(prev => (prev === sec.name ? null : sec.name))
            }
            /* passa controles descendentes */
            openCourse={openCourse}
            openDiscipline={openDiscipline}
            disciplineRef={disciplineRef}
          />
        ))
      )}
    </Container>
  );
}