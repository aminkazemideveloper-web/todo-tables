import { useState, type ReactNode } from "react";


import styles from './Board.module.css'
import IconButton from "../common/IconButton/IconButton";
import MingcuteAddLine from "../../icons/MingcuteAddLine";
import MingcuteEdit2Line from "../../icons/MingcuteEdit2Line";
import MingcuteMore1Line from "../../icons/MingcuteMore1Line";
import List from "../List/List";
import type { ListType } from "../../types/list";


export default function Board(): ReactNode {

    const [todoList, setTodoList] = useState<ListType>({
            id : "1",
            title : "to do",
            items : [
                {
                    id : "1",
                    title : "going to gim"
                },
                {
                    id : "2",
                    title : "reading the book"
                },
                {
                    id : "3",
                    title : "relax before rest"
                },
            ]
    })
    const [doingList, setDoingList] = useState<ListType>({
            id : "2",
            title : " doing",
            items : [
                {
                    id : "4",
                    title : "set up the windows in my computer"
                },
                {
                    id : "5",
                    title : "setup office in the computer"
                }
            ]
    })
    const [doneList, setDoneList] = useState<ListType>({
            id : "3",
            title : " done",
            items : [
                
            ]
    })
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
                        <List  {...todoList}/>
                </li>
                <li>
                        <List  {...doingList}/>
                </li>
                <li>
                        <List  {...doneList}/>
                </li>
              

            </ul>


        </div>
    )
}