import React from 'react';
const Trash = (props) => {


   return(

     <div draggable //and HTML5 attribute that allows an element to become draggable
     className="trash"
     onDragStart={props.onDragStart}>
     <p>{props.name}</p>
     </div>
   )
}
export default Trash