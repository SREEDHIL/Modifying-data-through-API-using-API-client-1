const express = require('express');
const {menuItems} = require('../model/menu');

// const app = express();

let menuRouter = express.Router();

// app.use(express.json());

menuRouter.post('/', async (req,res)=>{
  const {name,price,description}=req.body
    try {
        const menu = new menuItems({name,price,description});
        await menu.save();
        res.status(201).json(menu);
    } catch (error) {
        res.status(400).json({error:error.message})
    }
});

menuRouter.get('/', async(req,res)=>{
    try {
        const menus = await menuItems.find();
        res.json(menus)
    } catch (error) {
        res.status(400).json({error:error.message})
    }
});

// menuRouter.use('/menu',menuItems);

module.exports = menuRouter;
