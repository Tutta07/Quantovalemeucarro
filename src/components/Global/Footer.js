import React,{Component} from 'react';
import logo from './imagenes/logo.jpg';
import './css/Footer.css';
import instagram from './imagenes/instagram-logo.png';
import linkedin from './imagenes/linkedin-logo.png';
import facebook from './imagenes/facebook-logo.png';
import whatsapp from './imagenes/whatsapp.jpg';

class Footer extends Component {
  render(){
    return(
     <div className="Container-Footer">
        
          <div className="Contact-Footer">
             <a className="linkedin" target="new" title="linkedin" href="https://www.linkedin.com/company/volanty/"><img src={linkedin}  width="40" height="40" alt="linkedin-logo"/></a>
             <a className="instagram" target="new" title="instagram" href="https://www.instagram.com/volanty_br/"><img src={instagram}  width="40" height="40" alt="instagram-logo"/></a>
             <a className="facebook" target="new" title="facebook" href="https://www.facebook.com/volantybr/"><img src={facebook}  width="40" height="40" alt="facebook-logo"/></a>
             <a className="volanty" target="new" title="volanty" href="https://volanty.com/"><img src={logo}  width="100" height="40" alt="volanty-logo"/></a>
             <a className="whatsapp" target="new" title="whatsapp" href="http://api.whatsapp.com/send?phone=+551140209731" target="_blank" rel="noopener noreferrer"><img src={whatsapp}  width="40" height="40" alt="whatsapp-logo"/></a>
          </div>
        <div className="Dereitos-Footer">
          <p>&copy; 2020 Quanto vale meu Carro| Desafio Volanty| Todos os dereitos reservados.</p> 
        </div>
     </div>
      

    );
  }

}
export default Footer;
