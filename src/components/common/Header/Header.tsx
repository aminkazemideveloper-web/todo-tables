import type { ReactNode } from "react";


import styles from './Header.module.css'
import { Link } from "react-router";

export default function Header () : ReactNode {
    return (
        <div className={styles.header}>
            <Link to="/" className={styles.logo}>Condoctor Table</Link>
        </div>
    )
}