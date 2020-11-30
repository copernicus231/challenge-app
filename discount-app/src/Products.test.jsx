import {GET_PRODUCTS} from "./Products";
import Products from "./Products";
import { MockedProvider } from '@apollo/react-testing';
import TestRenderer from 'react-test-renderer';
import Product from './Product';
import Row  from 'react-bootstrap/Row';
import Col  from 'react-bootstrap/Col';
import Container  from 'react-bootstrap/Container';

const mocks = [
  {
    request: {
      query: GET_PRODUCTS,
      variables: {
        search: '181',
      },
    },
    result: {
      data: {
        products: [{ idp: 181, image: "http://image.cl",   price : 10000,brand:"bbbbb",description : "ddddd", newPrice : 0,isDiscount : false }]
      },
    },
  },
];

test('renders without error', () => {
  TestRenderer.create(
    <MockedProvider mocks={mocks} addTypename={false}>
      <Products search='181' />
    </MockedProvider>,
  );
});


test('should render products', async () => {
 const prodMock = {
    request: {
      query: GET_PRODUCTS,
      variables: { search: '181'},
    },
    result: {
      data: { products: [{ idp: 181,    image: "http://image.cl",   price : 10000,brand:"bbbbb",description : "ddddd", newPrice : 0,isDiscount : false },{ idp: 182,    image: "http://image.cl",   price : 10000,brand:"aaaaa",description : "ccccc", newPrice : 0,isDiscount : false }] },
    },
  };
   let testRenderer
   TestRenderer.act(() => {
    testRenderer = TestRenderer.create(
    <MockedProvider mocks={[prodMock]} addTypename={false}>
      <Products search='181' />
    </MockedProvider>,
  );
  });
  await new Promise(resolve => setTimeout(resolve, 0)); 

  const testInstance = testRenderer.root;
   expect(testInstance.findByProps({className : "result"}).children).toStrictEqual(["Numero de Resultados: ","2"])
  expect(testInstance.findAllByType(Product).length).toBe(2);
  expect(testInstance.findAllByType(Row).length).toBe(1);
  expect(testInstance.findAllByType(Col).length).toBe(2);
  expect(testInstance.findAllByType(Container).length).toBe(1);
});

test('should render 0 products', async () => {
 const prodMock = {
    request: {
      query: GET_PRODUCTS,
      variables: { search: '181'},
    },
    result: {
      data: { products: [] },
    },
  };
   let testRenderer
   TestRenderer.act(() => {
    testRenderer = TestRenderer.create(
    <MockedProvider mocks={[prodMock]} addTypename={false}>
      <Products search='181' />
    </MockedProvider>,
  );
  });
  await new Promise(resolve => setTimeout(resolve, 0)); 

  const testInstance = testRenderer.root;
  expect(testInstance.findByProps({className : "result"}).children).toStrictEqual(["Numero de Resultados: ","0"])
  expect(testInstance.findAllByType(Product).length).toBe(0);
  expect(testInstance.findAllByType(Row).length).toBe(1);
  expect(testInstance.findAllByType(Col).length).toBe(0);
  expect(testInstance.findAllByType(Container).length).toBe(1);
});
