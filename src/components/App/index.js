import React from 'react';
import AppLayout from './AppLayout'
import AppBar from './AppBar'
import AppProvider from './AppProvider'
import Settings from '../Settings'
import Content from '../Shared/Content'
import GlobalTheme from '../Shared/GlobalTheme'

export default function App () {

  return (
    <AppLayout>
      <GlobalTheme />
      <AppProvider>
        <AppBar />
        <Content>
          <Settings />
        </Content>
      </AppProvider>
    </AppLayout>

  );
}