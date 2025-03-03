"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Mail, Linkedin, FileText, BriefcaseBusiness } from "lucide-react"
import Link from "next/link"
import styles from "./Contact.module.css"

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const contactInfo = [
    { icon: Mail, text: "kuzinartem73@gmail.com", href: "mailto:kuzinartem73@gmail.com" },
    { icon: Linkedin, text: "LinkedIn", href: "http://www.linkedin.com/in/kuzin-artem" },
    { icon: BriefcaseBusiness, text: "hh.ru", href: "https://hh.ru/resume/a830efd0ff0e67e1570039ed1f314d6268674f" },
  ]

  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.container}>
        <motion.div
          className={styles.titleWrapper}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          ref={ref}
        >
          <h2 className={styles.title}>Get in Touch</h2>
        </motion.div>
        <div className={styles.content}>
          {contactInfo.map((item, index) => (
            <motion.a
              key={index}
              href={item.href}
              className={styles.contactItem}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <item.icon className={styles.icon} />
              <span className={styles.text}>{item.text}</span>
            </motion.a>
          ))}
          <Link href="/resume" className={styles.resumeLink}>
            <motion.div
              className={styles.contactItem}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FileText className={styles.icon} />
              <span className={styles.text}>View Resume</span>
            </motion.div>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Contact

