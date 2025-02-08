import React from "react";
import "./App.css";
import table from './assets/table.jpeg';
import place from './assets/place.jpeg';

const App: React.FC = () => {
  return (
    <div className="app-body">
      <div className="container">
        <div className="pic-container">
          <img className="place-image" src={table}/>
          <h2 className="subtitle">Анна и Михаил</h2>
        </div>
        <p className="greetings">
          Дорогие гости! <br/> В нашей жизни предстоят счастливые перемены!
          Мы хотим, чтобы в этот день рядом с нами были самые близкие и дорогие для нас люди.
          Будем рады разделить с вами чудесный праздник.
        </p>

        <div className="section">
          <h3 className="section-title">Дата и время</h3>
          <p className="section-text">15 мая 2025 года</p>
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
          <img className="place-image" src={place} alt="Место проведения" />
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