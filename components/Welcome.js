import Link from 'next/link'
import styles from './layout.module.css'
import { motion } from "framer-motion"




export default function Welcome() {
    return (
    <div className="Welcome">
        <h2>
          <quote>"Health is not everything, but without health everything is nothing."</quote> - Arthur Schopenhauer
        </h2>
        <h3>
           Welcome to the Kinesiology Praxis of <Link href="/about"><a>Carlos Coto</a></Link>
        </h3>
        
        <a className={styles.center} href="tel:+41798591050">+41 79 859 10 50</a>
        <motion.p className={styles.center} whileInView={{ opacity: [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1] }} transition = {{
          delay: 2.0,
          ease: "easeOut",
          duration: 2
        }} animate={{ y: 100, scale: 2.0 }}>Scroll</motion.p>
        <motion.h1 className={styles.center}  whileInView={{ opacity: [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1] }} transition = {{
          delay: 2.0,
          ease: "easeOut",
          duration: 2
        }} animate={{ y: 100, scale: 2.0 }}
        >↓</motion.h1>
    </div>
    );
  }