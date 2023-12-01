import '../styles/index.scss';
import React from 'react';
import {Link} from 'react-router-dom';



function PartPHP() {
    return (
      <div >
        <Link style={{ textDecoration: 'none' }} to='/'><span >Ссылка на главную</span></Link>
        
      </div>
    );
  }
  
  export default PartPHP;


  