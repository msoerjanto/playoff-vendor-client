import { AppBar, Toolbar, styled, IconButton } from "@mui/material";
import React from "react";
import VendorDrawer from "../Drawer/VendorDrawer";

export interface MenuProps {
    
}

const Offset = styled('div')(({ theme }) => theme.mixins.toolbar);

const Menu = (props: MenuProps) => {
    return <AppBar position="fixed">
        <Toolbar>
            <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-aria-label="menu"
                sx={{mr:2}}
            >
                <VendorDrawer/>
            </IconButton>
        </Toolbar>
      </AppBar>
}

export default Menu;