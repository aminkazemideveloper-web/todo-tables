import { createContext } from "react";

type ContextValue = {
    activeListID: string | null;
    activeListItemID: string | null;
    activate: (itemId: string, listId: string) => void;
    deActivate: () => void;
}


export const ActiveItemContext = createContext<ContextValue>({
    activeListID : null,
    activeListItemID  :null,
    activate  : ()=>{},
    deActivate : ()=>{},

})