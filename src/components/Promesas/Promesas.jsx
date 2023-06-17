import React from 'react'

const Promesas = () => {
    console.log("mate 1");
    console.log("mate 2");

    setTimeout(() => {
        console.log("mate 1");
    }, 2000)

    setTimeout(() => {
        console.log("mate 2");
    }, 3000)


    const mateImperial1 = () => {
        return new Promise((resolve, reject) => {
            if (estado) {
                resolve("mate recibido con exito");
            } else {
                reject("mate no recibido con exito");
            }
        })
    }
    console.log(mateImperial1(true));
    ///Catch y Then 

    mateImperial1(true)
        .then(respuesta => console.log("El mate es todo un exito!!", respuesta))
        .catch(error => console.log("No salio como esperaba", error))



    const array = ["mateImperial1", "mateImperial2", "mateImperial3"]
    const solicitarMates = () =>{
        return new Promise((resolve, reject) => {
            if(estado){
                resolve(array)
            } else{
                reject("no se encutra ese mate!")
            }
        })
    }
    solicitarMates(true)
    .then(respuesta =>{
        console.table(respuesta);
    })



    return (
        <div>Promesas</div>
    )
}


export default Promesas