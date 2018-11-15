const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    try{
        const token = req.header.authorization.split(' ')[1];
        //console.log(token);
        const decoded = jwt.verify(token, 'secret');
        req.UserData = decoded;
        next();
    } catch(error){
        return res.status().json({
            message: 'auth failed'
        });
    }
};