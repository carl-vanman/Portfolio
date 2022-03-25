import styles from "./About.module.css";

const About = () => {
    return (
        <section className={styles.wrapper}>
            <article className={styles.about_container}>
                <header>
                    <h3 className={styles.heading}>
                        Hello _
                        <h3 className={styles.heading_japanese}>こんにちは</h3>
                    </h3>
                    <h5 className={styles.sub_heading}>My name is Carl</h5>
                </header>
                <div>
                    <p>
                        Mauris vel ante vehicula volutpat. Nullam blandit
                        hendrerit dui ut euismod. Mauris finibus pretium
                        faucibus. Pellentesque tortor dui, cursus at nibh vitae,
                        luctus malesuada tortor. Fusce vel dapibus mauris, non
                        tincidunt lectus.
                    </p>
                </div>
            </article>
        </section>
    );
};

export default About;
