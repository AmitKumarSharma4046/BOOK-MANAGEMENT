const mongoose = require('mongoose')


const bookSchema = new mongoose.Schema({

    title: {
        type: String,
        required: 'Book Title Required',
        unique: true,
        trim:true
    },
    excerpt: {
        type: String,
        required: 'Excerpt is Required',
        trim:true
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: 'userId is Required',
        ref: 'User',
        trim:true
    },
    ISBN: {
        type: String,
        required: 'ISBN is Required',
        unique: true,
        trim:true
    },
    bookCover: {
        type: String,
        required: 'bookCover is required.'
    },
    category: {
        type: String,
        required: 'Category is Required',
        trim:true
    },
    subcategory: {
        type: [String],
        required: 'SubCategory is Required',
        trim:true
    },
    reviews: {
        type: Number,
        default: 0,
        trim:true
    },
    isDeleted: {
        type: Boolean,
        default: false,
    },
    deletedAt: Date,
    releasedAt: {
        type:Date,
        required:'releasedAt is Required'
    }

}, { timestamps: true })

module.exports = mongoose.model("Book", bookSchema)