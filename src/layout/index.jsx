import { Outlet } from "react-router";
import { Box, Container } from "@mui/material";
import BannerTop from "../components/navItems/BannerTop";
import Footer from "../components/footer/Footer";
import ResponsiveNav from "../components/navBar";

function MainLayout() {
  return (
    <Box>
        <BannerTop height={160} />
        <ResponsiveNav />
        <Container
            maxWidth="lg"
            sx={{
                display: 'flex',
                justifyContent: 'center',
                paddingTop: 2,
                minHeight: 'calc(100vh - 260px)',
            }}
        >
            <Outlet />
        </Container>
        <Footer />
    </Box>
  );
}

export default MainLayout;