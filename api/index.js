import express from 'express';
import productRoutes from './routes/productRoutes.js';
const app= express();
const port=6969;

app.use(express.json());
app.use('/api', productRoutes);

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})
