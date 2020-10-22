import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Launches from './components/Launches';
import Launch from './components/Launch';

import rocket from './assets/rocket.svg';

const client = new ApolloClient({
  uri:
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:5000/graphql'
      : '/graphql',
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className='container'>
          <header>
            <img
              src={rocket}
              alt='Launch Monitor'
              style={{ display: 'block', width: '60px', marginRight: '1rem' }}
            />
            <h1 className='display-4'>Launch Monitor</h1>
          </header>
          <Route exact path='/' component={Launches} />
          <Route exact path='/launch/:flight_number' component={Launch} />
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
