import '../styles/calculatingprice.scss';
import React from 'react';


function Calculating() {
    const homeType = ['Вторичное жильё','Новостройка','Офис',];
    const roomCount = ['1','2','3+', 'Студия',];

    const inputRef = React.useRef();
    const [roomSqauare, setRoomSquare] = React.useState(90);
    const [selectHomeType, setSelectHomeType] = React.useState();
    const [selectRoomCount, setSelectRoomCount] = React.useState();

    const onSquareChange = (curr) =>{
        setRoomSquare(curr.value);
        curr.style.backgroundPosition = `${140 - curr.value}% 0%`;
    }

    const onHomeTypeChange = (ind) =>{
        if (ind === selectHomeType) setSelectHomeType(undefined);
        else setSelectHomeType(ind);
    }

    const onRoomCountChange = (ind) =>{
        if (ind === selectRoomCount) setSelectRoomCount(undefined);
        else setSelectRoomCount(ind);

    }

    return (
      <div className="pricecalculation">
        <span>Рассчитайте стоимость ремонта</span>
        <span>ПЛОЩАДЬ КВАРТИРЫ:</span>
        <span className="quadmeters">{roomSqauare}м²</span>
        <div className="filters">
            <input ref={inputRef} type="range" min="40" max="140" step="1" value={roomSqauare} onChange={() => onSquareChange(inputRef.current)}/>
        </div>
        <span>ТИП ЖИЛЬЯ:</span>
        <div className="filters">
            {homeType.map( (type, i) => 
                <div className="filter">
                    <div onClick={() => onHomeTypeChange(i)} className={ i === selectHomeType ? 'selectimg  selected' : 'selectimg'}></div>
                    <div>{type}</div>
                </div>
                )
            }
        </div>
        <span>КОЛ-ВО КОМНАТ:</span>
        <div className="filters">
        {roomCount.map( (type, i) => 
                <div className="filter">
                    <div onClick={() => onRoomCountChange(i)} className={ i === selectRoomCount ? 'selectimg  selected' : 'selectimg'}></div>
                    <div>{type}</div>
                </div>
                )
            }
        </div>
        <div className='sendbutton'>
            ОТПРАВИТЬ
        </div>
      </div>
    );
  }
  
  export default Calculating;