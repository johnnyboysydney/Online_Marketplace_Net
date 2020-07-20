import mongoose, { mongo } from 'mongoose'

const CartItemSchema = new mongoose.Schema({
    product: {type: mongoose.Schema.ObjectId, red: 'Product'},
    Quantity: Number,
    shop: {type: mongoose.Schema.ObjectId, ref: 'Shop'},
    status: {type:String,
        default: 'Not processed',
        enum: ['Not processed', 'Processing', 'Shipped', 'Delivered', 'Cancelled']}
})

const CartItem = mongoose.model('CartITem', CartItemSchema)

const OrderSchema = new mongoose.Schema({
    products: [CartItemSchema]
})

const Order = mongoose.model('Order', OrderSchema)

export {Order, CartItem}