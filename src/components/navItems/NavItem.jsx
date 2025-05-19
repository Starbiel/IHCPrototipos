import { Button } from '@mui/material';
import { NavLink } from 'react-router';

function NavItem({ label, to }) {
  return (
    <Button
      component={NavLink}
      to={to}
      end
      sx={{
        color: '#0d1b2a',
        fontWeight: 600,
        textTransform: 'none',
        '&.active': { backgroundColor: '#cfe2ff' },  // destaca rota ativa
      }}
    >
      {label}
    </Button>
  );
}

export default NavItem;