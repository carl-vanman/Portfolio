import { NavLink } from "react-router-dom";

import CustomLink from "./CustomLink";

import styles from "./TopNavigation.module.css";

const TopNavigation = () => {
    return (
        <nav>
            <ul className={styles.primary_nav_wrapper}>
                <li className={styles.custom_link}>
                    <CustomLink to="/projects">
                        <h3 className={styles.custom_link_label}>Projects</h3>
                    </CustomLink>
                </li>
                <div className={styles.regular_link_wrapper}>
                    <li>
                        <NavLink
                            to="/about"
                            className={({ isActive }) =>
                                isActive ? "link--active" : ""
                            }
                        >
                            About
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/contact"
                            className={({ isActive }) =>
                                isActive ? "link--active" : ""
                            }
                        >
                            Experience
                        </NavLink>
                    </li>
                </div>
            </ul>
        </nav>
    );
};

export default TopNavigation;
