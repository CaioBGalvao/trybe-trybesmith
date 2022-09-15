import express from 'express';
import router from './routers';
import 'express-async-errors';

const app = express();

app.use(express.json());

app.use('/products', router.productRoute);

export default app;
