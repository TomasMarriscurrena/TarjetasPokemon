import React from 'react'
import ListaDeTarjetas from "@/Components/Clase_2/ListaDeTarjetas";

const Seccion = () => {
    return (
        <>
            <div className="seccion-container">
            <h2> Principales Pokemones de la Saga </h2>
            <p>
Pokémon, la icónica franquicia japonesa, fue creada por Satoshi Tajiri en 1996. Se centra en criaturas llamadas Pokémon, que los entrenadores capturan y entrenan para enfrentarse en batallas. Con videojuegos, series animadas, películas y una amplia gama de productos, Pokémon se ha convertido en un fenómeno global. Con más de 800 especies de Pokémon y una narrativa que fomenta la amistad, aventuras y descubrimientos, la saga ha dejado una marca indeleble en la cultura popular. Desde Pikachu, la mascota emblemática, hasta regiones variadas y juegos innovadores, Pokémon continúa capturando los corazones de fanáticos de todas las edades en todo el mundo.</p>
            < ListaDeTarjetas />
            </div>

            <style jsx>{`


            .seccion-container{
                display: flex;
        flex-direction: column;
        align-items: center;
        margin: 0;
            }
            h2{
                text-align: center
            }
            p{ 
                text-align: center
            }

            `}</style>
        </>


    )
}

export default Seccion
