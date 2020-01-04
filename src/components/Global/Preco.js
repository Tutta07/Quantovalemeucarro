
import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/Preco.css';
import {Col,Form, Row,Card,ListGroup,ListGroupItem,Button,ButtonToolbar} from 'react-bootstrap';


class Preco extends Component{
  render(){
    return(
      <div className="Formulario">
           <Form className="select-form">
               <Row>
                   <Col xs={12} md={3}>
                     <select className="form-control bg-primary" >
                        <option >Marca</option>
                     </select>
                   </Col>
                   <Col xs={12} md={3}>
                     <select className="form-control bg-primary" >
                        <option >Modelo</option>
                     </select>
                   </Col>
                   <Col xs={12} md={3}>
                     <select className="form-control bg-primary" >
                        <option >Ano</option>
                     </select>
                   </Col>
                   <Col xs={12} md={3}>
                     <select className="form-control bg-primary" >
                        <option >Estado</option>
                     </select>
                   </Col>
             </Row>
             <ButtonToolbar>
             <Button className="calcular mt-3" type="submit">Calcular Agora</Button>
             </ButtonToolbar>
           </Form>

             <Card bg="primary mt-3" text="blue" style={{ width: '18rem' }}>
                 <Card.Header>Autos</Card.Header>
               <Card.Body>
               <Card.Title>Descripção</Card.Title>
                 <Card.Text>
                   Texto del Auto y su Descripcion
                  </Card.Text>
                  <ListGroup className="list-group-flush">
                               <ListGroupItem>Precio:</ListGroupItem>
                               <ListGroupItem>Marca:</ListGroupItem>
                               <ListGroupItem>Modelo:</ListGroupItem>
                               <ListGroupItem>Ano:</ListGroupItem>
                               <ListGroupItem>Modelo:</ListGroupItem>
                               <ListGroupItem>Combustível:</ListGroupItem>
                         </ListGroup>
               </Card.Body>
             </Card>
             </div>
    


    );
  }

  }
     
export default Preco;
