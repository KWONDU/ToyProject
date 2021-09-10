import React, { useEffect, useState } from 'react';
import './App.css';
import data from './data';
import FAQ from './FAQ';

function App() {
  const [itemLength, setItemLength] = useState(0);
  const [showText, setShowText] = useState<boolean[]>([]);

  useEffect(() => {
    let len: number = 0;
    data.map(() => len++);
    setItemLength(len);
    setShowText(Array<boolean>(len).fill(false));
  }, []);

  const onClickIcon = (idx: number) => {
    setShowText([
      ...Array<boolean>(itemLength).fill(false).slice(0, idx),
      !showText[idx],
      ...Array<boolean>(itemLength).fill(false).slice(idx + 1)
    ]);
  }

  return (
    <div className='white_box'>
      <div className='grid'>
        <div className='image'>
          <div className='box'><img src='./images/illustration-box-desktop.svg' alt=''></img></div>
        </div>
        <div className='image'>
          <div className='woman'><img src='./images/illustration-woman-online-desktop.svg' alt=''></img></div>
        </div>
      </div><div className='grid'>
        <p className='logo'>FAQ</p>
        {data.map((unit, idx) => 
          <FAQ key={idx} unit={unit} onClick={onClickIcon} chk={showText[unit.id]} />
        )}
      </div>
    </div>
  );
}

export default App;