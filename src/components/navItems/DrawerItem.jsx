import { ListItemButton, ListItemText } from '@mui/material';
import { NavLink } from 'react-dom';

function DrawerItem({ item }) {
  return (
    <ListItemButton
      component={NavLink}
      to={item.to}
      sx={{ '&.active > .MuiListItemText-root': { fontWeight: 700 } }}
    >
      <ListItemText primary={item.label} />
    </ListItemButton>
  );
}

export default DrawerItem;
