import React, {useContext} from 'react';
import AppLayout from './AppLayout'
import NavBar from './NavBar'
import Settings from '../Settings'
import Dashboard from '../Dashboard/index.js'
import Footer from './Footer'
import GlobalTheme from '../Shared/GlobalTheme'
import {DataContext} from '../contexts'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


export default function () {
  const {theme} = useContext(DataContext)

  return (
    <AppLayout>
      <GlobalTheme dark={theme === 'dark'} />
      <Router>
        <NavBar />
        <Switch>
          <Route exact path='/'>
            <Dashboard />
          </Route>
          <Route path='/settings'>
            <Settings />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </AppLayout>
  );
}