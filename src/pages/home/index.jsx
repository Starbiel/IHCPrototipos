// HomePage.tsx
import { Stack, Typography } from '@mui/material';
import RefCard from '../../components/card';

const card = {
  title: 'EDITAL Nº 17/2025 – HOMOLOGAÇÃO DO RESULTADO E CLASSIFICAÇÃO FINAL',
  description: 'SELEÇÃO DE BOLSISTAS PARA ATUAÇÃO NAS AREAS DE AUDIOVISUAL E SUPORTE DE TECNOLOGIA DA INFORMAÇÃO NO LABORATÓRIO DE CULTURA DIGITAL, DA UNIVERSIDADE FEDERAL DO PARANÁ (UFPR)',
  date: '30 de abril de 2025',
  image:
    'https://www.petz.com.br/blog/wp-content/uploads/2021/04/raca-de-cachorro-docil-2.jpg',
  color: '#175ABF',
  editalNumber: 'Nº 17/2025',
};

const cards = Array.from({ length: 6 }, () => card);

function HomePage() {
  return (
    <Stack spacing={2} padding={2} backgroundColor="white" sx={{ borderRadius: "6px"}} width={"100%"}>

      <Typography variant="h5" fontWeight="bold" color="primary" align='start' paddingLeft={2} paddingRight={2}>
        INÍCIO
      </Typography>

      {cards.map((c, i) => (
        <RefCard key={i} card={c} />
      ))}
    </Stack>
  );
}

export default HomePage;