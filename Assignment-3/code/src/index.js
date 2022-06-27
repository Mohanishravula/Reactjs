import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const data={
  Name:'Mohanish Ravula',
  EmployeeID: 'B160822EE',
  Time:'09:30',
  date:'27-06-2022',
  Email:'RAVULAMOHANISH9064@GMAIL.COM',
  Phone:'+91-7013918981',
  Status:'In Progress',
  Door:'HANAMKONDA',
  Img:'https://www.w3schools.com/howto/img_avatar.png',
  time2:'18:00',
};


ReactDOM.render(
  <React.StrictMode>
    <App data={data} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
