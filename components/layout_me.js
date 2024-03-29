import Head from 'next/head'
import Image from 'next/image'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import Navbar from './Navbar'
import Footer from './Footer'
import { motion } from "framer-motion"
import Sidebar from './Sidebar'
import { useRouter } from 'next/router';
import en from '../locales/en/en';
import de from '../locales/de/de';
import es from '../locales/es/es';
import React, { useState, useEffect } from 'react';

const name = 'Carlos Coto'
export const siteTitle = 'Kinesiology Coto'

export default function Layout({ children, home }) {
  //The following three are for translation purposes of EN and DE
  const router = useRouter();
  const { locale } = router;
  const t = (
    locale === 'en' ? en : // if 
    locale === 'de' ? de : // else if 
    locale === 'es' ? es : // else if
    null // else 
  );

   //FUNCTION FOR SCREEN SIZE AND SHOWING NAVBAR OR NOT

   const [isDesktop, setDesktop] = useState(false);

   useEffect(() => {
   if (window.innerWidth > 1250) {
   setDesktop(true);
   } else {
   setDesktop(false);
   }
   
   const updateMedia = () => {
   if (window.innerWidth > 1250) {
     setDesktop(true);
   } else {
     setDesktop(false);
   }
   };
   window.addEventListener('resize', updateMedia);
   return () => window.removeEventListener('resize', updateMedia);
   }, []);
   //---end of screen check

  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/images/manik.png" />
        <meta
          name="Kinesiology Coto"
          content="Kinesiology Praxis Clinic of Carlos Coto"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>


      <div>
      
      {isDesktop ? (
              
            <Navbar />
          ) : (
            <Sidebar /> 
          )}
      
          
      
      
        
      </div>


      <header className={styles.header}>
        {home ? (
          <>
            <Image
              priority
              src="/images/manik.png"
              //className={utilStyles.borderCircle}
              height={144}
              width={144}
              alt={name}
            />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
        ) : (
          <>
            <Link href="/">
              <a>
                <Image
                  priority
                  src="/images/manik.png"
                  className={utilStyles.borderCircle}
                  height={108}
                  width={108}
                  alt={name}
                />
              </a>
            </Link>
            <h2 className={utilStyles.headingLg}>
              <Link href="/">
                <a className={utilStyles.colorInherit}>{name}</a>
              </Link>
            </h2>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
      <motion.div whileHover={{ scale: 1.2 }} className={styles.backToHome} >
        <Link href="/">
          <a>← { t.back_to_home }</a>
        </Link>
      </motion.div>
      )}
      <Footer />
    </div>
  )
}
