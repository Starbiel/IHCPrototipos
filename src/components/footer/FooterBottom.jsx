import { Box, Grid, Link as MuiLink } from '@mui/material';
import { Link as RouterLink } from 'react-dom';

export default function FooterBottom() {
  return (
    <Box
      component="section"
      sx={{
        bgcolor: 'primary.main',
        py: { xs: 2, md: 3 },
      }}
    >
      <Grid
        container
        alignItems="center"
        justifyContent="space-between"
        sx={{ maxWidth: 1200, mx: 'auto', px: 2 }}
      >
        {/* acesso à informação */}
        <Grid item xs={12} md="auto" sx={{ mb: { xs: 2, md: 0 } }}>
          <MuiLink
            component={RouterLink}
            to="/acesso-informacao"
            underline="none"
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1,
              color: '#fff',
              fontWeight: 600,
              '&:focus-visible': { outline: '2px solid', outlineOffset: 2 },
            }}
          >
            <img
              src=""
              width={36}
              height={36}
              alt=""
              aria-hidden="true"
            />
            Acesso à<br />Informação
          </MuiLink>
        </Grid>

        {/* logo governo */}
        <Grid item xs={12} md="auto" textAlign={{ xs: 'center', md: 'right' }}>
          <img
            src=""
            alt="Governo Federal – Brasil: União e Reconstrução"
            style={{ maxWidth: 190, height: 'auto' }}
          />
        </Grid>
      </Grid>
    </Box>
  );
}
