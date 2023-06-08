import { useState } from "react";

//HOOK "useState"

const ItemCount = () => {
    const [contador, setContador] = useState(1)
    //useState me retorna un array con 2 elementos, el primero es el esatdo actual 
    //y el segunddo es uan funcion que me actualiza ese estado.

    const incrementar = () => {
        if (contador < 10) {
            setContador(contador + 1);
        }

    }

    const decrementar = () => {
        if (contador > 1) {
            setContador(contador - 1);
        }

    }


    return (
        <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
            <button onClick={decrementar}> - </button>
            <p> {contador} </p>
            <button onClick={incrementar}> + </button>

        </div>
    )
}



export default ItemCount