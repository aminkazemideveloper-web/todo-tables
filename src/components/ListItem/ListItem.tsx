import type { ReactNode } from "react";
import styles from './ListItem.module.css'
import type { ListItemType } from "../../types/list-item";



export default function ListItem ({id , title} : ListItemType) : ReactNode {
    return (
       <div className={styles.item}>{title}</div>
    )
}