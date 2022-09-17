import express from 'express';
import { productRoute, userRoute } from './routers';

const app = express();

app.use(express.json());

app.use('/products', productRoute);
app.use('/users', userRoute);

export default app;
