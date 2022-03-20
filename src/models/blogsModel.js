const mongoose = require('mongoose');
const Schema=mongoose.Schema
const blogsSchema = new mongoose.Schema({

    title: {
        type: String,
        required: true,},

    body: {
        type: String,
        required: true,},

    authorId: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: "authorsproject"
    },
    tags:  ["String"],

    category: {
        type: String,
        required: true
    },
    subcategory: ["String"],

        isPublished:{
            type:Boolean,
            default:false
        },

        publishedAt:{
            type: Date},
            
            
    isDeleted: {
        type: Boolean,
        default: false
    },
    deletedAt:{
        type:Date}
    
}, { timestamps: true });
module.exports = mongoose.model('blog1project', blogsSchema)