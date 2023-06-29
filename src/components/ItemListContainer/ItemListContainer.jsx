

import { useState, useEffect } from "react";
import { getProduct, getProductEnCatergories } from "../../asyncmock";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = (props) => {
  const [product, setproduct] = useState([]);

  const { idCategoria } = useParams();

  useEffect(() => {
    const funcion = idCategoria ? getProductEnCatergories : getProduct;

    funcion(idCategoria)
      .then(res => setproduct(res))

  }, [idCategoria])

  return (
    <>
      <h2> {props.greeting} </h2>
      <ItemList products={product} />
    </>
  )
}

export default ItemListContainer

















// const ItemListContainer = () => {

//   const [data, setData] = useState([])

//   const API = './data.json';

//   useEffect(() => {
//     //DATOS
//     fetch(API)
//       .then(res => res.json())
//       .then(response => setData(response) )
//   }, [])

//   console.log(data)



//   return (
//     <div style={{ fontSize: '40px', textAlign: 'center', marginTop: '200px' }}>

//       {
//         data.map((prod)=>(
//           <div key={prod.id}>
//             <h2>{prod.title}</h2>
//             <p>{prod.price}</p>
//             <img src={prod.img} alt="Imagen de Mates " />
//           </div>
//         ))
//       }




//     </div>

//   )
// }

// export default ItemListContainer

// // const ItemListContainer = (props) => {
// //   const [products, setProducts] = useState
// // }