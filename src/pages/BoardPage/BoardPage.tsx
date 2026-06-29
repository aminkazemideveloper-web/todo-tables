import type { ReactNode } from "react";
import styles from './BoardPage.module.css'
import { useParams } from "react-router";
import Board from "../../components/Board/Board";
import BoardProvider from "../../providers/BoardProvider";
export default function BoardPage(): ReactNode {

    const { id } = useParams()

    return (
        <BoardProvider>
            <Board />
        </BoardProvider>
    )
}