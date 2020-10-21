import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import Launches from './components/Launches';

import rocket from './assets/rocket.svg';

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql',
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className='container'>
        <header>
          <img
            src={rocket}
            alt='Launch Monitor'
            style={{ display: 'block', width: '60px', marginRight: '1rem' }}
          />
          <h1 className='display-4'>Launch Monitor</h1>
        </header>
        <Launches />
      </div>
    </ApolloProvider>
  );
}

export default App;
