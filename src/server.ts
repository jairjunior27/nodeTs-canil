import express from 'express'
import mustache from 'mustache-express'
import dotEnv from 'dotenv'
import path from 'path'
import mainRoutes from './Routes/index'

dotEnv.config()

const Server = express()

Server.set("view engine" ,'mustache')
Server.set("views", path.join(__dirname, 'views'))
Server.engine("mustache",mustache())


Server.use(express.static(path.join(__dirname,'../public')))

Server.use(mainRoutes)

Server.use((req,res)=>{
    res.render('pages/404')
})
Server.listen(process.env.PORT)