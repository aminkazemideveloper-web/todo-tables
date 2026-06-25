import clsx from 'clsx'
import styles from './boardCard.module.css'
import type { ReactNode } from 'react'
import { Link } from 'react-router'

type Color = "gray" | "yellow" | "blue"


type Props = {
    id : number ;
    title : string ;
    description : string ;
    color : Color
}



export default function BoardCard ({id,color ,title ,description}:Props): ReactNode{
    return (
        <div className={styles["board-card"]}>
                <div className={clsx(styles.cover , color)}></div>
                <div className={styles.content}>
                  <div className={styles.header}>
                    <h3 className={styles.title}>{title}</h3>
                    <Link to="board" className={styles.link}>View</Link>
                  </div>

                  <p className={styles.description}>{description}</p>

                </div>
              </div>
    )
}