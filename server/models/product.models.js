import mongoose from 'mongoose'

const ProductSchema = new mongoose.Schema({
    name: {
      type: String,
      trim: true,
      required: 'Name is required'
    },
    image: {
      data: Buffer,
      contentType: String
    },
    description: {
      type: String,
      trim: true
    },
    shop: {type: mongoose.Schema.ObjectId, ref: 'Shop'}
})

export default mongoose.model('Product', ProductSchema)
