const products = [
    { 
        id: 1,
        name: 'Pantalón liso',
        price: 1000,
        category: 'pantalones',
        img: 'https://m.media-amazon.com/images/I/610NV8p9tHL.jpg',
        stock: 10,
        description: 'liso sin estampados'
    },
    { 
        id: 2,
        name: 'Pantalón con rayas',
        price: 1500,
        category: 'pantalones',
        img: 'https://i.pinimg.com/236x/e0/ef/0b/e0ef0b673255f9069bed0cc47d2748f8.jpg',
        stock: 10,
        description: 'rayado, negro y blanco'
    },
    { 
        id: 3,
        name: 'Pantalón con flores',
        price: 1500,
        category: 'pantalones',
        img: 'https://i.pinimg.com/236x/58/e8/c9/58e8c9dfc891206044f601c31ff1a3a5.jpg',
        stock: 10,
        description: 'Pantalón floreado'
    },
    { 
        id: 4,
        name: 'Pollera sweet',
        price: 1500,
        category: 'polleras',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1-8adcZs1osoAPE2b6KVdPvE8d96Lqth1-G8mQ8-Ffg&s',
        stock: 10,
        description: 'Pollera sweet estilo romántico'
    },
    { 
        id: 5,
        name: 'Pollera lisa',
        price: 1500,
        category: 'polleras',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEXSLlasxHSzCSoLjqadL8aYm2qsMoVcnGrVACo3OK&s',
        stock: 10,
        description: 'Pollera Lisa'
    },
    { 
        id: 6,
        name: 'flores',
        price: 1500,
        category: 'polleras',
        img: 'https://i.pinimg.com/originals/44/08/28/44082826a6848424ed4459e173bddaa5.jpg',
        stock: 10,
        description: 'floreado'
    },
    { 
        id: 7,
        name: 'Remera con flores',
        price: 1500,
        category: 'remeras',
        img: 'https://http2.mlstatic.com/D_NQ_NP_887196-MLA43928691148_102020-O.webp',
        stock: 10,
        description: 'fRemera floreada'
    },
    { 
        id: 8,
        name: 'Remera a rayas',
        price: 1500,
        category: 'remeras',
        img: 'https://i.pinimg.com/550x/b0/aa/7d/b0aa7d867d8cefdf6c28326c5310e3dd.jpg',
        stock: 10,
        description: 'fRemera Rayada'
    },
    { 
        id: 9,
        name: 'Remera lisa',
        price: 1500,
        category: 'remeras',
        img: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/160/193/products/remera-mujer-lisa-modelo-margarita-color-crudo11-056d8c2d48b20be5ad16957878438551-1024-1024.jpg',
        stock: 10,
        description: 'fRemera Lisa'
    },
]

export const getProducts = () => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}



export const getProductById = (productId) => {

    return new Promise((resolve) => {

        setTimeout(() => {

            const foundProduct = products.find(prod => prod.id == productId.itemId);

            if (foundProduct) {

                console.log('Product found:', foundProduct);

                resolve(foundProduct);

            } else {

                console.log('Product not found with ID:', productId);

                resolve(null); // You can resolve with null or any other indication of failure

            }

        }, 500);

    });

};


// export const getProductBycategory = (productId) => {
//     return new Promise ((resolve) => {
//         setTimeout (() => {
//         resolve(products.find(prod => prod.id === productId))
//     }, 500) 
// })
// } 

// AsyncMock.js

// AsyncMock.js
export const getProductBycategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const filteredProducts = products.filter(prod => prod.category === categoryId);
            resolve(filteredProducts);
        }, 500);
    });
};
