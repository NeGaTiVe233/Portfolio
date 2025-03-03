"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import styles from "./About.module.css"

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <motion.div
          className={styles.titleWrapper}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          ref={ref}
        >
          <h2 className={styles.title}>About Me</h2>
        </motion.div>
        <motion.div
          className={styles.content}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {[
            "I'm a graduate student pursuing a Master of Science in Applied Data Analytics at Boston University, with a strong foundation in Computer Science and Communication Engineering from Manipal University Jaipur. My academic journey has equipped me with a robust skill set in statistical analysis, machine learning, and data visualization.",
            "With experience as a Proprietary Trader at Jain Capital, I've honed my skills in financial analysis and high-frequency trading. I'm passionate about leveraging data to drive insights and solve complex problems across various domains, including finance, technology, and healthcare.",
            "I'm constantly exploring new techniques and tools in data science and machine learning, aiming to stay at the forefront of this rapidly evolving field. I'm excited about the potential of data analytics to make a positive impact and drive informed decision-making in businesses and organizations.",
          ].map((paragraph, index) => (
            <motion.p
              key={index}
              className={styles.paragraph}
              whileHover={{ scale: 1.05, color: "#60A5FA" }}
              transition={{ duration: 0.2 }}
            >
              {paragraph}
            </motion.p>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default About

