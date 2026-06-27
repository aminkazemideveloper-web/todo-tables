import type { ReactNode } from "react";
import styles from './ListItem.module.css'
import type { ListItemType } from "../../types/list-item";


type Props = {
    listId : string
    onClick? : (listItemID : string , listID  : string) => void,
    item : ListItemType ,
}


export default function ListItem ({ item , onClick , listId} : Props) : ReactNode {
    return (
       <div className={styles.item} onClick={()=>onClick?.(item.id , listId)}>{item.title}</div>
    )
}