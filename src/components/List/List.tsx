import { useState, type ReactNode } from "react";

import styles from './List.module.css'
import IconButton from "../common/IconButton/IconButton";
import MingcuteMore1Line from "../../icons/MingcuteMore1Line";
import ListItem from "../ListItem/ListItem";
import type { ListType } from "../../types/list";




export  default function List ({id ,items , title} : ListType) :ReactNode {
    return (
         <div className={styles.list}>
                        <div className={styles.header}>
                            <div className={styles.title}>{title}</div>
                            <IconButton>
                                <MingcuteMore1Line/>
                            </IconButton>
                        </div>
                        <ul className={styles.items}>
                           {items.map( item =>(
                                <ListItem {...item} key={item.id}/>
                           ))}
                           
                        </ul>
                    </div>
    )
}