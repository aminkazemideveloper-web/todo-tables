import type { ReactNode } from "react";
import Header from "../../components/common/Header/Header";
import { Outlet } from "react-router";
import Footer from "../../components/common/Footer/Footer";


import styles from './RootLayout.module.css'
export default function RootLayout () : ReactNode {
    return (
        <div className={styles["root-layout"]}>
            <Header/>
            <main>
                <Outlet/>
            </main>
            <Footer/>
        </div>
    )
}