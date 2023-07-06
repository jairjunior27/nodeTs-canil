import { Request, Response, Router } from "express";
import * as controllerHome from '../controllers/pageControler'
import * as searchControler from '../controllers/searchControler'

const Route = Router()

Route.get('/',controllerHome.Home)
Route.get('/dogs',controllerHome.dogs)
Route.get('/cats',controllerHome.cats)
Route.get('/fishes',controllerHome.fishes)


Route.get('/search',searchControler.search)

export default Route
