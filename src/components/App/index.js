import React from 'react';
import AppLayout from './AppLayout'
import NavBar from './NavBar'
import Settings from '../Settings'
import Content from '../Shared/Content'

export default function () {

  return (
    <AppLayout>
      <NavBar />
      <Content>
        <Settings />
      </Content>
    </AppLayout>
  );
}