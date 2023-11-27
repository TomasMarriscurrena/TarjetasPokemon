import React from 'react'
import Tarjeta from "@/Components/Clase_2/Tarjeta";

const destinos = [
    {
        image:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png",
        title: "Pikachu",
        text:"El simpático Pokémon eléctrico, ilumina con su carisma y rayos a todos los fanáticos.",
        beColor: "yellow",
        tipo:"Eléctrico",
    },
    {
        image: "https://images.wikidexcdn.net/mwuploads/wikidex/8/8c/Bulbasaur_en_la_primera_generaci%C3%B3n.png",
        title: "Bulbasaure",
        text: "Con su bulbo en la espalda, crece en fortaleza y esencialidad en cada batalla.",
        beColor: "green",
        tipo:"Planta",
    },
    {
        image: "https://images.wikidexcdn.net/mwuploads/wikidex/thumb/5/56/latest/20200307023245/Charmander.png/200px-Charmander.png",
        title: "Charmander",
        text:"Con su llama en la cola, enciende pasiones y desafíos en cada aventura Pokémon.",
        beColor:"red",
        tipo:"Fuego",
    },
    {
        image:"https://images.wikidexcdn.net/mwuploads/wikidex/thumb/e/e3/latest/20160309230820/Squirtle.png/200px-Squirtle.png",
        title: "Squirtle",
        text: "Desata su energía acuática con valentía y determinación en combate.",
        beColor:"blue",
        tipo:"Agua",
    }
    
]

const ListaDeTarjetas = () => {
    return (
        <>
            <div className="container" >
               <div className="cards-list">
               {
                    destinos.map((destino, index) => <Tarjeta key={index} destino={destino}/>)
                }
               </div> 
            </div>


            <style jsx>{`

           

            .cards-list {
                display: grid;
                grid-template-columns: repeat(4,1fr);
                width: 70%;
                marign: 0;
            }

            @media screen and (max-width: 1024px){
                .cards-list{
                    grid-template-columns: repeat(2,1fr)
                }
            }
            @media screen and (max-width: 581px){
                .cards-list{
                    grid-template-columns: repeat(1,1fr)
                } 
            }
       
      `}</style>
        </>
    )
}

export default ListaDeTarjetas
