import type { ReactNode } from "react";
import { useParams } from "react-router";

import Board from "../../components/Board/Board";
import BoardProvider from "../../providers/BoardProvider";
import ActiveItemProvider from "../../providers/ActiveItemProvider";
import styles from './BoardPage.module.css'


export default function BoardPage(): ReactNode {
    
    const { id } = useParams()

    return (
        <BoardProvider>
            <ActiveItemProvider>
                <Board />
            </ActiveItemProvider>
        </BoardProvider>
    )
}