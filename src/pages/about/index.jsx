import React from 'react';
import {
  Container,
  Paper,
  Box,
  Typography,
  Button,
  useTheme,
  Link,
} from '@mui/material';
import ReactPlayer from 'react-player';

const SobrePage = () => {
  const theme = useTheme();

  return (
    <Container
      maxWidth="md"
      sx={{
        py: 4,
      }}
    >
      <Paper
        elevation={4}
        sx={{
          p: 4,
          borderRadius: 3,
          bgcolor: theme.palette.background.paper,
          color: theme.palette.text.primary,
        }}
      >
        {/* Título principal */}
        <Typography component="h1" variant="h4" gutterBottom>
          Sobre o SEaDIP
        </Typography>

        {/* Blocos de texto com espaçamento consistente */}
        {[
          `O Setor de Apoio à Docência e Inovação Pedagógica (SEADIP) é um órgão da UFPR comprometido com o fortalecimento da prática docente por meio da promoção da inovação pedagógica e do uso estratégico de tecnologias educacionais.`,
          `Seu principal objetivo é oferecer suporte técnico e pedagógico para docentes, incentivando a adoção de metodologias ativas, recursos digitais e abordagens inovadoras no processo de ensino e aprendizagem.`,
          `O SEADIP atua em diversas frentes: desenvolvimento de materiais educativos, formação continuada de professores, gestão de ambientes virtuais de aprendizagem e fomento a projetos de inovação no contexto universitário.`,
          `Dessa forma, contribui para a qualificação do ensino na UFPR, tanto presencial quanto a distância, promovendo uma cultura pedagógica centrada no estudante, colaborativa e alinhada aos desafios contemporâneos da educação superior.`,
          `Assista ao nosso vídeo institucional e conheça mais sobre o trabalho desenvolvido pelo SEADIP em parceria com docentes, técnicos e estudantes da UFPR.`,
        ].map((txt, i) => (
          <Typography
            key={i}
            variant="body1"
            paragraph
            sx={{ pl: 1, pr: 1, lineHeight: 1.6 }}
          >
            {txt}
          </Typography>
        ))}

        {/* Container responsivo para o vídeo */}
        <Box
          component="section"
          role="region"
          aria-label="Vídeo institucional do SEADIP"
          sx={{
            position: 'relative',
            paddingTop: '56.25%' /* 16:9 */,
            borderRadius: 2,
            overflow: 'hidden',
            boxShadow: theme.shadows[3],
            mb: 2,
          }}
        >
          <ReactPlayer
            url="https://www.youtube.com/watch?v=DQ91dtrEs5g"
            width="100%"
            height="100%"
            style={{ position: 'absolute', top: 0, left: 0 }}
            controls
            config={{
              youtube: {
                playerVars: {
                  cc_load_policy: 1,
                  modestbranding: 1,
                },
              },
            }}
          />
        </Box>

        {/* Link para transcrição (importante para acessibilidade) */}
        <Typography variant="caption" display="block" gutterBottom>
          <Link
            href="/transcricao-seadip.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Baixe a transcrição completa do vídeo
          </Link>
        </Typography>

        {/* Botão de ação bem destacado */}
        <Box textAlign="center" mt={3}>
          <Button
            variant="contained"
            size="large"
            href="https://www.youtube.com/watch?v=DQ91dtrEs5g"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Abrir vídeo institucional do SEADIP no YouTube"
          >
            Assistir no YouTube
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default SobrePage;
