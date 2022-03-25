import { NavLink } from "react-router-dom";

import styles from "./BottomNavigation.module.css";

const BottomNavigation = () => {
    return (
        <aside className={styles.bottom_nav}>
            <ul className={styles.bottom_nav_wrapper}>
                <li>
                    <NavLink
                        to="/contact"
                        className={({ isActive }) =>
                            isActive ? "link--active" : ""
                        }
                    >
                        Contact
                    </NavLink>
                </li>
                <li>
                    {/* Arrorw on hover to indicate open in new tab? */}
                    <button
                        className={styles.social_link_btn}
                        onClick={() => {}}
                    >
                        <h5 className={styles.social_link_label}>
                            Social Link
                        </h5>
                    </button>
                </li>
            </ul>
        </aside>
    );
};

export default BottomNavigation;
