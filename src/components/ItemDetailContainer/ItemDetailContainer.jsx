import { useState, useEffect } from "react"
import { getUnProduct } from "../../asyncmock"
import ItemDetail from "../ItemDetail/ItemDetail.jsx"
import { useParams } from "react-router-dom"


const ItemDetailContainer = () => {
    const [product, setproduct] = useState(null);
    const { idItem } = useParams();

    useEffect(() => {
        getUnProduct(idItem)
            .then(res => setproduct(res))
    }, [idItem])





    return (
        <div>
            <itemDetail {...product} />
        </div>
    )
}

export default ItemDetailContainer