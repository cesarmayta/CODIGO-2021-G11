const jwt = require('jsonwebtoken');
const {config} = require('../config');

const verifyToken = (req,res,next) =>{
    const bearerToken = req.headers['authorization'];
    console.log('bearer token : ' + bearerToken);
    if(typeof bearerToken !== 'undefined'){
        const bearer = bearerToken.split(' ');
        //bearer token
        const token = bearer[1];
        try{
            const decoded = jwt.verify(token,config.secret_key);
            console.log(decoded);
        }catch(err){
            return res.status(401).json({
                status:false,
                content:'token invalido'
            })
        }
        return next();
    }
    else{
        res.status(403).json({
            status:false,
            content:'no se encontro token'
        })
    }
}

module.exports = verifyToken;