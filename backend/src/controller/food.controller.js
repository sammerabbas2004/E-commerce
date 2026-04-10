const foodModel = require('../models/food.model');
const storageService = require('../services/storage.service');
const { v4 : uuid}=require('uuid');
// Function to create a new food item
async function createFood(req, res){
    console.log("FILE:", req.file);

    if(!req.file){
        return res.status(400).json({
            message: "File missing"
        })
    }

    const fileUploadResult = await storageService.uploadFile(req.file, uuid());

    const foodItem = await foodModel.create({
        name:req.body.name,
        description:req.body.description,
        VideoUrl:fileUploadResult,
        foodPartner:req.foodPartner._id
    });

    res.status(201).json({
        message:"Food item created successfully",
        food: foodItem
    });
}
// Function to get all food items
async function getAllFoods(req, res){
    const foods = await foodModel.find();
    res.status(200).json({
        message: "Foods retrieved successfully",
        foods: foods
    });
}
module.exports = { createFood, getAllFoods };