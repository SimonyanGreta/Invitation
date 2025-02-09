import React, {useEffect, useState} from "react";
import "./App.css";
import ring from './assets/ring.png';
import flowers from './assets/flowers.jpg';
import place from './assets/place.jpeg';

const App: React.FC = () => {
  const targetDate = new Date("2025-05-15T00:00:00");

  const calculateTimeLeft = () => {
    const difference = targetDate - new Date();
    if (difference <= 0) return null;

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    if (!timeLeft) return;

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  return (
    <div className="app-body">
      <div className="container">
        {
          !timeLeft ? <h1>Время вышло!</h1> : (<>
            <h1>
              Осталось:<br/>
            </h1>
            <h2>
              {timeLeft.days} дней {timeLeft.hours} часов{" "}
              {timeLeft.minutes} минут {timeLeft.seconds} секунд
            </h2>
          </>
          )
        }
        <div className="pic-container">
          <img className="place-image" style={{borderRadius: '50%'}} src={flowers}/>
          <h2 className="subtitle">Грета и Игорь</h2>
        </div>


        <div className="greetings">
          <h3 className="section-title">Дорогие гости!</h3>
          <p style={{ fontSize: '20px' }}>
            В нашей жизни предстоят счастливые перемены!<br/>
            Мы хотим, чтобы в этот день рядом с нами были самые близкие и дорогие для нас люди.
            Будем рады разделить с вами чудесный праздник.
          </p>
        </div>

        <div className="section">
          <h4 className="section-title">15 мая 2025 года</h4>
          {/*<p className="section-text">15 мая 2025 года</p>*/}
        </div>

        <div className="pic-container">
          <img className="place-image" src={ring} style={{borderRadius: '55px 4px 55px 4px'}}/>
        </div>

        <div className="section">
          <h3 className="section-title">Программа дня</h3>
          <div className="program-list">
            <p className="section-text">
              Сбор в 16:00
            </p>
            <p className="section-text">
              Загс в 17:00
            </p>
            <p className="section-text">
              Банкет в 18:00
            </p>
            <p className="section-text">
              Завершение в 22:00
            </p>
          </div>
        </div>

        <div className="section">
          <h3 className="section-title">Место проведения</h3>
          <p className="section-text">Ресторан "Сказка", ул. Цветочная, 10</p>
          <img className="place-image" src={place} alt="Место проведения"/>
        </div>

        <div className="section">
          <h3 className="section-title">Как добраться</h3>
          <p className="section-text">
            Для удобства оставляем координаты
          </p>
          {/*yandex map*/}
        </div>

        <a href="#" className="rsvp-button">Перейдите для навигации</a>
      </div>
    </div>
  );
};

export default App;