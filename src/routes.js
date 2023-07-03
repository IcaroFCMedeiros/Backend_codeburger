import { Router } from "express"
import multer from "multer"
import multerConfig from './config/multer'
import UserController from "./app/controllers/UserController"
import SectionController from "./app/controllers/SectionController"
import ProductController from "./app/controllers/ProductController"
import authMiddleware from "./app/middlewares/auth"
import CategoryController from "./app/controllers/CategoryController"

const upload = multer(multerConfig)

const routes = new Router()

routes.post("/users", UserController.store )

routes.post ("/sections", SectionController.store )

routes.use(authMiddleware)

routes.post ("/products", upload.single('file'), ProductController.store )

routes.get ("/products", ProductController.index )

routes.post ("/categories", CategoryController.store )

routes.get ("/categories", CategoryController.index )


export default routes
