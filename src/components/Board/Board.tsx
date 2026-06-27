import { useState, type ReactNode } from "react";


import styles from './Board.module.css'
import IconButton from "../common/IconButton/IconButton";
import MingcuteAddLine from "../../icons/MingcuteAddLine";
import MingcuteEdit2Line from "../../icons/MingcuteEdit2Line";

import List from "../List/List";
import type { ListType } from "../../types/list";
import { listsData } from "../../data/listsData";


export default function Board(): ReactNode {

    const [lists, setLists] = useState<ListType[]>(listsData)
    

    // const handleEditButtonClick = () : void =>{
    //     setTodoList(old => {
    //         const clone = [...old.items]
    //         clone.splice(1,1)
    //         return {...old ,items: clone}
    //     } )
    // }

    return (
        <div className={styles.board}>

            <div className={styles.toolbar}>
                <div className={styles.title}>board title</div>
                <div className={styles.actions}>
                    <IconButton>
                        <MingcuteAddLine />
                    </IconButton>
                    <IconButton>
                        <MingcuteEdit2Line />
                    </IconButton>
                </div>
            </div>

            <ul className={styles.lists}>
                <li>
                        <List  {...lists[0]}/>
                </li>
                <li>
                        <List  {...lists[1]}/>
                </li>
                <li>
                        <List  {...lists[2]}/>
                </li>
              

            </ul>


        </div>
    )
}