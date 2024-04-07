import React from 'react'
import { getImageUrl } from '../../utils'
import styles from './Hero.module.css'

const Hero = () => {
    return (
        <>
            <section className={styles.container}>
                <div className={styles.content}>
                    <h1 className={styles.title}>Hi, I'm Sk Nadim</h1>
                    <p className={styles.description}>I'm a full-stack developer with internships experience using React and
                        NodeJS. Reach out if you'd like to learn more!</p>
                    <a href="" className={styles.contactBtn}>Contact Me</a>
                </div>
                <img src={getImageUrl("Hero/Hero.png")} alt="" className={styles.heroImg} />
            </section>
        </>
    );
};

export default Hero;
