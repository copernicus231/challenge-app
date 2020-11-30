import React from 'react';
import { numberFormat } from './numberFormat';

function Product(props) {
   if(props.product.isDiscount){
     return (<div key={props.product.idp} class="wrapper">
        <div class="product-img">
		<img src={`http://${props.product.image}`} width="100" height="100" />
        </div>
        <div class="product-info">
             <div class="product-text">
                   <h1>{`${props.product.description}`}</h1>
         <h2>by {`${props.product.brand}`}</h2>
        
          </div>
          <div class="product-price-btn"><p>{numberFormat(`${props.product.newPrice}`)}</p></div>
          <div class="product-price-btn-old"><p><del>{numberFormat(`${props.product.price}`)}</del></p></div>
         </div>
         
    </div>)
   }
   return (<div key={props.product.idp} class="wrapper">
        <div class="product-img">
		<img src={`http://${props.product.image}`} width="100" height="100" />
        </div>
        <div class="product-info">
             <div class="product-text">
                   <h1>{`${props.product.description}`}</h1>
         <h2>by {`${props.product.brand}`}</h2>
        
          </div>

          <div class="product-price-btn"><p>{numberFormat(`${props.product.price}`)}</p></div>
         
         </div>
    </div>)
}

export default Product;
