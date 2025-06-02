import { useTheme, useMediaQuery } from '@mui/material';
import PrimaryNav from './PrimaryNav';
import MobileNav from './MobileNav';
import BannerTop from '../navItems/BannerTop';

function ResponsiveNav() {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));

  return(
    <>
    {isDesktop ? (
      <>
        <BannerTop height={180} />
        <PrimaryNav />
      </>
    ) : (
      <>
        <MobileNav />
      </>
    )}
    </> 
  );
}

export default ResponsiveNav;
