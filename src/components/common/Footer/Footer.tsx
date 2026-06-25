import type { ReactNode } from "react";

import styles from './Footer.module.css'

export default function Footer () : ReactNode {
    return(
        <footer className={styles.footer}> Copyright &copy;  golbarg.ir</footer>
    )
}