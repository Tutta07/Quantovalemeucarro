
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
      version:[],
      carros:[],
      showresult:[],
      loading:false
    
    }
    this.myrefmarca=React.createRef();
    this.myrefano=React.createRef();
    this.myrefmodelo=React.createRef();
    this.myrefversion=React.createRef();

  }

  componentDidMount(){
       this.getMarcas();
       this.getModelos();
       this.getAnos();
       this.getVersion();
       this.getCarros(); 
       }

       getMarcas = () => {
        this.setState ({ loading:true })
         fetch('https://volanty-price-api.herokuapp.com/brands')
         .then(res =>res.json()) 
         .then( resmarcas => {
            this.setState({
            marcas:resmarcas,
             loading:false,
           })
           console.log(resmarcas)
         }) 

       }
       getModelos = () =>{
        this.setState ({ loading:true })
        var marca=this.myrefmarca.current;
        //var marca=this.marcas.current;
        fetch('https://volanty-price-api.herokuapp.com/brands/' + marca +'/models')
        .then(res =>res.json()) 
         .then( resmodelos => {
           this.setState({
             modelos:resmodelos,
             loading:false
           })
           console.log(resmodelos)
         })
        
       };
       getAnos = () =>{
        this.setState ({ loading:true })
        var marca=this.myrefmarca.current;
        var modelo=this.myrefmodelo.current;
        fetch('http://volanty-price-api.herokuapp.com/brands/'+ marca +'/models/'+modelo+'/years')
        .then(res =>res.json()) 
         .then( resanos => {
           this.setState({
             anos:resanos,
             loading:false
           })
           console.log(resanos)
         })
       };
       getVersion = () =>{
        this.setState ({ loading:true })
        var marca=this.myrefmarca.current;
        var modelo=this.myrefmodelo.current;
        var ano=this.myrefano.current;
        fetch('http://volanty-price-api.herokuapp.com/brands/'+ marca +'/models/'+modelo+'/years/' + ano +'/versions')
        .then(res =>res.json()) 
         .then( resversion => {
           this.setState({
             version:resversion,
             loading:false
           })
           console.log(resversion)
         })
       };
       getCarros = () =>{//ta com erro no fetch pelo json
        this.setState ({ loading:true })
        var marca=this.myrefmarca.current;
        var modelo=this.myrefmodelo.current;
        var ano=this.myrefano.current;
        var version=this.myrefversion;
        fetch('http://volanty-price-api.herokuapp.com/brands/'+ marca +'/models/'+ modelo +'/years/' + ano +'/versions/' + version)
        .then(res =>res.json()) 
         .then( rescarro => {
           this.setState({
             carros:rescarro,
             loading:false
           })
           console.log(rescarro)
         })
       };
     
  
 
  render(){
    var{marcas, modelos, anos,version, carros}= this.state;
    return(
     
      <div className="Formulario">
           <Form className="select-form">
               <Row>
                   <Col xs={12} md={3}>
                    
                    <select className="form-control bg-primary" id="marcas" onChange={this.getModelos}> 
                    {marcas.map((marca) =>{
                      return <option key={marca}  ref={this.myrefmarca}>Marca: {marca}</option>
                  
                     })}
                       </select>
                   </Col>
                   <Col xs={12} md={3}>         
                   <select className="form-control bg-primary" id="modelos" onChange={this.getAnos}> 
                    {modelos.map(modelos =>{
                     return  <option key={modelos} ref={this.myrefmodelo}>Modelo: {modelos}</option>
                   
                     })}
                       </select>
                      
                   </Col>
                   <Col xs={12} md={3}>
                  
                   <select className="form-control bg-primary" id="anos" onChange={this.getVersion}> 
                    {anos.map(anos =>{
                     return  <option key={anos} ref={this.myrefano}>Ano: {anos}</option>
                  
                     })}
                       </select>
                      
                   </Col>
                   <Col xs={12} md={3}>
                  
                   <select className="form-control bg-primary" id="version" onChange={this.getCarros}> 
                    {version.map(version =>{
                     return  <option key={version} ref={this.myrefversion}>Version: {version}</option>
                  
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
             <Button className="calcular mt-3" type="submit">Calcular Preço</Button>
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
                      {carros.map(carro =>{
                      return <ListGroupItem key={carro.marcas} >Marca:{carro.marcas}</ListGroupItem>})}
                       {carros.map(carro =>{
                         return <ListGroupItem key={carro.modelos}>Modelo:{carro.modelos}</ListGroupItem>})}
                         {carros.map(carro =>{
                            return    <ListGroupItem key={carro.anos} >Ano:{carro.anos}</ListGroupItem>})}
                            {carros.map(carro =>{
                            return    <ListGroupItem key={carro.preco} >Preço:{carro.preco}</ListGroupItem>})}
                             
                             
                         </ListGroup>
               </Card.Body>
             </Card>
             </div>
    
    );
                    }
                  }
                  


     
export default Preco;
