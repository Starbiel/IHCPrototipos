import { AppBar, Toolbar, Container, useTheme } from '@mui/material';
import NavItem from '../navItems/NavItem';
import NavDropdown from '../navItems/NavDropdown';
import navConfig from '../../navConfig';

export default function PrimaryNav() {
    const theme = useTheme();

    return (
        <>  
            <AppBar
                position="static"
                elevation={0}
                sx={{ backgroundColor: theme.palette.primary, boxShadow: 'inset 0 -1px #d9e1ec', borderRadius: 1, }}
            >
                <Toolbar variant="dense" disableGutters>
                    <Container maxWidth="lg" sx={{ display: 'flex', gap: 1 }}>
                        {navConfig.map((item) =>
                            item.children ? (
                            <NavDropdown
                                key={item.label}
                                label={item.label}
                                items={item.children}
                            />
                            ) : (
                                <NavItem key={item.label} label={item.label} to={item.to} />
                            )
                        )}
                    </Container>
                </Toolbar>
            </AppBar>
        </>
    );
}
