import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';
import authMiddleware from './middleware/auth';



import UserController from './app/controllers/UserController'
 
import SessionController from './app/controllers/SessionController';

import ProductController from './app/controllers/ProductController';

const upload = multer(multerConfig)


const routes = new Router();

routes.post('/users', UserController.store) 

routes.post('/sessions', SessionController.store) 


routes.post('/products', upload.single('file') ,ProductController.store)

routes.get('/products', authMiddleware, ProductController.index);

export default routes;
