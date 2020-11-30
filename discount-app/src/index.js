import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from '@apollo/client';
import { ApolloClient, InMemoryCache } from '@apollo/client';

import Search from './Search';
import "./index.css"

import 'bootstrap/dist/css/bootstrap.min.css';

const API_URL =  process.env.REACT_APP_API_URL;

const client = new ApolloClient({
  uri: API_URL,
  cache: new InMemoryCache()
});



ReactDOM.render(<ApolloProvider client={client}>
	<Search/>
	</ApolloProvider>, document.getElementById('root'));
