import { useState } from "react";
import { NavLink } from "react-router-dom";

import DropdownNavigation from "./DropdownNavigation";

import styles from "./TopNavigation.module.css";

const TopNavigation = () => {
    const [show, setShow] = useState(false);

    function handleShowSubNav() {
        setShow((previousState) => (previousState = !previousState));
    }

    return (
        <nav>
            <ul className={`primary-wrapper ${styles.primary_nav_wrapper}`}>
                <li>
                    <button
                        className={`${styles.sub_navigation_btn} ${
                            show ? styles.link__active : ""
                        }`}
                        onClick={handleShowSubNav}
                    >
                        Project
                    </button>
                </li>
                <div className={styles.regular_link_wrapper}>
                    <li>
                        <NavLink
                            className={({ isActive }) =>
                                isActive ? "link--active" : ""
                            }
                            to="/"
                            onClick={() => setShow(false)}
                        >
                            About
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            className={({ isActive }) =>
                                isActive ? "link--active" : ""
                            }
                            to="/experence"
                            onClick={() => setShow(false)}
                        >
                            Experience
                        </NavLink>
                    </li>
                </div>
            </ul>
            <DropdownNavigation
                show={show}
                handleShowSubNav={handleShowSubNav}
            />
        </nav>
    );
};

export default TopNavigation;
