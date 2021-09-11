import React, { useState } from 'react';
import data from './data';
import './App.css';

function App() {
  const [stateActive, setStateActive] = useState(false);
  const shareActive = () => {
    setStateActive(!stateActive);
  }

  return (
    <>
      <div className='container'>
        <div><img src='./images/drawers.jpg' alt=''></img></div>
        <div>
          <p className='title'>{data.title}</p>
          <p className='content'>{data.content}</p>
          <div className='photo'><img src='./images/avatar-michelle.jpg' alt=''></img></div>
          <div className='profile'>
            <p>{data.name}</p>
            <p>{data.date}</p>
          </div>
          <div className={stateActive ? 'share invert' : 'share'} onClick={shareActive} >
            <img className={stateActive ? 'invert' : ''} src='./images/icon-share.svg' alt=''></img>
          </div>
          {stateActive ?
            <div className='pop-up'>
              <p>{data.share}</p>
              <div><img src='./images/icon-facebook.svg' alt=''></img></div>
              <div><img src='./images/icon-twitter.svg' alt=''></img></div>
              <div><img src='./images/icon-pinterest.svg' alt=''></img></div>
            </div>
            : null}
        </div>
      </div>
    </>
  );
}

export default App;
