import { listsData } from "../data/listsData"
import type { ListType } from "../types/list"

export const save = (key : string , value  :ListType[]) : void=>{
        localStorage.setItem(key , JSON.stringify(value))
}


export const load = () : ListType[] =>{
    const lists = localStorage.getItem("list")

    if(!lists) {
        return listsData
    }

    return JSON.parse(lists)
}