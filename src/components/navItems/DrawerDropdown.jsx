import React, { useState } from 'react';
import {
  ListItemButton,
  ListItemText,
  Collapse,
  List,
} from '@mui/material';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { NavLink } from 'react-router';


export default function DrawerDropdown({ item }) {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen((prev) => !prev);

  return (
    <>
      <ListItemButton onClick={toggle}>
        <ListItemText primary={item.label} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>

      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {item.children.map((child) => (
            <ListItemButton
              key={child.label}
              component={NavLink}
              to={child.to}
              sx={{ pl: 4 }}
            >
              <ListItemText primary={child.label} />
            </ListItemButton>
          ))}
        </List>
      </Collapse>
    </>
  );
}
