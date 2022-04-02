/* import { useState } from "react"; */
import styles from "./Experience.module.css";

const Experience = () => {
    /* const [experienceList] = useState([
        "Html",
        "Css",
        "Javascript",
        "Typescript",
        "React.js",
        "React Native",
        "Vue.js",
        "Contentful",
        "Gatsby",
        "GraphQL",
        "Wordpress",
        "Php",
        "Node.js",
        "Azure",
        "Figma",
    ]); */

    return (
        <section className={`primary-wrapper ${styles.wrapper}`}>
            <article className={styles.experience_container}>
                <header>
                    <h3 className={styles.heading}>Junior _</h3>
                    <h5 className={styles.sub_heading}>My journey</h5>
                </header>
                <div className={styles.body_text}>
                    <p>
                        This sommer I will grautuate from It-Höskolan Front-end
                        program with a solid foundation. <br /> I've had the
                        opertunity to work with many well known langueses,
                        framework and techniques.
                    </p>
                </div>
            </article>
        </section>
    );
};

export default Experience;
