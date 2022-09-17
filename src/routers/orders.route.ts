import express from 'express';
import { OrdersController } from '../controllers';

const ordersRoute = express.Router();

const ordersController = new OrdersController();

ordersRoute
  .get(
    '/',
    ordersController.getAll,
  );

export default ordersRoute;