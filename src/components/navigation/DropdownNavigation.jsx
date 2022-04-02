import { NavLink } from "react-router-dom";
import styles from "./DropdownNavigation.module.css";

const DropdownNavigation = ({ show, handleShowSubNav }) => {
    return (
        <ul
            className={`${styles.dropdown_nav_wrapper}
                    ${
                        show
                            ? styles.dropdown_nav_show
                            : styles.dropdown_nav_hide
                    }
                `}
        >
            <li className={styles.dropdown_nav_link}>
                <NavLink to="/projectOne" onClick={handleShowSubNav}>
                    Test project 1
                </NavLink>
            </li>
            <li className={styles.dropdown_nav_link}>
                <NavLink to="/projectTwo" onClick={handleShowSubNav}>
                    Lightning test project 2
                </NavLink>
            </li>
            <li className={styles.dropdown_nav_link}>
                <NavLink to="/projectThree" onClick={handleShowSubNav}>
                    Pro 3
                </NavLink>
            </li>
        </ul>
    );
};

export default DropdownNavigation;
