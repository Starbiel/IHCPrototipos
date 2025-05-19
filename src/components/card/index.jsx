import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import { useNavigate } from 'react-router';

export default function RefCard({card}) {
    const navigate = useNavigate();

    return (
        <Card 
            sx={{ 
                maxWidth: "45%", 
                borderRadius: "10px",
                boxShadow: "0px 10px 10px 0px rgba(0, 0, 0, 0.1)",
            }}
            onClick={() => {
                navigate("/refcard");
            }}
        >
        <CardActionArea>
            <CardMedia
                component="img"
                height="140"
                image={card.image}
                alt="green iguana"
            />
            <CardContent
                sx={{
                    backgroundColor: "rgba(0, 0, 0, 0.05)",
                }}
            >
                <Typography gutterBottom variant="h5" component="div">
                    {card.title}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {card.description}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {card.date}
                </Typography>
            </CardContent>
        </CardActionArea>
        </Card>
    );
}