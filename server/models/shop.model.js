import mongoose from 'mongoose'

const ShopSchema = new mongoose.Schema({
    name: {
      type: String,
      trim: true,
      required: 'Name is required'
    }
})

export default mongoose.model('Shop', ShopSchema)