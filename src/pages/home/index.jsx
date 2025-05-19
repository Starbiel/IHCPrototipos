import { Box, Button, Typography } from "@mui/material";
import RefCard from "../../components/card";

const card = {
    title: "Ref Card",
    description: "This is a reference card.",
    date: "2023-10-01",
    image: "https://www.petz.com.br/blog/wp-content/uploads/2021/04/raca-de-cachorro-docil-2.jpg"
};

const HomePage = () => {
    return (
        <Box sx={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "row",
            width: "100%",
        }}>
            <RefCard card={card} />
            <Button variant="contained" color="primary" sx={{ marginTop: "20px" }}>
                Clique me
            </Button>
        </Box>
    );
}

export default HomePage;