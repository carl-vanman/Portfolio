import { useState, useEffect } from "react";
import { AiFillPlayCircle } from "react-icons/ai";
import { AiFillPauseCircle } from "react-icons/ai";
import styles from "./Experience.module.css";

const Experience = () => {
    const [pause, setPause] = useState(false);
    const [experiences, setExperiences] = useState([
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
    ]);

    const toolTip = [
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
    ];

    function handlePaus() {
        setPause((previousState) => (previousState = !previousState));
    }

    useEffect(() => {
        const interval = setInterval(() => {
            setExperiences((listOrder) => {
                const [firstItem, ...rest] = listOrder;
                return [...rest, firstItem];
            });
        }, 2000);
        if (pause) {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [pause]);

    return (
        <section className={`primary-wrapper ${styles.wrapper}`}>
            <article className={styles.text_container}>
                <header>
                    <h3 className={styles.heading}>Junior _</h3>
                    <h5 className={styles.sub_heading}>My journey</h5>
                </header>
                <div className={styles.body_text}>
                    <p>
                        This summer I will be graduating from IT-Högskolan
                        Front-end program with a solid foundation.
                        <br /> I've had the opportunity to work with well known
                        languages, framework and techniques.
                    </p>
                </div>
            </article>
            <article className={styles.experience_container}>
                <button
                    className={styles.icons_container}
                    style={{ alignSelf: "flex-end", width: "fit-content" }}
                    onClick={handlePaus}
                >
                    {pause ? (
                        <AiFillPlayCircle
                            className={styles.icons}
                            aria-label="Play"
                        />
                    ) : (
                        <AiFillPauseCircle
                            className={styles.icons}
                            aria-label="Pause"
                        />
                    )}
                </button>
                <div
                    className={styles.experience_List_container}
                    title={toolTip}
                >
                    {experiences &&
                        experiences.map((experience) => (
                            <h3 className={styles.experience} key={experience}>
                                {experience}
                            </h3>
                        ))}
                </div>
            </article>
        </section>
    );
};

export default Experience;
