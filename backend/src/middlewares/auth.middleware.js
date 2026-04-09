const foodPartnerModel = require('../models/foodPartner');
const jwt = require('jsonwebtoken');
async function authenticateFoodPartner(req, res, next) {
    const token = req.cookies.token;
    if (!token) {
        return res.status(401).json({ message: 'Unauthorized Please Login' });
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const foodPartner = await foodPartnerModel.findById(decoded.id);
        
        req.foodPartner = foodPartner;
        next();
    } catch (error) {
        return res.status(401).json({ message: 'Unauthorized Please Login' });
    }
}
module.exports ={
    authenticateFoodPartner
};