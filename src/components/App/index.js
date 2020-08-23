import React, {useEffect} from 'react';
import AppLayout from './AppLayout'
import AppBar from './AppBar'
import { AppContext } from './AppProvider'
import Settings from '../Settings'

export default function App () {


  return (
    <AppLayout>
        <AppBar />
        <Settings />
    </AppLayout>

  );
}