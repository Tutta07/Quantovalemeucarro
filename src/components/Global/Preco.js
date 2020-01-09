
import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/Preco.css';
import {Col,Form, Row,Card,ListGroup,ListGroupItem,Button,ButtonToolbar} from 'react-bootstrap';

//import axios from 'axios';
//import {useState,useEffect} from 'react';


class Preco extends Component{
  constructor(props){
    super(props);
    this.state={
      marcas:[],
      modelos:[],
      anos:[],
      showresult:[],
      loading:false
    
    }
  }

  componentDidMount(){
       this.getMarcas();
       this.getModelos();
       this.getAnos();
       }

       getMarcas = () => {
         this.setState ({ loading:true })
         fetch('http://leonardodavila-price-api.glitch.me/brands')
         .then(res =>res.json()) 
         .then( resmarcas => {
            this.setState({
            marcas:resmarcas,
             loading:false
           })
           console.log(resmarcas)
         })

       }
       getModelos = () =>{
        this.setState ({ loading:true })
        fetch('http://leonardodavila-price-api.glitch.me/brands/:brand/models')
        .then(res =>res.json()) 
         .then( resmodelos => {
           this.setState({
             modelos:resmodelos,
             loading:false
           })
         })
       };
       getAnos = () =>{
        this.setState ({ loading:true })
        fetch('http://leonardodavila-price-api.glitch.me/brands/:brand/models/:model/years')
        .then(res =>res.json()) 
         .then( resanos => {
           this.setState({
             anos:resanos,
             loading:false
           })
         })
       };
     
  
 
  render(){
    var{marcas, modelos, anos,showresult}= this.state;
 
    
    return(
     
      <div className="Formulario">
           <Form className="select-form">
               <Row>
                   <Col xs={12} md={3}>
                    
                    <select className="form-control bg-primary" > 
                    {marcas.map(marcas =>{
                     return  <option key={marcas.id} >Marca:{marcas}</option>
                     showresult.push({marcas})
                     })}
                       </select>
                   </Col>


                   <Col xs={12} md={3}>
                  
                   <select className="form-control bg-primary" > 
                    {modelos.map(modelos =>{
                     return  <option key={modelos.id} >Modelo:{modelos}</option>
                     showresult.push({modelos})
                     })}
                       </select>
                      
                   </Col>
                   <Col xs={12} md={3}>
                  
                   <select className="form-control bg-primary" > 
                    {anos.map(anos =>{
                     return  <option key={anos.id} >Ano:{anos}</option>
                     showresult.push({anos })
                     })}
                       </select>
                      
                   </Col>
                   <Col xs={12} md={3}>
                    
                     <Form.Control as="select" className="form-control bg-primary">
                      <option>Estado:</option>
                      <option >Rio de Janeiro</option>
                      <option >São Paulo</option>
                     </Form.Control>
                     
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
                 <Card.Text>Descripção:
                  </Card.Text>
                  <ListGroup className="list-group-flush">
                      <ListGroupItem>Precio:</ListGroupItem>
                      {showresult.map(showresult =>{
                      return <ListGroupItem key={showresult.marcas} >Marca:{showresult}</ListGroupItem>})}
                       {showresult.map(showresult =>{
                         return <ListGroupItem key={showresult.modelos}>Modelo:{showresult}</ListGroupItem>})}
                         {showresult.map(showresult =>{
                            return    <ListGroupItem key={showresult.anos} >Ano:{showresult}</ListGroupItem>})}
                             
                         </ListGroup>
               </Card.Body>
             </Card>
             </div>
    
    );
                    }
                  }
                  


     
export default Preco;
