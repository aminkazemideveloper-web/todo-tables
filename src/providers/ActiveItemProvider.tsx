import { useEffect, useState, type PropsWithChildren, type ReactNode } from "react";
import { ActiveItemContext } from "../context/active-item-context";

type Props = PropsWithChildren


export default function ActiveItemProvider({ children }: Props): ReactNode {

    const [activeListID, setActiveListID] = useState<string | null>(null)
    const [activeListItemID, setActiveListItemID] = useState<string | null>(null)

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

    const activate = (itemId: string, listId: string): void => {
        setActiveListID(listId)
        setActiveListItemID(itemId)
    }

    const deActivate = () : void =>{
        setActiveListID(null)
        setActiveListItemID(null)
    }

    return (
        <ActiveItemContext value={{ activate, activeListID, activeListItemID, deActivate }}>
            {children}
        </ActiveItemContext>
    )
}