import React, { useState } from 'react';
import {
  Button,
  Menu,
  MenuItem,
  ListItemText,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { NavLink } from 'react-router';

export default function NavDropdown({ label, items = [] }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleOpen = (e) => setAnchorEl(e.currentTarget);
  const handleClose = () => setAnchorEl(null);

  return (
    <>
      <Button
        onClick={handleOpen}
        endIcon={<ExpandMoreIcon />}
        sx={{
          color: '#0d1b2a',
          fontWeight: 600,
          textTransform: 'none',
        }}
      >
        {label}
      </Button>

      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        transformOrigin={{ horizontal: 'left', vertical: 'top' }}
      >
        {items.map(({ label: childLabel, to }) => (
          <MenuItem
            key={childLabel}
            component={NavLink}
            to={to}
            onClick={handleClose}
          >
            <ListItemText>{childLabel}</ListItemText>
          </MenuItem>
        ))}
      </Menu>
    </>
  );
}
