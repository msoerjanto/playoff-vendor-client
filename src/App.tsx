import { styled, ThemeProvider } from '@mui/material';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Menu from './Components/Menu/Menu';
import EventPage from './Pages/Event';
import HomeDashboardPage from './Pages/HomeDashboard';
import VendorTheme from './Styling/theme';


const Offset = styled('div')(({ theme }) => theme.mixins.toolbar);

function App() {
  return <ThemeProvider theme={VendorTheme}>
    <React.Fragment>
      <Menu />
      <Offset />
      <Routes>
        <Route path="/" element={<HomeDashboardPage/>} />
        <Route path="/events" element={<EventPage/>} />
      </Routes>
    </React.Fragment>
  </ThemeProvider> 
}

export default App;
