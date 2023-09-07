require('dotenv').config()
const connectDB=require('./starter/db/connect');
const Product = require('./starter/models/product')

const jsonProducts=require('./products.json');
const product = require('./starter/models/product');


// const start=async()=>{
//     try{
//         console.log(process.env.MONGO_URL)
//         await connectDB(process.env.MONGO_URL)
//         await Product.deleteMany();
//         await Product.create(jsonProducts)
//         console.log(jsonProducts)

//         console.log('success')
//         process.exit(0)
//     }catch(error){
//         console.log(error)
//         process.exit(1)
//     }
// }

const start = async () => {
    try {
      console.log(process.env.MONGO_URL);
      await connectDB(process.env.MONGO_URL);
  
      // Delete existing products
      const deleteResult = await Product.deleteMany();
      console.log('Deleted products:', deleteResult);
  
      // Create new products
      await Product.create(jsonProducts);
      console.log('Created new products:', jsonProducts);
  
      console.log('Success');
    } catch (error) {
      console.error('Error:', error);
      process.exit(1);
    }
  };
  
start()