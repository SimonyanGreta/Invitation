import React from "react";
import "./App.css";

const App: React.FC = () => {
  return (
    <div className="app-body">
      <div className="container">
        <h1 className="title">Приглашаем на свадьбу</h1>
        <h2 className="subtitle">Анна и Михаил</h2>

        <div className="section">
          <h3 className="section-title">Дата и время</h3>
          <p className="section-text">
            <i className="fas fa-calendar-alt icon" /> 15 мая 2025 года, в 16:00
          </p>
        </div>

        <div className="section">
          <h3 className="section-title">Место проведения</h3>
          <p className="section-text">
            <i className="fas fa-map-marker-alt icon" /> Ресторан "Сказка", ул. Цветочная, 10
          </p>
        </div>

        <a href="#" className="rsvp-button">Перейдите для навигации</a>
      </div>
    </div>
  );
};

export default App;