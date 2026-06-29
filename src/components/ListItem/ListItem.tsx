import { use, type MouseEvent, type ReactNode } from "react";
import styles from './ListItem.module.css'
import type { ListItemType } from "../../types/list-item";
import MingcuteDelete2Line from "../../icons/MingcuteDelete2Line";
import IconButton from "../common/IconButton/IconButton";
import { BoardContext } from "../../context/board-context";


type Props = {
    listId : string
    onClick? : (listItemID : string , listID  : string) => void,
    item : ListItemType ,
}


export default function ListItem ({ item , onClick , listId} : Props) : ReactNode {
    const {remove} =  use(BoardContext)
        

     const handleRemoveButtonClick = (e: MouseEvent ): void => {
            e.stopPropagation();
            remove(listId , item.id)
        }
    return (
       <div className={styles.item} onClick={()=>onClick?.(item.id , listId)}>
        {item.title}
        <IconButton onClick={handleRemoveButtonClick}>
            <MingcuteDelete2Line/>
        </IconButton>
        </div>
    )
}