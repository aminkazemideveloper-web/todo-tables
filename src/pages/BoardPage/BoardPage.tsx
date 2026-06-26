import type { ReactNode } from "react";
import styles from './BoardPage.module.css'
import { useParams } from "react-router";
import Board from "../../components/Board/Board";
export default function BoardPage () : ReactNode {

        const {id} =  useParams()

    return (
        <div className={styles["board-page"]}>
            <Board/>
        </div>
    )
}