import '../styles/footer.scss';
import React from 'react';
import {Link} from 'react-router-dom';



function Calculating() {

    return (
      <div className="footercontainer">
        <Link style={{ textDecoration: 'none' }} to='/php'><span className="link">Ссылка на страницу с PHP</span></Link>
        <span className="link">Ссылка на архив с версткой</span>
      </div>
    );
  }
  
  export default Calculating;