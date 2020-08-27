import React, {useContext} from 'react';
import AppLayout from './AppLayout'
import NavBar from './NavBar'
import Settings from '../Settings'
import Content from '../Shared/Content'
import Dashboard from '../Dashboard/index.js'


export default function () {


  return (
    <AppLayout>
      <NavBar />
      <Content>
        <Settings />
        <Dashboard />
      </Content>
    </AppLayout>
  );
}