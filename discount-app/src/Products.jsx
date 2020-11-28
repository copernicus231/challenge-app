import React from 'react';
import gql from "graphql-tag";
import Product from './Product';
import Col  from 'react-bootstrap/Col';
import { useQuery } from '@apollo/react-hooks'
import Row  from 'react-bootstrap/Row';
import Container  from 'react-bootstrap/Container';

const GET_PRODUCTS = gql`
query productsParam($search: String!){
products(search: $search){
  idp
  brand
  description
  image
  price
  newPrice
  isDiscount
}
}
    `;
function Products(props) {
	const { loading, error, data } = useQuery(GET_PRODUCTS,{variables : {search:props.search}})
  if (loading) return <p>Loading...</p>; 
  if (error) return <p>Error :(</p>;
	return (<Container><Row>{data.products.map((currentProduct) => (
       	 <Col><Product product={currentProduct} /></Col>
	  ))}</Row></Container>);
}
export default Products;