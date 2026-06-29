import { use, type MouseEvent, type ReactNode } from "react";
import styles from './ListItem.module.css'
import type { ListItemType } from "../../types/list-item";
import MingcuteDelete2Line from "../../icons/MingcuteDelete2Line";
import IconButton from "../common/IconButton/IconButton";
import { BoardContext } from "../../context/board-context";
import { ActiveItemContext } from "../../context/active-item-context";
import clsx from "clsx";


type Props = {
    listId : string
    item : ListItemType ,
}



export default function ListItem ({ item , listId } : Props) : ReactNode {
    const {remove} =  use(BoardContext)
    const {activeListID , activeListItemID , activate} = use(ActiveItemContext)       
        

    const handleItemClick = (): void => {
       activate(item.id ,  listId)
    }

     const handleRemoveButtonClick = (e: MouseEvent ): void => {
            e.stopPropagation();
            remove(listId , item.id)
        }
    return (
       <div className={clsx(styles.item , item.id === activeListItemID && styles.active) }
          onClick={handleItemClick}>
        {item.title}
        <IconButton onClick={handleRemoveButtonClick}>
            <MingcuteDelete2Line/>
        </IconButton>
        </div>
    )
}