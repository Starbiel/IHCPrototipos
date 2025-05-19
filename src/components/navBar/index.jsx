import { useTheme, useMediaQuery } from '@mui/material';
import PrimaryNav from './PrimaryNav';
import MobileNav from './MobileNav';

function ResponsiveNav() {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));

  return isDesktop ? <PrimaryNav /> : <MobileNav />;
}

export default ResponsiveNav;
