import React from 'react';
import { Box, Container, useMediaQuery, useTheme } from '@mui/material';
import banner_img from "../../assets/images/banner_site.png";

export default function BannerTop({
  height = 180,
}) {

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box
      sx={{
        width: '100%',
        height: isMobile ? "50px" : height,
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          display: 'flex',
          justifyContent: 'center',
          maxHeight: '100%',
          paddingBottom: 0,
          paddingTop: 0,
        }}
      >
        {/* banner é uma imagem única, portanto <img> simples */}
        <Box
          component="img"
          src={ banner_img}
          alt="Banner UFPR / SEaDIP"
          sx={{ objectFit: "cover", height: 'auto' }}
        />
      </Container>
    </Box>
  );
}
