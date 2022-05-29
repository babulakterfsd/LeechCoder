import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../../pages/Home';
import NotFound from '../../pages/NotFound';

function AllRoutes({mode, setMode}) {
    return (
        <Routes>
            <Route path="/" element={<Home mode={mode} setMode={setMode} />} />
            <Route path="/home" element={<Home mode={mode} setMode={setMode} />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}

export default AllRoutes;