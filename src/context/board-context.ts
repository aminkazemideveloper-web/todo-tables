import { createContext } from "react";
import type { ListType } from "../types/list";

type ValueContext = {
    list: ListType[];
    create: () => void;
    move: (fromListId : string , itemId : string , toListId : string ) => void;
    remove: (listId : string , itemId  : string ) => void;

}


export const BoardContext = createContext<ValueContext>({
    list: [],
    create: () => { },
    move: () => { },
    remove: () => { },
})