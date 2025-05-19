import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import { Link, useNavigate } from 'react-router';
import { useMediaQuery, useTheme, Box } from '@mui/material';

export default function RefCard({ card }) {
    const navigate = useNavigate();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Card
            sx={{
                borderRadius: "8px",
                boxShadow: "0px 10px 10px 0px rgba(0, 0, 0, 0.1)",
                width: isMobile ? "83vw" : 1,
                borderLeft: `6px solid ${card.color}`,
            }}
            onClick={() => navigate("/refcard")}
        >
            <CardActionArea>
                <Box display="flex" flexDirection={isMobile ? 'column' : 'row'} >
                    <CardContent
                        sx={{
                            flex: 1,
                            backgroundColor: "rgba(0, 0, 0, 0.05)",
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'flex-start',
                            padding: 2,
                            paddingLeft: 4,
                            textAlign: 'left',
                        }}
                    >
                        <Typography gutterBottom variant="h6" component="div" fontWeight="bold">
                            {card.title}
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            {card.description}
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'black' }}>
                            {card.date}
                        </Typography>

                        <Link
                            component="button"
                            variant="body2"
                            sx={{ marginTop: 1, textTransform: 'uppercase', fontWeight: 'bold' }}
                            onClick={(e) => {
                                e.stopPropagation();
                                navigate(`/refcard/${card.id}`);
                            }}
                        >
                            Ler mais
                        </Link>
                    </CardContent>

                    <Box
                        sx={{
                            width: isMobile ? '100%' : 200,
                            height: isMobile ? 140 : 'auto',
                            backgroundColor: card.color || '#f8bbd0', // fallback rosa claro
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            textAlign: 'center',
                            padding: 2,
                        }}
                    >
                        <Typography variant="h6" fontWeight="bold" color="white">
                            Edital
                        </Typography>
                        <Typography variant="h5" fontWeight="bold" color="white">
                            {card.editalNumber}
                        </Typography>
                    </Box>
                </Box>
            </CardActionArea>
        </Card>
    );
}
