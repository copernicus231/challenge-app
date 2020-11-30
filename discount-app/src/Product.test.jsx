import TestRenderer from 'react-test-renderer';
import Product from './Product';


test("Product render",() => {
	const fakeProduct = {    idp: "181",    image: "http://image.cl",   price : "10000",brand:"bbbbb",description : "ddddd"  };
	const testRenderer = TestRenderer.create(<Product product={fakeProduct}/>);
	const testInstance = testRenderer.root;
	expect(testInstance.findByProps({class: "product-price-btn"}).findByType("p").props.children).toHaveLength(10);
	expect(testInstance.findByProps({class: "product-info"}).findByType("h1").props.children).toBe(fakeProduct.description);
	expect(testInstance.findByProps({class: "product-info"}).findByType("h2").props.children).toContain(fakeProduct.brand);
});