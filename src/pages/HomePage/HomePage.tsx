import type { ReactNode } from "react";

import styles from './HomePage.module.css'
import BoardCard from "../../components/boardCard/boardCard";
import Button from "../../components/common/Button/Button";

export default function HomePage(): ReactNode {
    return (
        <div className={styles["home-page"]}>
            <header>header</header>
            <main>
                <header className={styles.header}>
                    <h1 className={styles.title}>todo</h1>
                    {/* <button className={styles.action}>create</button> */}
                    <Button variant='solid' color='gray'>create</Button>
                </header>
                <main className={styles.main}>
                    <ul className={styles.boards}>
                        <li >
                            <BoardCard
                                id={1}
                                color='blue'
                                description='in yek payam testi ast'
                                title='board 1'
                            />
                        </li>
                        <li >
                            <BoardCard
                                id={2}
                                color='gray'
                                description='in yek payam testi ast in yek payam testi ast in yek payam testi ast in yek payam testi ast'
                                title='board 2'
                            />
                        </li>
                        <li >
                            <BoardCard
                                id={3}
                                color='yellow'
                                description=' in yek payam testi ast in yek payam testi ast in yek payam testi ast in yek payam testi astin yek payam testi ast in yek payam testi ast in yek payam testi ast'
                                title='board 3'
                            />
                        </li>
                        <li >
                            <BoardCard
                                id={4}
                                color='blue'
                                description=' in yek payam testi ast  in yek payam testi ast'
                                title='board 4'
                            />
                        </li>

                    </ul>
                </main>
            </main>
            <footer>footer</footer>
        </div>
    )
}