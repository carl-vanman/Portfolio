import styles from "./About.module.css";

const About = () => {
    return (
        <section className={styles.wrapper}>
            <article className={styles.about_container}>
                <header>
                    <h3 className={styles.heading}>
                        Hello _
                        <span className={styles.heading_in_japanese}>
                            こんにちは
                        </span>
                    </h3>
                    <h5 className={styles.sub_heading}>Nice to meet you.</h5>
                </header>
                <div className={styles.body}>
                    <p>
                        My name is Carl, I'm a kind and humble person with a
                        creative and technical mind.
                        <br />
                        Constantly evolving Front-end developer, former tattoo
                        artist and Certified Harley Davidson technician.
                    </p>
                    {/* <p className={styles.body_date}>
                        <span>| </span>
                        {`${new Date().toDateString()}`}
                    </p> */}
                </div>
            </article>
        </section>
    );
};

export default About;
