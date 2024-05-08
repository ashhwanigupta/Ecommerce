const { default: mongoose, model } = require("mongoose")

const dbConnect = async() =>{
    try {
    const conn = await mongoose.connect(process.env.MONGO_URL);
    console.log(
        `Conneted To Mongodb Databse ${conn.connection.host}`.bgMagenta.white
      );    
    } catch (error) {
        console.log(`Error in Mongodb ${error}`.bgRed.white);
    }
}

module.exports = dbConnect;