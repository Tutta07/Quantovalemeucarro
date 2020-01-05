
import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/Preco.css';
import {Col,Form, Row,Card,ListGroup,ListGroupItem,Button,ButtonToolbar} from 'react-bootstrap';
import carro from './carro.json';
//import axios from 'axios';
//import {useState,useEffect} from 'react';


class Preco extends Component{
  constructor(props){
    super(props);
    this.state={
      items:[],
    
      isLoaded:false,

    }
  }

  componentCarro(){
    //aqui en el fetch va o endereço da api
    fetch('./carro.json')
     .then(res => res.json())
     .then(json =>{
       this.setState({
         isLoaded:true,
         items:json,
        

       })
     } );
  }
 
  render(){
    var {isLoaded, items,item }= this.state;
    if(!isLoaded){
      return <div> Loading.....</div>
       }
       else{
  //GET: http://fipeapi.appspot.com/api/1/carros/marcas.json
  //GET: http://fipeapi.appspot.com/api/1/carros/veiculos/21.json
  //GET: http://fipeapi.appspot.com/api/1/carros/veiculo/21/4828.json
  //GET: http://fipeapi.appspot.com/api/1/carros/veiculo/21/4828/2013-1.json
   
    return(
    
      <div className="Formulario">
           <Form className="select-form">
               <Row>
                   <Col xs={12} md={3}>
                     {items.map(item =>(
                     <select className="form-control bg-primary" >
                        <option  key={item.id}>Marca: {item.marca}</option>
                     </select>
                     ))}
                   </Col>
                   <Col xs={12} md={3}>
                   {items.map(item =>(
                     <select className="form-control bg-primary" >
                       <option  key={item.id}>Modelo: {item.modelo}</option>
                     </select>
                      ))}
                   </Col>
                   <Col xs={12} md={3}>
                      {items.map(item =>(
                     <select className="form-control bg-primary" >
                       <option  key={item.id}>Ano: {item.ano}</option>
                     </select>
                      ))}
                   </Col>
                   <Col xs={12} md={3}>
                      {items.map(item =>(
                     <Form.Control as="select" className="form-control bg-primary">
                      <option  key={item.id}>Estado: {item.estado}</option>
                         
                     </Form.Control>
                      ))}
                   </Col>
             </Row>
             <ButtonToolbar>
             <Button className="calcular mt-3" type="submit">Calcular Agora</Button>
             </ButtonToolbar>
           </Form>

             <Card bg="primary mt-3" text="blue" style={{ width: '21rem' }}>
                 <Card.Header>Autos</Card.Header>
               <Card.Body>
               <Card.Title>Descripção</Card.Title>
                 <Card.Text
                  key={item.id}>Descripção:{item.descripcao}
                  </Card.Text>
                  <ListGroup className="list-group-flush">
                      <ListGroupItem key={item.precio}>Precio:{item.precio}</ListGroupItem>
                               <ListGroupItem key={item.id}>Marca:{item.marca}</ListGroupItem>
                               <ListGroupItem key={item.id}>Modelo:{item.modelo}</ListGroupItem>
                               <ListGroupItem key={item.id}>Ano:{item.ano}</ListGroupItem>
                               <ListGroupItem key={item.id}>Combustível:{item.combustivel}</ListGroupItem>
                         </ListGroup>
               </Card.Body>
             </Card>
             </div>
    


    );
  }

  }
}
     
export default Preco;
