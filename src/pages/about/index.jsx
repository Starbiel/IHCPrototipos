import { Box, Typography } from "@mui/material";

const SobrePage = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        width: "100%",
        padding: 2,
      }}
    >
      <Typography variant="h4">Sobre o CIPEAD</Typography>

      <Typography variant="body1">
        O Centro de Assessoria Pedagógica (CIPEAD) é um órgão suplementar da UFPR, vinculado à Pró-Reitoria de Graduação e Educação Profissional.
      </Typography>

      <Typography variant="body1">
        Sua missão é oferecer suporte pedagógico e tecnológico no uso de tecnologias digitais em processos de ensino e aprendizagem.
      </Typography>

      <Typography variant="body1">
        O CIPEAD desenvolve materiais didáticos digitais, capacita professores, mantém ambientes virtuais de aprendizagem e apoia ações educacionais inovadoras.
      </Typography>

      <Typography variant="body1">
        Ele contribui com a qualidade da educação presencial e a distância, promovendo a integração estratégica das tecnologias no contexto universitário.
      </Typography>
    </Box>
  );
};

export default SobrePage;
