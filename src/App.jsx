import './App.css';
import React from 'react';
import { StylesProvider, ThemeProvider } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import { BrowserRouter as Router } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import { NordLight, NordDark } from "./themes/norde";
import AppContent from 'components/AppContent';

function App() {

    return (
        <ThemeProvider theme={NordLight}>
            <StylesProvider injectFirst>
                <CssBaseline />
                <div className="App" >
                    <Router>
                        <Header />
                        <AppContent />
                        <Footer />
                    </Router>
                </div>
            </StylesProvider>
        </ThemeProvider >
    );
}

export default App;