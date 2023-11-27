
import React from 'react';
import { useState } from 'react';




const Boton2 = ({tipo,  beColor}) => {

  const[visible, setvisible] = useState (false)

  
  return (
    <>
      <button onClick={()=> setvisible(true)}>Spoiler!!</button>
      {
        visible 
          ? (
            <h2>{tipo}</h2>
          )
          :
          null
      }
      <style jsx>{`
        button {
          background-color: rgb(236, 161, 161);
          color: ${beColor};
          font-weight: bold;
          border-radius: 10px;
          padding: 1px 20px;
          font-size: 1.6rem;

        }
        button:hover {
          background-color: white;
          color: red;
      }

      h2{
        background-color:black;
        color: ${beColor};

      }
      
      `}</style>
    </>
  );
};

export default Boton2;