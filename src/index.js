import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Header from './Header';
import Body from './Body';
import Footer from './Footer';
import Content from './Content';
import reportWebVitals from './reportWebVitals';



function Main(){
  return(
    <>
      <App />
      <Header />
      <Body />
      <Footer />
    </>
  )
}
ReactDOM.render(<Main />, document.getElementById("root"))

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
