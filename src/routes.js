import { Router } from 'express';
import UserController from './app/controllers/UserController';
import StudentController from './app/controllers/StudentController';
import SessionController from './app/controllers/SessionController';
import authMiddleware from './app/middlewares/auth';

const routes = new Router();
routes.use(authMiddleware);

routes.post('/students', StudentController.store);
routes.put('/students/:id', StudentController.update);
routes.post('/sessions', SessionController.store);

routes.put('/users', UserController.update);

export default routes;
// module.exports = routes;
