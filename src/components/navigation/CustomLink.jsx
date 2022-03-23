import { Link, useMatch, useResolvedPath, NavLink } from "react-router-dom";
import styles from "./CustomLink.module.css";

const CustomLink = ({ children, to, ...props }) => {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });

    return (
        <div>
            <Link className={match ? "link--active" : ""} to={to} {...props}>
                {children}
            </Link>
            <ul
                className={`${styles.dropdown_nav_wrapper}
                    ${
                        match
                            ? styles.dropdown_nav_show
                            : styles.dropdown_nav_hide
                    }
                `}
            >
                <li className={styles.dropdown_nav_link}>
                    <NavLink to="/projectOne">Test project 1</NavLink>
                </li>
                <li className={styles.dropdown_nav_link}>
                    <NavLink to="/projectTwo">Lightning test project 2</NavLink>
                </li>
                <li className={styles.dropdown_nav_link}>
                    <NavLink to="/projectThree">Pro 3</NavLink>
                </li>
            </ul>
        </div>
    );
};

export default CustomLink;
