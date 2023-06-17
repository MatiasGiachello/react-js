import { useState, useEffect } from "react";
import React from "react";




const ItemListContainer = () => {

  const [data, setData] = useState([])

  const API = './data.json';

  useEffect(() => {
    //DATOS
    fetch(API)
      .then(res => res.json())
      .then(response => setData(response) )
  }, [])

  console.log(data)



  return (
    <div style={{ fontSize: '40px', textAlign: 'center', marginTop: '200px' }}>

      {
        data.map((prod)=>(
          <div key={prod.id}>
            <h2>{prod.title}</h2>
            <p>{prod.price}</p>
            <img src={prod.img} alt="Imagen de Mates " />
          </div>
        ))
      }




    </div>

  )
}

export default ItemListContainer

