import React,{Component} from 'react';
import './css/Acesso.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button,Form,FormGroup,Label,Input} from 'reactstrap';
import {FacebookLoginButton} from 'react-social-login-buttons';


class Acesso extends Component {
  render(){
    return(
      
     <Form className="login-form ">
       
         <h2 className="text-center">Bem Vindo</h2>
         <FormGroup>
             <Label>Email</Label>
             <Input type="email" placeholder="Email"/>
         </FormGroup>
         <FormGroup>
             <Label>Senha</Label>
             <Input type="senha" placeholder="Senha"/>
         </FormGroup>
         <Button className="btn-lg btn-primary btn-block bg-primary">Acessar</Button>
         <div className="text-center pt-3">Acesse com seu Facebook</div>
         <FacebookLoginButton className='mt-3 mb-3'/>
         <div className="text-center">
             <a href="/sign-up">Sign up</a>
             <span className="p-2">|</span>
             <a href="/forgot-password">Forgot Password</a>
             </div>
      </Form>

    );
  }

}
export default Acesso;