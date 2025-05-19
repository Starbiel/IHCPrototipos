// theme.js
import { createTheme, lighten, darken } from '@mui/material/styles';
import { Color } from './colors';

const theme = createTheme({
  palette: {
    mode: 'light',

    primary: {
      main: Color.primary,
      light: lighten(Color.primary, 0.18),
      dark : darken (Color.primary, 0.22),
      contrastText: '#fff',
    },

    secondary: {
      main: Color.secondary,
      light: lighten(Color.secondary, 0.18),
      dark : darken (Color.secondary, 0.22),
      contrastText: '#fff',
    },

    /** 
     * Como JavaScript não reclama de “chaves extras”, 
     * podemos simplesmente adicionar nossa cor terciária
     * em outro slot já reconhecido pelo MUI.
     * 
     * Aqui uso `info`, mas `success`, `warning` ou `error`
     * funcionam do mesmo jeito — escolha o que fizer
     * mais sentido para o seu design system.
     */
    info: {
      main: Color.tertiary,
      light: lighten(Color.tertiary, 0.18),
      dark : darken (Color.tertiary, 0.22),
      contrastText: '#fff',
    },

    background: {
      default: lighten(Color.secondary, 0.92), // um cinza-azulado bem clarinho
      paper  : '#ffffff',
    },
  },

  // Sombras levemente suavizadas para combinar
  shadows: Array(25).fill('0px 2px 6px rgba(0,0,0,0.10)'),
});

export default theme;
