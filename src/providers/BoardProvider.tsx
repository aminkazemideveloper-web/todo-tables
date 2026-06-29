import { useEffect, useState, type PropsWithChildren, type ReactNode } from "react";
import { BoardContext } from "../context/board-context";
import { load, save } from "../utiles/local-storage";
import type { ListType } from "../types/list";

type Props = PropsWithChildren

export default function BoardProvider({ children }: Props): ReactNode {

    const [list, setList] = useState<ListType[]>(load)

    useEffect(()=>{
            save("list",list)
        } , [list])

    const create = () => { }
    const move = (fromListId : string , itemId : string , toListId : string ) => {
        setList(old => {

                const listIndex = old.findIndex(list => list.id === fromListId)
                

                if (listIndex === -1) {
                    console.error("cant find active list")
                    return old
                }
                const tolistIndex = old.findIndex(list => list.id === toListId)
                if (tolistIndex === -1) {
                    console.error("cant find active list")
                    return old
                }



                const clone = [...old]
                const fromList = {
                    ...clone[listIndex],
                    items: [...clone[listIndex].items]
                }
                const toList = { ...clone[tolistIndex], items: [...clone[tolistIndex].items] }

                const itemIndex = fromList.items.findIndex(item => item.id === itemId)
                

                if (itemIndex === -1) {
                    console.error("cant find active item")
                    return old
                }



                const [movedItem] = fromList.items.splice(itemIndex, 1)
                toList.items.push(movedItem)


                clone[listIndex] = fromList
                clone[tolistIndex] = toList

                return clone
            })
     }
    const remove = (listId : string , itemId  : string  ) => { 
        setList(old => {
                const listIndex = old.findIndex(list => list.id === listId)
                if (listIndex === -1) {
                    console.error("cant find active list")
                    return old
                }

                const clone = [...old]
                const list = { ...clone[listIndex] }



                const itemIndex = list.items.findIndex(item => item.id === itemId)
                if (itemIndex === -1) {
                    console.error("cant find active item")
                    return old
                }


                list.items.splice(itemIndex, 1)

                clone[listIndex] = list
            
                return clone
            
        })
    }



    return (
        <BoardContext value={{ create, list, move, remove }}>
            {children}
        </BoardContext>
    )
}