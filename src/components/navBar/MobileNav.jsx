import React, { useState } from 'react';
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Drawer,
  List,
  useTheme,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from 'react-dom';
import navConfig from '../../navConfig';
import DrawerItem from '../navItems/DrawerItem';
import DrawerDropdown from '../navItems/DrawerDropdown';

export default function MobileNav() {
  const [open, setOpen] = useState(false);
  const theme = useTheme();

  /* -------- helpers -------- */
  const toggleDrawer = () => setOpen((prev) => !prev);
  const drawerWidth = 260;              // largura do menu lateral
  const appBarHeight = 48;              // Toolbar "dense" = 48 px

  return (
    <>
      {/* ----------  APPBAR FIXO  ---------- */}
      <AppBar
        position="fixed"                // fica preso no topo
        elevation={0}
        sx={{
          bgcolor: '#eaf2fb',
          color: '#0d1b2a',
          zIndex: theme.zIndex.drawer + 1, // acima do Drawer
        }}
      >
        <Toolbar variant="dense" sx={{ minHeight: appBarHeight }}>
          {/* Botão abre/fecha */}
          <IconButton
            edge="start"
            onClick={toggleDrawer}
            aria-label={open ? 'Fechar menu' : 'Abrir menu'}
            size="large"
            sx={{ mr: 1 }}
          >
            {open ? "" : <MenuIcon />}
          </IconButton>

          {/* título / logo */}
          <Box
            component={NavLink}
            to="/"
            sx={{
              fontWeight: 700,
              textDecoration: 'none',
              color: 'inherit',
              flexGrow: 1,
            }}
          >
            SEaDIP
          </Box>
        </Toolbar>
      </AppBar>

      {/* ----------  DRAWER TEMPORÁRIO  ---------- */}
      <Drawer
        anchor="left"
        open={open}
        onClose={toggleDrawer}
        ModalProps={{ keepMounted: true }}
        /*   ▸ O Drawer fica embaixo do AppBar:
             top = altura do AppBar
             height = 100% - altura do AppBar
        */
        PaperProps={{
          sx: {
            width: drawerWidth,
            top: appBarHeight,
            height: `calc(100% - ${appBarHeight}px)`,
          },
        }}
      >
        <List sx={{ p: 0 }}>
          {navConfig.map((item) =>
            item.children ? (
              <DrawerDropdown key={item.label} item={item} />
            ) : (
              <DrawerItem key={item.label} item={item} />
            )
          )}
        </List>
      </Drawer>

      {/* ----------  EMPURRA CONTEÚDO PARA BAIXO  ----------
          Como o AppBar agora é fixed, colocamos um spacer
          para evitar que o conteúdo da página fique escondido.
      */}
      <Toolbar variant="dense" />
    </>
  );
}