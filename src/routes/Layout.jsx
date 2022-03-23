import { Outlet } from "react-router-dom";
import BottomNavigation from "../components/navigation/BottomNavigation";

import TopNavigation from "../components/navigation/TopNavigation";

import styles from "./Layout.module.css";

const Layout = () => {
    return (
        <div className={styles.layout}>
            <header>
                <TopNavigation />
            </header>
            <main>
                <Outlet />
            </main>
            <footer>
                <BottomNavigation />
            </footer>
        </div>
    );
};

export default Layout;
