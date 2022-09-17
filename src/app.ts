import express from 'express';
import { productRoute, userRoute, orderRoute } from './routers';

const app = express();

app.use(express.json());

app.use('/products', productRoute);
app.use('/users', userRoute);
app.use('/orders', orderRoute);

export default app;
