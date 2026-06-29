import { useEffect, useState, type ReactNode } from "react";


import styles from './Board.module.css'
import IconButton from "../common/IconButton/IconButton";
import MingcuteAddLine from "../../icons/MingcuteAddLine";
import MingcuteEdit2Line from "../../icons/MingcuteEdit2Line";

import List from "../List/List";
import type { ListType } from "../../types/list";
import Button from "../common/Button/Button";
import { load, save } from "../../utiles/local-storage";


export default function Board(): ReactNode {

    const [lists, setLists] = useState<ListType[]>(load)
    const [activeListID, setActiveListID] = useState<string | null>(null)
    const [activeListItemID, setActiveListItemID] = useState<string | null>(null)

    useEffect(()=>{
        save("list",lists)
    } , [lists])

    useEffect(()=>{

        const handleDocumentKeyDown = (e : KeyboardEvent)=>{
                if(e.code !== "Escape"){
                    return
                }
                setActiveListID(null)
                setActiveListItemID(null)
                console.log("key down");
                
        }
        document.addEventListener("keydown" , handleDocumentKeyDown )

        return ()=>{
            document.removeEventListener("keydown" , handleDocumentKeyDown)
        }
    } , [])


    const handleItemClick = (itemID: string, listID: string): void => {
        setActiveListID(listID)
        setActiveListItemID(itemID)
    }

    const handleRemoveItem = (): void => {

        setLists(old => {

            try {
                const activeListIndex = old.findIndex(list => list.id === activeListID)
                if (activeListIndex === -1) {
                    console.error("cant find active list")
                    return old
                }

                const clone = [...old]
                const activeList = { ...clone[activeListIndex] }



                const activeItemIndex = activeList.items.findIndex(item => item.id === activeListItemID)
                if (activeItemIndex === -1) {
                    console.error("cant find active item")
                    return old
                }


                activeList.items.splice(activeItemIndex, 1)

                clone[activeListIndex] = activeList
            
                return clone
            } finally {
                setActiveListID(null)
                setActiveListItemID(null)

            }

        })
    }


    const handleMoveItem = (destinationId: string): void => {
            console.log("des id" , destinationId);
            
        try {
            setLists(old => {

                const activelistIndex = old.findIndex(list => list.id === activeListID)
                console.log("actlist" ,activelistIndex);
                
                if (activelistIndex === -1) {
                    console.error("cant find active list")
                    return old
                }
                const destinationlistIndex = old.findIndex(list => list.id === destinationId)
                if (destinationlistIndex === -1) {
                    console.error("cant find active list")
                    return old
                }



                const clone = [...old]
                const activeList = {
    ...clone[activelistIndex],
    items: [...clone[activelistIndex].items]
}
                const destinationList = { ...clone[destinationlistIndex] , items : [...clone[destinationlistIndex].items] }

                const activeListItemIndex = activeList.items.findIndex(item => item.id === activeListItemID)
                console.log(activeListItemIndex);
                
                if (activeListItemIndex === -1) {
                    console.error("cant find active item")
                    return old
                }

                

                const [movedItem] = activeList.items.splice(activeListItemIndex, 1)
                destinationList.items.push(movedItem)


                clone[activelistIndex] = activeList
                clone[destinationlistIndex] = destinationList
              
                return clone
            })
        } finally {
            setActiveListID(null)
            setActiveListItemID(null)
        }

    }



    return (
        <div className={styles.board}>

            <div className={styles.toolbar}>
                <div className={styles.title}>board title</div>
                <div className={styles.actions}>
                    {activeListID !== null && (
                        <div className={styles.spacer}>

                            {

                                lists.filter(list => list.id !== activeListID).map(list => (

                                    <Button key={list.id} color="gray" onClick={() => handleMoveItem(list.id)}>{list.title}</Button>
                                ))}
                            <Button onClick={handleRemoveItem}>remove</Button>
                        </div>
                    )}

                    <IconButton>
                        <MingcuteAddLine />
                    </IconButton>
                    <IconButton>
                        <MingcuteEdit2Line />
                    </IconButton>


                </div>
            </div>

            <ul className={styles.lists}>
                {lists.map(list => (
                    <li key={list.id}>
                        <List list={list} onClick={handleItemClick} />
                    </li>
                ))}




            </ul>


        </div>
    )
}