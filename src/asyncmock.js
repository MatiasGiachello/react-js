const misProducts = [
    { id: 1, Nombre: 'Mate Imperial Cuero', precio: 8700, img: './img/mateImperial-1.png', idCat:'2' },
    { id: 1, Nombre: 'Mate Imperial River', precio: 8700, img: './img/mateImperial-2.png', idCat:'2'},
    { id: 1, Nombre: 'Mate Imperial Boca', precio: 8700, img: './img/mateImperial-3.png', idCat:'3' },
    { id: 1, Nombre: 'Mate Imperial Ceramica', precio: 8700, img: './img/mateCeramica-png', idCat:'3'},
    { id: 1, Nombre: 'Mate Imperial Camionero', precio: 8700, img: './img/matecamionero-2png', idCat:'3'}

]

export const getProduct = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(misProducts);
        }, 2000)
    })

}


export const getUnProduct = (id) => {
    return new Promise (resolve => {
        setTimeout (() => {
            const product = misProducts.find(prod=>prod.id === id);
            resolve(product);
        }, 2000)
    })
}


export const getProductEnCatergories = (idCategory) => {
    return new Promise (resolve =>{
        setTimeout(() =>{
            const ProductCategories = misProducts.filter(prod => prod.idCat ===idCategory);
            resolve(ProductCategories);
        }, 2000)
    })
}