import { useState, type ReactNode } from "react";

import styles from './List.module.css'
import IconButton from "../common/IconButton/IconButton";
import MingcuteMore1Line from "../../icons/MingcuteMore1Line";
import ListItem from "../ListItem/ListItem";
import type { ListType } from "../../types/list";

type Props = {

    list : ListType
}


export  default function List ({ list} : Props) :ReactNode {
    return (
         <div className={styles.list}>
                        <div className={styles.header}>
                            <div className={styles.title}>{list.title}</div>
                            <IconButton>
                                <MingcuteMore1Line/>
                            </IconButton>
                        </div>
                        <ul className={styles.items}>
                           {list.items.map( item =>(
                                <ListItem item={item} key={item.id} listId = {list.id} />
                           ))}
                           
                        </ul>
                    </div>
    )
}