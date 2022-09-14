const Cart = require('../db/cart')

const express = require('express')
const { Router } = express

const cartRouter = Router()

const cart = new Cart('cart')

cartRouter.post('/', (req, res) =>{  
        cart.save().then((response) =>{
            res.json(response)
        })
    })()

cartRouter.delete('/:id', (req, res) =>{
    const { id } = req.params;

     cart.deleteCart(id).then((response) =>{
            res.json(response)
        });
    });


cartRouter.get('/:id/productos', (req, res) =>{
    const { id } = req.params;

     cart.getProductsByCart(id).then((response) =>{
            res.json(response)
        });
    });

cartRouter.post('/:id/productos', (req, res) =>{
    const { id } = req.params
    const { name, timestamp, description, code, image, price, stock } = req.body

    const product = { id: req.body.id, timestamp, name, description, code, image, price, stock };

    cart.addToCart(id, product).then((response) =>{
            res.json(response)
        })
    })()

cartRouter.delete('/:id/productos/:id_prod', (req, res) =>{
    const { id, idProd } = req.params;

    cart.deleteProductOnCart(id, idProd).then((response) =>{
            res.json(response)
        })
    })()


module.exports = cartRouter