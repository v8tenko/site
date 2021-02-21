import './App.css';
import {Button} from "react-bootstrap";
import React from "react";

function App() {
  return (
    <div className="App">
      <div className="center">
        <div className="buttons-top">
          <button id="load" className="btn btn-primary ml-3 mt-3"> Загрузить файл </button>
          <button id="download" className="btn btn-success ml-3 mt-3"> Скачать полученное расписание</button>
        </div>
        <div className="content">

        </div>
      </div>
    </div>
  );
}

export default App;
