import { Response, Request } from "express"
import { Pet } from "../models/pet"
import { menuAjudador } from "../heapers/menuAjudador"

export const Home = (req:Request, res:Response) =>{
    let list = Pet.getALl()
    res.render('pages/page' ,{
        menu: menuAjudador('all'),
        banner:{
            title: 'Todos os animais',
            background: 'allanimals.jpg'
        },
        list
    })
} 
export const dogs = (req:Request, res:Response) =>{
    let list = Pet.getFromType('dog')
    res.render('pages/page' ,{
        menu: menuAjudador('dog'),
        banner:{
            title: 'Cachorros',
            background: 'banner_dog.jpg'
        },
        list
    })
} 
export const cats = (req:Request, res:Response) =>{
    let list = Pet.getFromType('cat')
    res.render('pages/page' ,{
       
        menu: menuAjudador('cat'),
        banner:{
            title: 'Gatos',
            background: 'banner_cat.jpg'
        },
        list
    })
} 
export const fishes = (req:Request, res:Response) =>{
    let list = Pet.getFromType('fish')
    res.render('pages/page' ,{
        menu: menuAjudador('fishe'),
        banner:{
            title: 'Peixes',
            background: 'banner_fish.jpg'
        },
        list
    })
} 