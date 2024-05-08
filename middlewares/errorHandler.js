//Not Found
const notFound = (req, res, next)=>{
    const error = new Error(`Not Found : ${req.orignalUrl}`);
    res.status(404);
    next(error);
}

//Error Handler
const errorHandler = (err, req, res, next)=>{
    const stautscode = res.stautsCode = 200 ? 500 : res.stautsCode;
    res.status(stautscode);
    res.json({
        message: err?.message,
        stack: err?.stack
    })
}

module.exports={errorHandler, notFound}