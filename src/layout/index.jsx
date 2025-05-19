import { Outlet } from "react-router";
import NavBar from "../components/nav";
import { Box } from "@mui/material";

function MainLayout() {
  return (
    <Box>
        <NavBar />
        <Outlet />
    </Box>
  );
}

export default MainLayout;