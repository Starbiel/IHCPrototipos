import React from 'react';
import { Box, Container } from '@mui/material';
import banner_img from "../../assets/images/banner_site.png";

export default function BannerTop({
  src,                       // obrigatória: caminho da imagem do banner inteiro
  height = 140,              // altura em px
}) {
  return (
    <Box
      sx={{
        width: '100%',
        height,
        backgroundColor: '#0055c7',   
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        {/* banner é uma imagem única, portanto <img> simples */}
        <Box
          component="img"
          src={banner_img}
          alt="Banner UFPR / SEaDIP"
          sx={{ width: '100%', height: 'auto' }}
        />
      </Container>
    </Box>
  );
}
