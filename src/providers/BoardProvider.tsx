import { useEffect, useReducer, type PropsWithChildren, type ReactNode } from "react";
import { BoardContext } from "../context/board-context";
import { load, save } from "../utiles/local-storage";
import {  ListsReducer } from "../reducers/lists-reducer";

type Props = PropsWithChildren

export default function BoardProvider({ children }: Props): ReactNode {

    // const [list, setList] = useState<ListType[]>(load)
    const [list, dispatch] = useReducer(ListsReducer , load())

    useEffect(()=>{
            save("list",list)
        } , [list])

    const create = () => { }
    const move = (fromListId : string , itemId : string , toListId : string ) => {
        dispatch({type : "moved" , fromListId ,itemId ,toListId})
     }
    const remove = (listId : string , itemId  : string  ) => { 
            dispatch({type : "removed", listId , itemId})
    }



    return (
        <BoardContext value={{ create, list, move, remove }}>
            {children}
        </BoardContext>
    )
}