import Link from 'next/link'
import styles from './layout.module.css'
import { motion } from "framer-motion"

import { useRouter } from 'next/router';
import en from '../locales/en/en';
import de from '../locales/de/de';
import es from '../locales/es/es';
import { Box, Center, Circle } from "@chakra-ui/react";




export default function Welcome() {
  const router = useRouter();
  const { locale } = router;
  
  //const t =  locale  === 'en' ? en : de || 'de' ? de : es;
  //const t = locale === 'en' ? en : 'de' ? de : 'es' ? es : nul;
  const t = (
    locale === 'en' ? en : // if 
    locale === 'de' ? de : // else if 
    locale === 'es' ? es : // else if
    null // else 
  );
  
  
    return (
    <div className="Welcome">
      
        <h2>
          <quote> {t.quote_arthur} </quote> 
        </h2>
        
        <h3>
        {t.welcome} <Link href="/about"><a>Carlos Coto</a></Link>
        </h3>
        
      
        <a className={styles.center} href="tel:+41798591050">+41 79 859 10 50</a>
       
        {/*<Link href="/#Scheduler" scroll={false}><a>Book a Session!</a></Link>*/}
       

        <motion.p className={styles.center} whileInView={{ opacity: [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1] }} transition = {{
          delay: 2.0,
          ease: "easeOut",
          duration: 2
        }} animate={{ y: 100, scale: 2.0 }}>{ t.scroll } </motion.p>
        <motion.h1 className={styles.center}  whileInView={{ opacity: [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1] }} transition = {{
          delay: 2.0,
          ease: "easeOut",
          duration: 2
        }} animate={{ y: 100, scale: 2.0 }}
        >↓</motion.h1>
    </div>
    );
  }