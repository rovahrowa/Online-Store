/**
 * Created by danstan on 6/13/17.
 */
const mongoose = require('mongoose')
const Store = mongoose.model('Store')

exports.homePage = (req,res) =>{
    res.render('index', {
        title:"Home"
    })
}

exports.addStore = (req,res) =>{
    res.render('editStore', {
        title: "Add Store"
    })
}

exports.createStore = async (req,res) =>{
    const store = await (new Store(req.body).save())
    req.flash('success', 'Successfully Created New Store')
    res.redirect('/store/${store.slug}')
}

exports.getStores = async (req,res) =>{
    const stores = await( Store.find())
    console.log(stores)
    res.render('stores', {title:"Stores", stores:stores})
}