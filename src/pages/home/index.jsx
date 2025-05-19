// HomePage.tsx
import { Grid } from '@mui/material';
import RefCard from '../../components/card';

const card = {
  title: 'Ref Card',
  description: 'This is a reference card.',
  date: '2023-10-01',
  image:
    'https://www.petz.com.br/blog/wp-content/uploads/2021/04/raca-de-cachorro-docil-2.jpg',
};

const cards = Array.from({ length: 6 }, () => card);

function HomePage() {
  return (
    <Grid container spacing={2} sx={{
        justifyContent: 'center',
    }}>
      {cards.map((c, i) => (
        <Grid
          key={i}
          item
          xs={12} sm={6} md={3}
        >
          <RefCard card={c} />
        </Grid>
      ))}
    </Grid>
  );
}

export default HomePage;