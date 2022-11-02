import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header.js';
import "./index.css";
import Buttons from './Buttons.js';
import Body from './Body.js';
import Footer from './Footer.js';

function Main(){
  return (
    <div className='MainContent'>
      <Header/>
      <Buttons/>
      <Body/>
      <Footer/>
    </div>    
  )
}

ReactDOM.render(<Main/>, document.getElementById('root')
)