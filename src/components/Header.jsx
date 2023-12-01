import React from 'react';
import logo from '../images/phoneLogo.svg'

function Header() {
  const menuElements = ['УСЛУГИ','СТАТЬИ','ВАКАНСИИ','ФРАНШИЗА',];
  const [isPopUp, setPopUp] = React.useState(false);
  const changePopUp = () => {
    setPopUp(!isPopUp);
  }
    return (
      <div className="headercontainer">
        <img src={logo}></img>
        <div className='menucontsiner'>
            <div onClick={changePopUp} className= {isPopUp ? 'menuicon opened' : 'menuicon'} ></div>
            {isPopUp && <ul className='menupopup'>
              {menuElements.map( elem => 
                <li>{elem}</li>
              )}
            </ul>}
        </div>
        <ul>
            <li>МЕНЮ</li>
            <li>ПОРТФОЛИО</li>
            <li>ЦЕНЫ</li>
            <li>СХЕМА РАБОТЫ</li>
            <li>ОТЗЫВЫ</li>
            <li>КОНТАКТЫ</li>
            <li>ГАРАНТИЯ</li>
        </ul>
        <div className="callbutton">
          ОБРАТНЫЙ ЗВОНОК
        </div>
      </div>
    );
  }
  
  export default Header;