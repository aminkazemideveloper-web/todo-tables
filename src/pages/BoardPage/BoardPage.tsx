import { useRef, type ReactNode } from "react";
import { useParams } from "react-router";

import Board from "../../components/Board/Board";
import BoardProvider from "../../providers/BoardProvider";
import ActiveItemProvider from "../../providers/ActiveItemProvider";
import styles from './BoardPage.module.css'
import Modal from "../../components/common/Modal/Modal";
import Button from "../../components/common/Button/Button";


export default function BoardPage(): ReactNode {
    
    const { id } = useParams()
    const ref = useRef<HTMLDialogElement>(null)
    const handleOpenModalButtonClick = () : void => {
        ref.current?.showModal()
    }


    return (
        <BoardProvider>
            <ActiveItemProvider>
                {/* <Board /> */}
                <Button onClick={handleOpenModalButtonClick}>open</Button>
                <Modal ref={ref} heading="this is heading">
                    this is children
                </Modal>
            </ActiveItemProvider>
        </BoardProvider>
    )
}