import { Box, Button, Divider, Drawer, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import DashboardIcon from '@mui/icons-material/Dashboard';
import TrophyIcon from '@mui/icons-material/EmojiEvents';
import MenuIcon from '@mui/icons-material/Menu';
import React, { ReactElement } from "react"; 
import { Link } from "react-router-dom";

type Anchor = 'top' | 'left' | 'bottom' | 'right';

interface MenuItem {
  text: string
  icon: ReactElement
  path: string
}

const menuItems: MenuItem[] = [
  {
    text: 'Dashboard',
    icon: <DashboardIcon />,
    path: '/',
  },
  {
    text: 'Events',
    icon: <TrophyIcon />,
    path: '/events',
  },
]

export default function VendorDrawer() {
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    })

    const toggleDrawer = 
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }
    
      setState({ ...state, [anchor]: open });
    };

    const list = (anchor: Anchor) => (
        <Box
          sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
          role="presentation"
          onClick={toggleDrawer(anchor, false)}
          onKeyDown={toggleDrawer(anchor, false)}
        >
          <List>
            {menuItems.map((menuItem, index) => (
              <Link to={menuItem.path} style={{textDecoration: 'none'}} key={menuItem.text} >
                <ListItem button >
                    <ListItemIcon>
                      {menuItem.icon}
                    </ListItemIcon>
                  <ListItemText primary={menuItem.text} />
                </ListItem>
              </Link>
            ))}
          </List>
          <Divider />
        </Box>
      );    
 
    return <React.Fragment>
        <Button onClick={toggleDrawer('left', true)} color="inherit">
            <MenuIcon />
        </Button>
         <Drawer
            anchor={'left'}
            open={state['left']}
            onClose={toggleDrawer('left', false)}
          >
            {list('left')}
        </Drawer>
    </React.Fragment>
}