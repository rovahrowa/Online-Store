/**
 * Created by danstan on 6/13/17.
 */
//Import libraries and packages
const mongoose = require ('mongoose')
//Allows using url friendly names
const slug = require ('slugs')

//Tells mongodb to use the global javascript promise to wait for database tasks
mongoose.Promise = global.Promise

const storeSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: "Please Enter a store name"
    },
    slug: String,
    description: {
        type: String,
        trim: true
    },
    tags: [String],

})

//before storing a store, we generate a slug
storeSchema.pre('save', function (next) {
    if(!this.isModified('name')){
        next();
        return;
    }
    this.slug = slug(this.name)
    next()
})

module.exports = mongoose.model('store', storeSchema)