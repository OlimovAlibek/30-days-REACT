import React from 'react';
const Word = (props) => {
 
 const wordStyle = {
 	display: 'inline-block',
 	marginLeft: '3px',
 	marginRight: '3px',

 }
  return (
      
      <div style={wordStyle} onClick={props.click}>
      <h3>
        {props.word}
      </h3>
     </div>
  )
}

export default Word;