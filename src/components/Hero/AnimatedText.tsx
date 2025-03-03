"use client"

import { motion } from "framer-motion"
import styles from "./AnimatedText.module.css"

interface AnimatedTextProps {
  text: string
  className?: string
  color?: string
}

export default function AnimatedText({ text, className = "", color = "#60a5fa" }: AnimatedTextProps) {
  return (
    <motion.span className={`${styles.animatedText} ${className}`} whileHover="hover" initial="initial">
      {text.split("").map((char, index) => (
        <motion.span
          key={index}
          className={styles.char}
          style={{ color }}
          variants={{
            initial: {
              y: 0,
              scale: 1,            
            },
            hover: {
              y: -4,
              scale: 1.2,
              transition: {
                type: "spring",
                stiffness: 300,
                damping: 15,
                delay: index * 0.03,
              },
            },
          }}
        >
          {char}
        </motion.span>
      ))}
    </motion.span>
  )
}

