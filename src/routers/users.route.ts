import express from 'express';
import { UsersController } from '../controllers';

const usersRoute = express.Router();

const usersController = new UsersController();

usersRoute
  .post(
    '/',
    usersController.createUser,
  );

export default usersRoute;