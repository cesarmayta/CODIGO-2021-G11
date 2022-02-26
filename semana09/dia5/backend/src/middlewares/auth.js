const jwt = require('jsonwebtoken');
const {config} = require('../config');

const verifyToken = (req,res,next) =>{
    const bearerToken = req.headers['authorization'];
    console.log('bearer Token = ',bearerToken)
    if(typeof bearerToken !== 'undefined'){
        //obtenemos el token enviado
        const bearer = bearerToken.split(' ');
        const token = bearer[1];

        //decodificamos el token
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
            content:'no se encontro el token'
        })
    }
}

module.exports = verifyToken;
