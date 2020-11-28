import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from "react-apollo";
import ApolloClient from "apollo-boost";
import Search from './Search';
import "./index.css"

import 'bootstrap/dist/css/bootstrap.min.css';

const client = new ApolloClient({
  uri: "http://localhost:8080/graphql"
});



ReactDOM.render(<ApolloProvider client={client}>
	<Search/>
	</ApolloProvider>, document.getElementById('root'));
