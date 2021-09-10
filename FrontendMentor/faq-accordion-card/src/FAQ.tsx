import React from 'react';

interface Props {
  unit: {
    id: number;
    title: string;
    content: string;
  };
  onClick: (idx: number) => void;
  chk: boolean;
}

function FAQ (props: Props) {
  const { unit, onClick, chk } = props;

  return (
    <>
      <p className={chk ? 'title bold' : 'title'} onClick={() => onClick(unit.id)} >{unit.title}</p><input
        type='image'
        src='./images/icon-arrow-down.svg'
        alt=''
        className={chk ? 'reverse' : ''}
        onClick={() => onClick(unit.id)}></input>
      {chk ? <p className='content'>{unit.content}</p> : null}
      <hr></hr>
    </>
  );
}

export default FAQ;