import React from 'react';
import AppLayout from './AppLayout'
import AppBar from './AppBar'
import AppProvider from './AppProvider'
import Settings from '../Settings'
import Content from '../Shared/Content'
import GlobalTheme from '../Shared/GlobalTheme'

const App = React.memo(() => {
  console.log('I am the App function')
  return(
    <div>
      <AppBar />
      <Content>
        <Settings />
      </Content>
    </div>
  )
})

export default function () {
  console.log('??????????????????????APP RENDERED??????????????????????')
  return (
    // <AppLayout>
      /* <GlobalTheme /> */
      <AppProvider>
        {/* <App /> */}
      </AppProvider>
    // </AppLayout>

  );
}