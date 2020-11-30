import React from 'react';
import Product from './Product';
import Col  from 'react-bootstrap/Col';
import Row  from 'react-bootstrap/Row';
import Container  from 'react-bootstrap/Container';
import { gql, useQuery } from '@apollo/client';
import Spinner from 'react-bootstrap/Spinner'
export const GET_PRODUCTS = gql`
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
  if (loading) return <p>Loading...<Spinner animation="border" /></p>; 
  if (error) return <p>Error :(</p>;
return (<Container><p className="result">Numero de Resultados: {data.products.length}</p><Row>{data.products.map((currentProduct) => (
       	 <Col key={currentProduct.idp}><Product product={currentProduct} key={currentProduct.idp} /></Col>
	  ))}</Row></Container>);
}
export default Products;