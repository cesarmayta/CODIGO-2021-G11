function metodo(req,res,next){
    console.log('tipo de request: ',req.method)
    next();
}

function logErrors(err,req,res,next){
    console.error(err);
    next(err);
}

function errorHandler(err,req,res,next){
    res.status(500).json({
        status:false,
        content: err.message,
        stack: err.stack
    })
    //next(err);
}

function boomErrorHandler(err,req,res,next){
    if(err.isBoom){
        const {output} = err;
        res.status(output.statusCode).json(output.payload);
    }
    next(err);
}

module.exports = {errorHandler,metodo,logErrors,boomErrorHandler}