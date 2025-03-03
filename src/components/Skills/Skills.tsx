"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Image from "next/image"
import styles from "./Skills.module.css"

const skillGroups = [
    {
      category: "Programming Languages & Web Fundamentals",
      skills: [
        {
          name: "HTML5",
          icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg",
        },
        {
          name: "CSS3",
          icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg",
        },
        {
          name: "JavaScript",
          icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
        },
        {
          name: "TypeScript",
          icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg",
        },
      ],
    },
    {
      category: "Frameworks & Libraries",
      skills: [
        {
          name: "React",
          icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg",
        },
        // {
        //   name: "Angular",
        //   icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/angularjs/angularjs-original.svg",
        // },
        // {
        //   name: "Vue.js",
        //   icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/vuejs/vuejs-original.svg",
        // },
        {
          name: "Next.js",
          icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original.svg",
        },

      ],
    },
    {
      category: "State Management",
      skills: [
        {
          name: "Redux",
          icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg",
        },
      ],
    },
    {
      category: "Styling & Preprocessors",
      skills: [
        // {
        //   name: "Sass",
        //   icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg",
        // },
        {
          name: "Bootstrap",
          icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-original.svg",
        },
        {
          name: "Tailwind CSS",
          icon: "/icons/tailwindcss.svg",
        },
        {
          name: "Styled components",
          icon: "/icons/styledcomponents.svg",
        },

      ],
    },
    {
      category: "Build & Tooling",
      skills: [
        {
          name: "Webpack",
          icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/webpack/webpack-original.svg",
        },
        {
          name: "Vite",
          icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/vitejs/vitejs-original.svg",
        },
        {
          name: "npm",
          icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/npm/npm-original-wordmark.svg",
        },
        // {
        //   name: "Yarn",
        //   icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/yarn/yarn-original.svg",
        // },
      ],
    },
    {
      category: "Version Control",
      skills: [
        {
          name: "Git",
          icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg",
        },
        {
          name: "GitHub",
          icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original.svg",
        },
        {
          name: "GitLab",
          icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/gitlab/gitlab-original.svg",
        },
      ],
    },
  ]

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="skills" className={styles.skills}>
      <div className={styles.container}>
        <motion.div
          className={styles.titleWrapper}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          ref={ref}
        >
          <h2 className={styles.title}>Skills</h2>
          <p className={styles.subtitle}>The skills, tools and technologies I am really good at:</p>
        </motion.div>

        {skillGroups.map((group, groupIndex) => (
          <motion.div
            key={group.category}
            className={styles.skillGroup}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: groupIndex * 0.1 }}
          >
            <h3 className={styles.categoryTitle}>{group.category}</h3>
            <div className={styles.skillsGrid}>
              {group.skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  className={styles.skillItem}
                  whileHover={{ scale: 1.05, backgroundColor: "#252525" }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    className={styles.iconWrapper}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Image
                      src={skill.icon || "/placeholder.svg"}
                      alt={skill.name}
                      width={48}
                      height={48}
                      className={styles.icon}
                    />
                  </motion.div>
                  <span className={styles.skillName}>{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Skills

