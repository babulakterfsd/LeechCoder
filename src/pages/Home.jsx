import { Box, Stack } from '@mui/material';
import React from 'react';
import Add from '../components/home/Add';
import Feed from '../components/home/Feed';
import Rightbar from '../components/home/Rightbar';
import Sidebar from '../components/home/Sidebar';
import Navbar from '../shared/sharedComponents/Navbar';

const Home = ({mode, setMode}) => {
    return (
        <Box bgcolor={"background.default"} color={"text.primary"}>
            <Navbar/>
            <Stack direction="row" spacing={2} justifyContent="space-between">
                <Sidebar mode={mode} setMode={setMode}/>
                <Feed/>
                <Rightbar/>
            </Stack>
            <Add/>
        </Box>
    );
};

export default Home;