import React, {useContext} from 'react';
import AppLayout from './AppLayout'
import NavBar from './NavBar'
import Settings from '../Settings'
import Content from '../Shared/Content'
import Dashboard from '../Dashboard/index.js'
import Footer from './Footer'
import GlobalTheme from '../Shared/GlobalTheme'
import {DataContext} from '../contexts'


export default function () {
  const {theme} = useContext(DataContext)

  return (
    <AppLayout>
      <GlobalTheme dark={theme === 'dark'} />
      <NavBar />
      <Content>
        <Settings />
        <Dashboard />
      </Content>
      <Footer />
    </AppLayout>
  );
}