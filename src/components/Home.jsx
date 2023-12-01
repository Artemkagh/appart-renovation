import photo from '../images/Rectangle.png'
import CarLogo from '../images/Car.svg'
import MedalLogol from '../images/Medal.svg'
import TimeLogo from '../images/Time.svg'
import Calculating from './Calculating';
import Footer from "./Footer";

function Home() {
    const handleScroll = () => {
        window.scrollBy({
            top: 30,
            behavior: 'smooth'
        });
    }
    return (
      <div className="contentcontainer">
        <img className="mainphoto" src={photo}></img>
        <div className="textcontainer">
            <p>Ремонт под ключ от 2900 руб/м².</p>
            <p>При заказе ремонта делаем дизайн-проект в подарок</p>
            <div className="line"></div>
            <div className="terms">
                <div className="term">
                    <img src={CarLogo}></img>
                    <span>Бесплатный выезд в день обращения</span>
                </div>
                <div className="term">
                    <img src={MedalLogol}></img>
                    <span>Гарантия на работу до 5 лет </span>
                </div>
                <div className="term">
                    <img src={TimeLogo}></img>
                    <span>Жесткое соблюдение сроков</span>
                </div>
            </div>
            <Calculating />
        </div>
        <div className='scrollcontainer'>
            <div onClick={handleScroll} className='scrollbtn'></div>
            <span>SCROLL</span>
        </div>
        <Footer />
      </div>
    );
  }
  
  export default Home;