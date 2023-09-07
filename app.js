require('dotenv').config()
require('express-async-errors')

const express=require('express')
const app=express();

const connectDB=require('./starter/db/connect')
const productsRouter=require('./starter/routes/products')

 const notFoundMiddleware=require('./starter/middleware/not-found')
 const errorMiddleware=require('./starter/middleware/error-handler')

 app.use(express.json())

 app.get('/',(req,res)=>{
    res.send('<h1>Store API</h1><a href="/api/v1/products">products route</a>')
 })

 app.use('/api/v1/products',productsRouter)

 app.use(notFoundMiddleware)
 app.use(errorMiddleware)

 const port=process.env.PORT || 3000

 const start= async() => {
    try{
        // console.log(process.env.MONGO_URL)
        await connectDB(process.env.MONGO_URL);
        app.listen(port, console.log(`server is listening on ${port}....`))
    }catch (error){
        console.log(error)
    }
}
start()