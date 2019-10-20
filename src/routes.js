import { Router } from 'express';
import UserController from './app/controllers/UserController';
import StudentController from './app/controllers/StudentController';
import SessionController from './app/controllers/SessionController';
import authMiddleware from './app/middlewares/auth';

const routes = new Router();
routes.use(authMiddleware);
routes.post('/users', UserController.store);
routes.post('/students', StudentController.store);
routes.post('/sessions', SessionController.store);

routes.post('/students', StudentController.update);
routes.put('/users', UserController.update);

export default routes;
// module.exports = routes;
