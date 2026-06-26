import type { ReactNode } from "react";


import styles from './Board.module.css'
import IconButton from "../common/IconButton/IconButton";
import MingcuteAddLine from "../../icons/MingcuteAddLine";
import MingcuteEdit2Line from "../../icons/MingcuteEdit2Line";
import MingcuteMore1Line from "../../icons/MingcuteMore1Line";
export default function Board () : ReactNode {
    return (
        <div className={styles.board}>

            <div className={styles.toolbar}>
                <div className={styles.title}>board title</div>
                <div className={styles.actions}>
                    <IconButton>
                        <MingcuteAddLine/>
                    </IconButton>
                    <IconButton>
                        <MingcuteEdit2Line/>
                    </IconButton>
                </div>
            </div>

            <ul className={styles.lists}>
                <li>
                    <div className={styles.list}>
                        <div className={styles.header}>
                            <div className={styles.title}>To Do</div>
                            <IconButton>
                                <MingcuteMore1Line/>
                            </IconButton>
                        </div>
                        <ul className={styles.items}>
                            <li>
                                <div className={styles.item}>setup the window</div>
                            </li>
                            <li>
                                <div className={styles.item}>go to gim</div>
                            </li>
                            <li>
                                <div className={styles.item}>continue reading the book</div>
                            </li>
                            <li>
                                <div className={styles.item}>relax before going to bed</div>
                            </li>
                        </ul>
                    </div>
                </li>
                <li>
                    <div className={styles.list}>
                        <div className={styles.header}>
                            <div className={styles.title}>To Do</div>
                            <IconButton>
                                <MingcuteMore1Line/>
                            </IconButton>
                        </div>
                        <ul className={styles.items}>
                            <li>
                                <div className={styles.item}>setup the window</div>
                            </li>
                            <li>
                                <div className={styles.item}>go to gim</div>
                            </li>
                            <li>
                                <div className={styles.item}>go to gim</div>
                            </li>
                            <li>
                                <div className={styles.item}>go to gim</div>
                            </li>
                            <li>
                                <div className={styles.item}>go to gim</div>
                            </li>
                            <li>
                                <div className={styles.item}>go to gim</div>
                            </li>
                            <li>
                                <div className={styles.item}>go to gim</div>
                            </li>
                            <li>
                                <div className={styles.item}>go to gim</div>
                            </li>
                            <li>
                            <li>
                                <div className={styles.item}>go to gim</div>
                            </li>
                                <div className={styles.item}>continue reading the book</div>
                            </li>
                            <li>
                                <div className={styles.item}>relax before going to bed</div>
                            </li>
                        </ul>
                    </div>
                </li>
                <li>
                    <div className={styles.list}>
                        <div className={styles.header}>
                            <div className={styles.title}>To Do</div>
                            <IconButton>
                                <MingcuteMore1Line/>
                            </IconButton>
                        </div>
                        <ul className={styles.items}>
                            <li>
                                <div className={styles.item}>setup the window</div>
                            </li>
                            <li>
                                <div className={styles.item}>go to gim</div>
                            </li>
                            <li>
                                <div className={styles.item}>continue reading the book</div>
                            </li>
                            <li>
                                <div className={styles.item}>relax before going to bed</div>
                            </li>
                        </ul>
                    </div>
                </li>
              
            </ul>


        </div>
    )
}