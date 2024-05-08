const express = require('express')
const app = express()
const dotenv = require('dotenv').config()
const colors = require('colors')
const dbConnect = require("./config/db.js")
const authRouter =  require('./routes/authRoutes.js')
const productRouter = require('./routes/productRoute.js')
const blogRouter = require('./routes/blogRoutes.js')
const bodyParser = require('body-parser')
const { notFound, errorHandler } = require('./middlewares/errorHandler.js')
const cookieParser = require('cookie-parser')
const morgan = require('morgan')
const PORT = process.env.PORT || 4000;


//connet database
dbConnect();


app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))
app.use(cookieParser());

app.use('/api/user',authRouter);
app.use('/api/product',productRouter);
app.use("/api/blog", blogRouter);
app.use(notFound);
app.use(errorHandler)


app.listen(PORT, ()=>{
    console.log(`Server Running on ${process.env.DEV_MODE} mode on port ${PORT}`.bgCyan
    .white)
})