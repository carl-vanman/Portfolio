import { Outlet } from "react-router-dom";
import BottomNavigation from "../components/navigation/BottomNavigation";

import TopNavigation from "../components/navigation/TopNavigation";

import styles from "./Layout.module.css";

/* Set header and footer to fixed? */

const Layout = () => {
    return (
        <div className={styles.layout}>
            {/* <img
                className={styles.smiley_background_image}
                src="smiley_bg.png"
                alt="Smiley background image"
            />
 */}
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
