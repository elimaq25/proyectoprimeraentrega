const express = require('express');
const productsRouter = require('./routes/productRouter');
const cartRouter = require('./routes/cartRouter');

const cors = require("cors");

// const { Router } = express;

const app = express();
const PORT = process.env.PORT || 8080;
// const router = Router();




// server.on('error', (error) => console.log(`Error en el servidor ${error}`));

app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(cors());

app.use('/api/carrito', cartRouter);
app.use('/api/productos', productsRouter.productsRouter);

const isAdmin = require('./routes/productRouter')

app.get('/', (req, res) => {
    res.json(isAdmin);
});

app.all('*', (req, res) => {
    res.send('Ruta no encontrada')
    });


const server = app.listen(PORT, () => {
    console.log(`Servidor http escuchando en el puerto ${server.address().port}`);
} );
// app.use('/public', express.static(__dirname + '/public'));

// app.use('/api/products', router);



// let productsHC = [
//     { id: 1, nombre: 'Cristal', price: 350, stock:10, codigo: 258, thumbnail: 'http://localhost:8080/public/1.jpg' },
//     { id: 2, nombre: 'Flor', price: 550, stock:10, codigo: 259, thumbnail: 'http://localhost:8080/public/2.jpg' },
//     { id: 3, nombre: 'Corazón', price: 450, stock:10, codigo: 260, thumbnail: 'http://localhost:8080/public/3.jpg' },
//     { id: 4, nombre: 'Aros', price: 700, stock:10, codigo: 261, thumbnail: 'http://localhost:8080/public/4.jpg' },
//     { id: 5, nombre: 'Copo', price: 350, stock:10, codigo: 262, thumbnail: 'http://localhost:8080/public/5.jpg' },
//     { id: 6, nombre: 'Diamante', price: 550, stock:10, codigo: 263, thumbnail: 'http://localhost:8080/public/6.jpg' },
//     { id: 7, nombre: 'Corazón con libelula', stock:10, codigo: 264, price: 350, thumbnail: 'http://localhost:8080/public/7.jpg' },
//     { id: 8, nombre: 'Hacha', price: 400, stock:10, codigo: 265, thumbnail: 'http://localhost:8080/public/8.jpg' },
//     { id: 9, nombre: 'Night', price: 450, stock:10, codigo: 266, thumbnail: 'http://localhost:8080/public/9.jpg' },
//     { id: 10, nombre: 'Perla', price: 650, stock:10, codigo: 267 , thumbnail: 'http://localhost:8080/public/10.jpg' },
// ]

// class Products {
//     constructor(products) {
//         this.products = [...products];
//     }
//     getAll() {
//         return this.products;
//     }
//     findOne(id) {
//         return this.products.find((item) => item.id == id);
//     }
//     addOne(product) {
//         const lastItem = this.products[this.products.length - 1];
//         let lastId = 1;
//         if (lastItem) {
//             lastId = lastItem.id + 1;
//         }
//         product.id = lastId;
//         this.products.push(product);
//         return this.products[this.products.length -1];
//     }
//     updateOne(id, product) {
//         const productToInsert = { ...product, id};

//         for (let i = 0; i < globalThis.product.length; i++) {
//             if (this.products[i].id == id) {
//                 this.products[i] = productToInsert;
//                 return productToInsert;
//             }
//         }
//         return undefined;
//     }
//     deleteOne(id) {
//         const foundProduct = this.findOne(id);
//         if (foundProduct) {
//             this.products = this.products.filter((item) => item.id != id);
//             return id;
//         }
//     }


// }


// router.delete('/:id', (req, res) => {
//     let { id } = req.params;
//     const products = new Products(productsHC); 
//     id = parseInt(id); 

//     const deletedProduct = products.deleteOne(id); 
//     console.log(products.getAll());
//     if (deletedProduct) {
//         res.json({ success: 'ok', id})
//     } else {
//         res.json({ error: 'producto no encontrado'}); 
//     }
// }); 

// router.put('/:id', (req, res) => {
//     let { id } = req.params;
//     const { body } = req;
//     id = parseInt(id);

//     const products = new Products(productsHC); 
//     const changedProduct = products.updateOne(id, body); 

//     if (changedProduct) {
//         res.json({ succes: 'ok', new: changedProduct })
//     } else {
//         res.json({ error: 'producto no encontrado'});
//     }
// }); 

// router.get('/form', (req, res) => {
//     res.sendFile(__dirname + '/index.html');
// }); 

// router.post('/', (req, res) => {
//     const { body } = req;
//     body.price = parseFloat(body.price);
//     const products = new Products(productsHC);
//     const productoGenerado = products.addOne(body); 
//     res.json({ succes: 'ok', new: productoGenerado });
// }); 

// router.get('/:id', (req, res) => {
//     const products = new Products(productsHC);
//     res.json(products.getAll());
// });

// router.get('/:id', (req, res) => {
//     let { id } = req.params;
//     const products = new Products(productsHC);
//     id = parseInt(id);

//     const found = products.findOne(id); 
//     if (found) {
//         res.json(found);
//     } else {
//         res.json({ error: 'producto no encontrado' })
//     }
// })

