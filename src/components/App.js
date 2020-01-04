
import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import{Switch,Route} from 'react-router-dom';



//Components
import Header from './Global/Header';
import Slider from './Global/Slider';
import Footer from './Global/Footer';
import Preco from './Global/Preco';
import Acesso from './Global/Acesso';




class App extends Component{
  render(){
    return(
      <div className="App">
        <div className="container-fluid ">
          <Header />
          <Slider />
          <Switch>
              <Route path="/acesso" component ={Acesso}/>
              <Route path="/preco" component ={Preco}/>
            </Switch>
            
          
          <Footer />
        </div>
        </div>
    );
  }
}
        
     
       
export default App;
