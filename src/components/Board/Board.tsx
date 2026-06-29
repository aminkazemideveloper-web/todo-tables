import { use, useEffect, useState, type ReactNode } from "react";

import IconButton from "../common/IconButton/IconButton";
import MingcuteAddLine from "../../icons/MingcuteAddLine";
import MingcuteEdit2Line from "../../icons/MingcuteEdit2Line";
import Button from "../common/Button/Button";

import { BoardContext } from "../../context/board-context";
import List from "../List/List";

import styles from './Board.module.css'

export default function Board(): ReactNode {
    const [activeListID, setActiveListID] = useState<string | null>(null)
    const [activeListItemID, setActiveListItemID] = useState<string | null>(null)
    const { list, move } = use(BoardContext)

    useEffect(() => {
        const handleDocumentKeyDown = (e: KeyboardEvent) => {
            if (e.code !== "Escape") {
                return
            }
            setActiveListID(null)
            setActiveListItemID(null)
        }
        document.addEventListener("keydown", handleDocumentKeyDown)

        return () => {
            document.removeEventListener("keydown", handleDocumentKeyDown)
        }
    }, [])

    const handleItemClick = (itemID: string, listID: string): void => {
        setActiveListID(listID)
        setActiveListItemID(itemID)
    }

    const handleMoveItem = (destinationId: string): void => {
        if (activeListID && activeListItemID !== null) {
            move(activeListID, activeListItemID, destinationId)
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
                                list.filter(list => list.id !== activeListID).map(list => (
                                    <Button key={list.id} color="gray" onClick={() => handleMoveItem(list.id)}>{list.title}</Button>
                                ))}

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
                {list.map(list => (
                    <li key={list.id}>
                        <List list={list} onClick={handleItemClick} />
                    </li>
                ))}
            </ul>
        </div>
    )
}