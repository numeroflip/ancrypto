import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import styled from 'styled-components';
import * as serviceWorker from './serviceWorker';
import ContextProvider from './components/contexts/state'

const Layout = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;

  > * {
    padding: var(--l);
  }

  footer {
    margin-top: auto;
  }
`

ReactDOM.render(
  <React.StrictMode>
    <ContextProvider>
      <Layout>
        <App />
      </Layout>
    </ContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
