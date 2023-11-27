import React from 'react'

const Boton = () => {


    return (
        <>
            {/*CSSStyleDeclaration*/}
            < button
                style= {estilos}
            > Comprar </button>
            < button
                style= {estilos}
            > Comprar </button>
        </>

    );
};

export default Boton


// Estilos del component se pueden poner abajo com const para no estorbar


const estilos = {
    backgroundColor: "green",
    color: "#ffffff",
    fontSize: "16px",
    padding: "10px 20px",
    borderRadius: "5px",
    border: "none",
    cursor: "pointer",
}