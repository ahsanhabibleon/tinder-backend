import mongoose from 'mongoose';
const { Schema } = mongoose;

const cardSchema = new Schema({
    name: String,
    imgSrc: String
});

const Cards = mongoose.model('card', cardSchema);

export default Cards