import React from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
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
	<Form onSubmit={this.handleSubmit}>
		<Form.Control onChange={this.handleChange} value={this.state.search} className="search-text"></Form.Control>
		<Button type="submit" className="submit-button">Buscar</Button>
	</Form> 
	 {<Products search={this.search}/>} 
	 </div>
	  );
  }
}

export default Search