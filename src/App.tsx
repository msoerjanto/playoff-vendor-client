import { Amplify } from 'aws-amplify';
import { withAuthenticator } from '@aws-amplify/ui-react';
import awsconfig from './aws-exports';
import { Button, styled, ThemeProvider } from '@mui/material';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Menu from './Components/Menu/Menu';
import EventPage from './Pages/Event';
import HomeDashboardPage from './Pages/HomeDashboard';
import VendorTheme from './Styling/theme';

Amplify.configure(awsconfig);

const Offset = styled('div')(({ theme }) => theme.mixins.toolbar);

function App({ signOut, user }:any) {
  return <ThemeProvider theme={VendorTheme}>
    <React.Fragment>
      <Menu />
      <Button onClick={signOut}>Sign Out</Button>
      <Offset />
      <Routes>
        <Route path="/" element={<HomeDashboardPage/>} />
        <Route path="/events" element={<EventPage/>} />
      </Routes>
    </React.Fragment>
  </ThemeProvider> 
}

export default withAuthenticator(App);
