const foodModel = require('../models/food.model');
const storageService = require('../services/storage.service');
const {v4:uuid}=require("uuid")
async function createFood(req, res){
    console.log(req.foodPartner);// Access the authenticated food partner's information
    console.log(req.body);// Access the form data (name, description, price)
    
    console.log(req.file);// Access the uploaded video file

    const fileUploadResult = await storageService.uploadFile(req.file,uuid());
    console.log(fileUploadResult);// Access the result of the file upload (e.g., URL)
    res.send("Food created successfully");
}
module.exports = { createFood };