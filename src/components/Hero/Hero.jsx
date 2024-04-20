import React, { useState, useEffect } from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
    const [imageSrc, setImageSrc] = useState(getImageUrl("hero/heroImage.png"));

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 830) {
                setImageSrc(getImageUrl("hero/hero2Image.png"));
            } else {
                setImageSrc(getImageUrl("hero/heroImage.png"));
            }
        };

        // Initial call to set image source based on initial window width
        handleResize();

        // Event listener to update image source on window resize
        window.addEventListener('resize', handleResize);

        // Cleanup function to remove event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>Hi, I'm Gokul</h1>
                <p className={styles.description}>
                    I'm a software engineer with expertise in Python, Data Science, and Machine Learning. 
                    Additionally, I excel in building full-fledged applications using RESTful APIs, React.js, and Node.js. Let's collaborate and combine our skills to create impactful solutions!
                </p>
                <a href="mailto:gokulraj.karuppiah@gmail.com" className ={styles.contactBtn}>Contact Me</a>
            </div>
            <img src = {imageSrc} alt="Hero image of me" className={styles.heroImg} />
            <div className={styles.topBlur} />
            <div className={styles.bottomBlur} />
        </section>
    )
};