import React from 'react';
import AppLayout from './AppLayout'
import AppBar from './AppBar'
import AppProvider from './AppProvider'
import Settings from '../Settings'
import Content from '../Shared/Content'
import GlobalTheme from '../Shared/GlobalTheme'

const App = React.memo(() => (
  <>
    <AppBar />
    <Content>
      <Settings />
    </Content>
  </>
))

export default function () {

  return (
    <AppLayout>
      <GlobalTheme />
      <AppProvider>
        <App />
      </AppProvider>
    </AppLayout>

  );
}