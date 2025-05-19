import { Box, Stack, Typography } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import EmailIcon from '@mui/icons-material/Email';
import SocialIconButton from './SocialIconButton';

function FooterTop() {
  return (
    <Box
      component="section"
      sx={{
        bgcolor: 'primary.dark',
        color: '#fff',
        textAlign: 'center',
        px: 2,
        py: { xs: 3, md: 4 },
        marginTop: { xs: 1, md: 2 },
        borderRadius: "10px 10px 0px 0px",
      }}
    >
      {/* endereço em <address> para semântica/IHC */}
      <Typography
        component="address"
        sx={{
          fontStyle: 'normal',
          display: 'inline-block',
          mb: 2,
          textAlign: "justify"
        }}
      >
        SEaDIP – Superintendência de Educação a Distância e Inovações
        Pedagógicas<br />
        Praça Santos Andrade, 50 | Centro | CEP 80.020-300 | Curitiba-PR<br />
        Contato (Teams ou e-mail): seadip@ufpr.br
      </Typography>

      <Stack
        direction="row"
        spacing={2}
        justifyContent="center"
        aria-label="Redes sociais"
      >
        <SocialIconButton
          icon={<InstagramIcon />}
          label="Instagram"
          href="https://www.instagram.com/seadip"
        />
        <SocialIconButton
          icon={<YouTubeIcon />}
          label="YouTube"
          href="https://www.youtube.com/channel/SEaDIP"
        />
        <SocialIconButton
          icon={<EmailIcon />}
          label="E-mail"
          href="mailto:seadip@ufpr.br"
        />
      </Stack>
    </Box>
  );
}

export default FooterTop;

