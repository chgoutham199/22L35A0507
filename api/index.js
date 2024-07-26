import express from 'express';
import cors from 'cors';
import productRoutes from './routes/productRoutes.js';
const app= express();
const port=6969;
app.use(cors({
    origin: '*'
  }));

app.use(express.json());
app.use('/api', productRoutes);

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})
