import { AppBar, styled, Toolbar, Typography, Box, Badge, Avatar, Menu, MenuItem } from '@mui/material';
import React, { useState } from 'react';
import CodeIcon from '@mui/icons-material/Code';
import InputBase from '@mui/material/InputBase';
import {  Mail, Notifications } from '@mui/icons-material';

const StyledToolbar = styled(Toolbar)({
   display: 'flex',
   justifyContent: 'space-between',
});

const Search = styled("div")(({theme}) => ({
    backgroundColor: 'white',
    padding: '0px 10px',
    borderRadius: theme.shape.borderRadius,
    width: '40%'
}))

const Icons = styled(Box)(({theme}) => ({
    display: 'none',
    gap: '20px',
    alignItems: 'center',
    [theme.breakpoints.up("sm")] : {
        display: 'flex',
    }
}))

const UserBox = styled(Box)(({theme}) => ({
    display: 'flex',
    gap: '10px',
    alignItems: 'center',
    [theme.breakpoints.up("sm")] : {
        display: 'none',
    }
}))



const Navbar = () => {
    const [open, setOpen] = useState(false);

    return (
        <AppBar position='sticky'>
            <StyledToolbar>
                <Typography variant='h6' sx={{display: {xs: "none", sm: "block"}}}>
                 LeechCoder
                </Typography>
                <CodeIcon  sx={{display: {xs: "block", sm: "none"}}} />
                <Search>
                    <InputBase placeholder="Search…" />
                </Search>
                <Icons>
                  <Badge badgeContent={3} color="error">
                    <Mail/>
                  </Badge>
                  <Badge badgeContent={7} color="error">
                    <Notifications/>
                  </Badge>
                  <Avatar onClick={() => setOpen(true)} sx={{width: '30px', height: '30px'}} src='https://i.ibb.co/PDnnXFK/babulakter.jpg' />
                </Icons>
                <UserBox>
                   <Avatar onClick={() => setOpen(true)} sx={{width: '30px', height: '30px'}} src='https://i.ibb.co/PDnnXFK/babulakter.jpg'/>
                   <Typography variant='span'>
                          Babul
                   </Typography>
                </UserBox>
            </StyledToolbar>
            <Menu
                id="demo-positioned-menu"
                aria-labelledby="demo-positioned-button"
                open={open}
                onClose={() => setOpen(false)}
                anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
                }}
                transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
                }}
            >
                <MenuItem>Profile</MenuItem>
                <MenuItem>Settings</MenuItem>
                <MenuItem>Logout</MenuItem>
            </Menu>
        </AppBar>
    );
};

export default Navbar;