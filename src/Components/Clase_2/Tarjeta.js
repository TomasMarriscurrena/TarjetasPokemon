import React from 'react';
import Boton2 from '@/Components/Clase_2/Boton2'




const Tarjeta = ({ destino }) => {

    // destructuro destino

    const { image, title, text,  beColor, tipo } = destino;


    return (
        <>
            <figure>
                <img src={image} alt="blabla" />
                <div>
                    <h2>{title}</h2>
                    <figcaption>{text}</figcaption>
                    <div className="spoiler">
                         <h3>Tipo:</h3>
                        < Boton2 tipo= {tipo}  beColor={ beColor}/>
                    </div>

                </div>
            </figure>


            <style jsx>{`
        figure {
            width: 250px; 
            heigh:100%;
            border: 2px solid black;
            background-color: black;
            border-radius: 50px;
        }

        img {
          margin: 2px;
          height:225px;

          width: 98%; 
          background-color: black;
          border-radius: 50px;

        }
        div {
        
            width: 90%; 
            margin: 0 auto;
            display: flex;
            flex-direction: column;
            align-items: center;
            color: white;
            background-color: black;
            border-radius: 50px;

        }
        h2 {
            text-align: center;
            font-size: 1.7rem;
            background-color: black;

        }
        figcaption{
            text-align: justify;
            margin-bottom: 0.5rem;
            background-color: black;


        }
        h3 {
            text-align: center;
            font-size: 1.5rem;
            background-color: black;
            

        }

        .spoiler {
            display: inline-flex;

            //no pude poner tipo al lado de spoiler 
        }


      `}</style>
        </>
    )
}

export default Tarjeta;
