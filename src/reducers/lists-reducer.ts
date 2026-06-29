import type { ListType } from "../types/list";


type Action =
    | { type: "created" }
    | {
        type: "moved";
        fromListId: string;
        itemId: string;
        toListId: string;
    }
    | {
        type: "removed";
        listId: string;
        itemId: string;
    }


export function ListsReducer(state: ListType[], action: Action): ListType[] {
    switch (action.type) {
        // case "created": {

        // }
        case "moved": {
            const listIndex = state.findIndex(list => list.id === action.fromListId)


            if (listIndex === -1) {
                console.error("cant find active list")
                return state
            }
            const tolistIndex = state.findIndex(list => list.id === action.toListId)
            if (tolistIndex === -1) {
                console.error("cant find active list")
                return state
            }



            const clone = [...state]
            const fromList = {
                ...clone[listIndex],
                items: [...clone[listIndex].items]
            }
            const toList = { ...clone[tolistIndex], items: [...clone[tolistIndex].items] }

            const itemIndex = fromList.items.findIndex(item => item.id === action.itemId)


            if (itemIndex === -1) {
                console.error("cant find active item")
                return state
            }



            const [movedItem] = fromList.items.splice(itemIndex, 1)
            toList.items.push(movedItem)


            clone[listIndex] = fromList
            clone[tolistIndex] = toList

            return clone
        }
        case "removed": {
            const listIndex = state.findIndex(list => list.id === action.listId)
            if (listIndex === -1) {
                console.error("cant find active list")
                return state
            }

            const clone = [...state]
            const list = { ...clone[listIndex] }



            const itemIndex = list.items.findIndex(item => item.id === action.itemId)
            if (itemIndex === -1) {
                console.error("cant find active item")
                return state
            }


            list.items.splice(itemIndex, 1)

            clone[listIndex] = list

            return clone
        }



        default:
            return state;
    }

}