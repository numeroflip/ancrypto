import React from 'react';
import AppLayout from './AppLayout'
import AppBar from './AppBar'
import AppProvider from './AppProvider'
import Settings from '../Settings'
import Content from '../Shared/Content'

export default function App () {

  return (
    <AppLayout>
      <AppProvider>
        <AppBar />
        <Content>
          <Settings />
        </Content>
      </AppProvider>
    </AppLayout>

  );
}