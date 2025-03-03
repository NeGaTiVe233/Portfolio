import Link from "next/link"
import styles from "./Footer.module.css"

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.logoWrapper}>
            <Link href="/" className={styles.logo}>
              Artem Kuzin
            </Link>
          </div>
          <div className={styles.links}>
            <a href="http://www.linkedin.com/in/kuzin-artem" className={styles.link}>
              LinkedIn
            </a>
            <a href="https://hh.ru/resume/a830efd0ff0e67e1570039ed1f314d6268674f" className={styles.link}>
              hh.ru
            </a>
            <a href="https://github.com/NeGaTiVe233" className={styles.link}>
              GitHub
            </a>
            <a href="mailto:kuzinartem73@gmail.com" className={styles.link}>
              Email
            </a>
            
          </div>
        </div>
        <div className={styles.copyright}>© {new Date().getFullYear()} Artem Kuzin. All rights reserved.</div>
      </div>
    </footer>
  )
}

export default Footer

