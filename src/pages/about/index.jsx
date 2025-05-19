import { Typography, Stack, Button } from "@mui/material";

const SobrePage = () => {
  return (
    <Stack
      spacing={2}
      padding={2}
      backgroundColor="white"
      sx={{ borderRadius: "6px",
        color: "black",
       }}
      width="100%"
    >
      <Typography variant="h4">Sobre o SEaDIP</Typography>

      <Typography variant="h6" align="start" paddingLeft={2} paddingRight={2}>
      O Setor de Apoio à Docência e Inovação Pedagógica (SEADIP) é um órgão da UFPR comprometido com o fortalecimento da prática docente por meio da promoção da inovação pedagógica e do uso estratégico de tecnologias educacionais.
      </Typography>

      <Typography variant="h6" align="start" paddingLeft={2} paddingRight={2}>
      Seu principal objetivo é oferecer suporte técnico e pedagógico para docentes, incentivando a adoção de metodologias ativas, recursos digitais e abordagens inovadoras no processo de ensino e aprendizagem.
      </Typography>

      <Typography variant="h6" align="start" paddingLeft={2} paddingRight={2}>
      O SEADIP atua em diversas frentes: desenvolvimento de materiais educativos, formação continuada de professores, gestão de ambientes virtuais de aprendizagem e fomento a projetos de inovação no contexto universitário.
      </Typography>

      <Typography variant="h6" align="start" paddingLeft={2} paddingRight={2}>
      Dessa forma, contribui para a qualificação do ensino na UFPR, tanto presencial quanto a distância, promovendo uma cultura pedagógica centrada no estudante, colaborativa e alinhada aos desafios contemporâneos da educação superior.
      </Typography>

      <Typography variant="h6" align="start" paddingLeft={2} paddingRight={2}>
      Assista ao nosso vídeo institucional e conheça mais sobre o trabalho desenvolvido pelo SEADIP em parceria com docentes, técnicos e estudantes da UFPR.
      </Typography>

       {/* <iframe
        width="100%"
        height="400"
        src="https://youtu.be/DQ91dtrEs5g?si=UPrqQxNG3FJ8Oxgx"
        title="Vídeo do CIPEAD"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe> */}
       <Button
        variant="contained"
        color="primary"
        href="https://www.youtube.com/watch?v=DQ91dtrEs5g"
        target="_blank"
        rel="noopener"
      >
        Assistir ao vídeo
      </Button>
    </Stack>
  );
};

export default SobrePage;
