import styles from "./About.module.css";

const About = () => {
    return (
        <section className={`primary-wrapper ${styles.wrapper}`}>
            <article className={styles.about_container}>
                <header>
                    <h3 className={styles.heading}>
                        Hello _
                        <span className={styles.heading_in_japanese}>
                            こんにちは
                        </span>
                    </h3>
                    <h5 className={styles.sub_heading}>Nice to meet you</h5>
                </header>
                <div className={styles.body_text}>
                    <p>
                        My name is Carl, I'm a kind and humble person with a
                        creative and technical mind.
                        <br />
                        Constantly evolving Front-end developer, former tattoo
                        artist and Certified Harley Davidson technician.
                    </p>
                </div>
            </article>
            <div className={styles.circle}></div>
        </section>
    );
};

export default About;
