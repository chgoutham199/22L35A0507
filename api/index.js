import express from 'express';

const app= express();
const port=6969;

app.use(express.json());
app.use('/api', productRoutes);

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})
