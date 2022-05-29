import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch } from '@mui/material';
import React from 'react';
import { AccountCircle, ContactPage, Group, Home, LocalGroceryStore, Nightlight, People, Settings } from '@mui/icons-material';


const Sidebar = ({mode, setMode}) => {
    return (
        <Box flex={1} p={2} sx={{display: {xs: "none", sm: "block"}}}>
           <Box position="fixed">
            <List>
                <ListItem disablePadding>
                    <ListItemButton component="a" hfre="#home">
                    <ListItemIcon>
                        <Home/>
                    </ListItemIcon>
                    <ListItemText primary="Homepage" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton component="a" hfre="#home">
                    <ListItemIcon>
                        <ContactPage/>
                    </ListItemIcon>
                    <ListItemText primary="Pages" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton component="a" hfre="#home">
                    <ListItemIcon>
                        <Group/>
                    </ListItemIcon>
                    <ListItemText primary="Groups" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton component="a" hfre="#home">
                    <ListItemIcon>
                        <LocalGroceryStore/>
                    </ListItemIcon>
                    <ListItemText primary="Marketplace" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton component="a" hfre="#home">
                    <ListItemIcon>
                        <People/>
                    </ListItemIcon>
                    <ListItemText primary="Friends" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton component="a" hfre="#home">
                    <ListItemIcon>
                        <Settings/>
                    </ListItemIcon>
                    <ListItemText primary="Settings" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton component="a" hfre="#home">
                    <ListItemIcon>
                        <AccountCircle/>
                    </ListItemIcon>
                    <ListItemText primary="Profile" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton component="a" hfre="#home">
                    <ListItemIcon>
                        <Nightlight/>
                    </ListItemIcon>
                    <Switch onChange={(e) => setMode(mode === 'light' ? 'dark' : 'light')} />
                    </ListItemButton>
                </ListItem>
            </List>
           </Box>
        </Box>
    );
};

export default Sidebar;