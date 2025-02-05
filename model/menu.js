const mongoose = require('mongoose');

const menuItemSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    description:String,
    price:{
        type:Number,
        required:true
    }
});

const menuItems = mongoose.model('menuItems', menuItemSchema);
module.exports = {menuItems};