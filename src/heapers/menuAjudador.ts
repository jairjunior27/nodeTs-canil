
type menuTypeActive = '' | 'all' | 'dog' | 'cat' |'fishe'

export const menuAjudador = (menuActive: menuTypeActive) =>{
    let returnObject = {
        all: false,
        cat: false,
        dog: false,
        fishe: false
    }

    if(menuActive !==''){
        returnObject[menuActive] = true
    }

    return returnObject

}