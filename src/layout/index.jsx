import { Outlet } from "react-router";
import NavBar from "../components/nav";
import { Box, Container } from "@mui/material";
import BannerTop from "../components/navItems/BannerTop";

function MainLayout() {
  return (
    <Box>
        <BannerTop height={160} />
        <NavBar />
        <Container
            maxWidth="lg"
            sx={{
                display: 'flex',
                justifyContent: 'center',
                maxHeight: '100%',
                paddingTop: 2,
            }}
        >
            <Outlet />
        </Container>
    </Box>
  );
}

export default MainLayout;