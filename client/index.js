import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient, { createNetworkInterface } from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import { BrowserRouter  } from 'react-router-dom';
import App from './components/App';


const networkInterface = createNetworkInterface({
  //if dont use this , the default networkInterface is from '/graphql'
  uri: '/graphql',
  opts: {
    credentials:'same-origin'
  }
})


const client = new ApolloClient({
  networkInterface,
  dataIdFromObject: o => o.id
});


const Root = () => {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ApolloProvider>
  );
};

ReactDOM.render(<Root />, document.querySelector('#root'));
