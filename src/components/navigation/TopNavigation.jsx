import { useState } from "react";
import { NavLink } from "react-router-dom";

import styles from "./TopNavigation.module.css";

//CSS MODULES ELLER INTE?

const TopNavigation = () => {
    const [showProjects, setShowProjects] = useState(true);

    return (
        <nav>
            <div>
                <ul className={styles.primaryNavWrapper}>
                    <li>
                        <button className={styles.dropDownBtn}>
                            <h3>Projects</h3>
                        </button>
                    </li>
                    <li>
                        <NavLink
                            to="/About"
                            className={({ isActive }) =>
                                isActive ? "link--active" : ""
                            }
                        >
                            About
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/Contact"
                            className={({ isActive }) =>
                                isActive ? "link--active" : ""
                            }
                        >
                            Experience
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default TopNavigation;
