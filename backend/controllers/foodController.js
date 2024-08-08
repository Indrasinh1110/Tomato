import FoodModel from "../models/food.model.js";

import fs from 'fs';

const addFood = async (req, res) => {
    let image_filename = req.file ? req.file.filename : null;

    const food = new FoodModel({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        category: req.body.category,
        image: image_filename
    });

    try {
        await food.save();
        res.json({ success: true, message: "Food added" });
    } catch (error) {
        console.error(error);
        res.json({ success: false, message: "Error adding food", error: error.message });
    }
};

const listFood = async (req, res) => {
    try {
        const food = await FoodModel.find({});
        res.json(food);

    } catch (error) {
        console.error(error);
        res.json({ success: false, message: "Error in listing food" });
    }
}
const removeFood = async (req, res) => {
    try {
        const food = await FoodModel.findById(req.body._id);
        if (food.image) {
            fs.unlink(`upload/${food.image}`, (err) => {
                if (err) console.error(err);
            });
        }
        await FoodModel.findByIdAndDelete(food._id);
        res.json({ success: true, message: "Food removed" })
    } catch (error) {
        console.error(error);
        res.json({ success: false, message: "Error in removing food" });
    }
}


export { addFood, listFood, removeFood };
