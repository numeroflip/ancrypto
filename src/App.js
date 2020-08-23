import React from 'react';
import AppLayout from './components/AppLayout'
import AppBar from './components/AppBar'
import AppProvider from './components/AppProvider'

export default function App () {
  return (
    <AppLayout>
      <AppProvider>
        <AppBar />
        <h1>Welcome to Ancrypto</h1>
      </AppProvider>
    </AppLayout>

  );
}

