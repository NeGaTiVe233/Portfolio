"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import styles from "./Hero.module.css"
import AnimatedText from "./AnimatedText"

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <motion.div
          className={styles.content}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h1 className={styles.title}>
            Hi, I'm <AnimatedText text="Artem Kuzin" className={styles.highlight} color="#60a5fa" />
          </h1>
          <h2 className={styles.subtitle}>
            Frontend Developer
            <motion.span
              className={styles.underline}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            />
          </h2>
          <p className={styles.description}>
            Currently a third-year undergraduate pursuing a Bachelor's in 
            Information Systems and Technologies. Crafting exceptional digital 
            experiences with modern web technologies. Specialized in building scalable 
            frontend applications using Next.js, React, TypeScript.          
          </p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <motion.a
              href="#contact"
              className={styles.cta}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <span className={styles.ctaText}>Get in Touch</span>
            </motion.a>
          </motion.div>
        </motion.div>
        <motion.div
          className={styles.imageWrapper}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.5,
            ease: [0.6, -0.05, 0.01, 0.99],
          }}
        >
          <div className={styles.imageContainer}>
            <div className={styles.imageBackground} />
            <div className={styles.imageFrame}>
              <Image
                src="/avatar.jpeg"
                alt="Artem Kuzin Avatar"
                layout="fill"
                objectFit="cover"
                className={styles.image}
                priority
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero

