import type { ComponentProps, ReactNode, RefObject , MouseEvent } from "react";
import styles from './Modal.module.css'
import clsx from "clsx";
import IconButton from "../IconButton/IconButton";
import MingcuteCloseLine from "../../../icons/MingcuteCloseLine";

type Props = ComponentProps<"dialog"> & {
    heading: string;
    ref : RefObject<HTMLDialogElement | null>  ;
}


export default function Modal({
    ref,
    className,
    heading,
    children,
    ...otherprops
}: Props): ReactNode {

    const handleCloseModalIconClick = () : void =>{
        ref.current?.close()
    }

        const handleDialogClick = (e : MouseEvent<HTMLDialogElement>)  : void =>{
            if(e.target === e.currentTarget){
                ref.current?.close()
            }
        }
    return (
        <dialog ref={ref} className={clsx(styles.modal, className)} onClick={handleDialogClick} {...otherprops}>
            <header>
                <div className={styles.heading}>{heading}</div>
                <IconButton onClick={handleCloseModalIconClick}>
                    <MingcuteCloseLine/>
                </IconButton>
            </header>
            <main>
                {children}
            </main>

        </dialog>
    )
}