import express from 'express';
import dotenv from 'dotenv'
import colors from 'colors'
import connectDB from './config/db.js'

import userRoutes from './routes/userRoutes.js'

dotenv.config()
const app = express();

connectDB();

app.use(express.json());

app.use('/api/users', userRoutes)

const PORT = process.env.PORT || 5000;


app.get('/',(req, res)=>{
    res.send("api is running...")
})


app.listen(PORT, ()=> console.log(`server listening on port ${PORT}`))