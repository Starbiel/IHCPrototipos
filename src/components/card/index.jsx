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
                maxWidth: 345, 
                borderRadius: "0px 0px 10px 10px",
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
            <CardContent>
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