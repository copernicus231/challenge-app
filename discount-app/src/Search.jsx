import React from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Navbar from 'react-bootstrap/Navbar'
import Products from './Products';



class Search extends React.Component {
	constructor(props, context) {
	super(props, context);
	this.state = { search: ''};
	this.search = ''
	this.handleSubmit = this.handleSubmit.bind(this);
	this.handleChange = this.handleChange.bind(this)
  }
  handleChange(event) {
	  this.setState({search: event.target.value});
  }
  handleSubmit(event) {
	 event.preventDefault();
	 this.search = this.state.search
	 this.setState({search: ''})
  }
  
  render() {
	  return (
		  
		  <div>
			  <Navbar bg="dark" variant="dark" className="bg-light justify-content-center" ><Form inline onSubmit={this.handleSubmit}>
		<Form.Control onChange={this.handleChange} placeholder="Buscar" pattern="[a-zA-Z0-9\s]+" value={this.state.search}></Form.Control>
		<Button type="submit">Buscar</Button>
	</Form> </Navbar>

	 {<Products search={this.search}/>} 
	 </div>
	  );
  }
}

export default Search