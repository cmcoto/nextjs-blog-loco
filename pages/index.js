import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout_index'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'
import { motion } from "framer-motion"
import { useLocomotiveScroll } from 'react-locomotive-scroll';
import React from "react";
import { InlineWidget } from 'react-calendly';

import { useRouter } from 'next/router';
import en from '../locales/en/en';
import de from '../locales/de/de';
import es from '../locales/es/es';


export default function Home({ allPostsData }) {
  const router = useRouter();
  const { locale, locales } = router;
  //const t = locale === 'en' ? en : de || 'es';
  const t = (
    locale === 'en' ? en : // if 
    locale === 'de' ? de : // else if 
    locale === 'es' ? es : // else if
    null // else 
  );



  return (
    console.log(locale, locales),
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
    <div className="Angebot">
      
    <section className={utilStyles.headingMd}>
        
        <br />
        <br />
        <div className="bigName">
          <div className="name-h1" data-scroll data-scroll-repeat data-scroll-call="toggleBackToTop" data-scroll-direction="horizontal" data-scroll-speed="4" data-scroll-position="top">
            <hi>βαθύς</hi>
          </div>
        </div>
        <motion.h2 data-scroll data-scroll-direction="horizontal" data-scroll-speed="6">By Carlos Coto</motion.h2>
        <br />
        <br />
        <br />
        <motion.p className="firstPhrase"
        whileInView="visible" 
        initial= {{backgroundColor: "none"}}
        animate={{
          
          backgroundColor: "yellow",
          boxShadow: "10px 10px 0 rgba(0, 0, 0, 0.2)",
          position: "center",
          
          
        }}
        
        
        transition = {{
          delay: 0.5
          
        }}

        
        
        whileInView= {{scale: [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1]}}
        data-scroll-target="#Angebot"
        ><strong>βαθύς (Bathus)</strong> {t.yellow_tag} <strong>{t.deep}</strong>.
        </motion.p>
        <br />
        <br />
        <motion.p
        whileInView="visible" 
        initial= {{backgroundColor: "none"}}
        animate={{
          
          backgroundColor: "lightblue",
          boxShadow: "10px 10px 0 rgba(0, 0, 0, 0.2)",
          position: "center",
          
        }}
        
        
        transition = {{
          delay: 1.5
          
          
        }}
        whileInView= {{scale: [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,1],
          rotate: 15
          
        }}
        
        style={{ originX: 0.3 }} ><strong>{t.deep}</strong> { t.blue_tag }<strong>↓</strong></motion.p>
        <div className={utilStyles.grid} data-scroll  data-scroll-speed="5">
        
        <motion.p
        whileInView="visible" 
        initial= {{backgroundColor: "none"}}
        animate={{
          
          backgroundColor: "lightgreen",
          boxShadow: "10px 10px 0 rgba(0, 0, 0, 0.2)",
          position: "center",
          
        }}
        
        
        transition = {{
          delay: 1.5
          
          
        }}
        whileInView= {{scale: [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,1],
          rotate: -15
          
        }}
        
        style={{ originX: 0.8 }} ><strong>Deep</strong> { t.green_tag }<strong>↓</strong></motion.p>
        <div className={utilStyles.grid} data-scroll  data-scroll-speed="5"></div>

        <motion.a animate={{boxShadow: "10px 10px 0 rgba(0, 0, 0, 0.2)"}} 
        whileHover={{
          scale: 1.1,
          transition: { duration: 0.1 },
        }}
        whileTap={{ scale: 0.9 }}
        href={ t.about_link } className={utilStyles.card} style={{backgroundColor: "#D8BFD8"}}>
        <h2>{ t.hello }</h2>
        <p>{ t.i_am }</p>
         <p> 
          <br />
          <strong>{ t.i_know }</strong>
          <li>{t.kinesiology}</li>
         
          <li>{t.nlp}</li>
          <li>{t.hypnosis}</li> 
          <li>{t.biomagnetism}</li>
        </p>
        </motion.a>
        
        
            <motion.a animate={{boxShadow: "10px 10px 0 rgba(0, 0, 0, 0.2)"}} 
            whileHover={{
              scale: 1.1,
              transition: { duration: 0.1 },
            }}
            whileTap={{ scale: 0.9 }}
            href={ t.kinesiology_link } className={utilStyles.card} style={{backgroundColor: "#4682B4"}}>
              <h2>{t.kinesiology}&rarr;</h2>
              <li>{t.ap}</li>
              <li>{t.sport_k}</li>
              <li>{t.neurokinesiology}</li>
              <li>{t.tfh}</li>
            </motion.a>

            <motion.a animate={{boxShadow: "10px 10px 0 rgba(0, 0, 0, 0.2)"}} 
            whileHover={{
              scale: 1.1,
              transition: { duration: 0.1 },
            }}
            whileTap={{ scale: 0.9 }}
            href="https://nextjs.org/learn" className={utilStyles.card} style={{backgroundColor: "#717CA3"}}>
              <h2> {t.psychology} &rarr;</h2>
              <li>{t.anxiety}</li>
              <li>{t.eating}</li>
              <li>{t.trauma}</li> 
              <li>{t.psychooncology}</li> 
            </motion.a>

            <motion.a animate={{boxShadow: "10px 10px 0 rgba(0, 0, 0, 0.2)"}} 
            whileHover={{
              scale: 1.1,
              transition: { duration: 0.1 },
            }}
            whileTap={{ scale: 0.9 }}
            href="https://github.com/vercel/next.js/tree/master/examples" className={utilStyles.card} style={{backgroundColor: "#F0DFBD"}}>
              <h2>{t.handlink} &rarr;</h2>
              <p>{t.handlink_1}</p>
            </motion.a>
            <motion.a animate={{boxShadow: "10px 10px 0 rgba(0, 0, 0, 0.2)"}} 
            whileHover={{
              scale: 1.1,
              transition: { duration: 0.1 },
            }}
            whileTap={{ scale: 0.9 }}
            href={t.biomagnetism_link} className={utilStyles.card} style={{backgroundColor: "lightblue"}}>
              <h2>{t.biomagnetism}&rarr;</h2>
              <p>{t.biomagnetism_2}</p>
            </motion.a>

            <motion.a animate={{boxShadow: "10px 10px 0 rgba(0, 0, 0, 0.2)"}} 
            whileHover={{
              scale: 1.1,
              transition: { duration: 0.1 },
            }}
            whileTap={{ scale: 0.9 }}
            href="https://github.com/vercel/next.js/tree/master/examples" className={utilStyles.card} style={{backgroundColor: "lightblue"}}>
              <h2>SOTAI&rarr;</h2>
              <p> { t.sotai_p }</p>
            </motion.a>
          
        </div>
      </section>
    </div>

    <div className="bottomPage">
      {/*<section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
            <Link href={`/posts/${id}`}>
              <a>{title}</a>
            </Link>
            <br />
            <small className={utilStyles.lightText}>
              <Date dateString={date} />
            </small>
          </li>
          ))}
        </ul>
          </section>*/}
      <section className="Scheduler" id="Scheduler">
        <h2>Schedule a session with me:</h2>
      {/*<!-- Calendly badge widget begin -->*/}
      <InlineWidget url="https://calendly.com/cmcoto" />
{/*<!-- Calendly badge widget end -->*/}
      </section>
      <section className="Address" id="Address">
        <h2>Therapy Room Located at:</h2>
        <h2>@ Rötistrasse 2a, 4532 Feldbrunnen-St. Niklaus</h2>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2709.8070169261837!2d7.55348261551794!3d47.2203582225725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4791d794a612c8fd%3A0x8ffeda9833664de2!2sR%C3%B6tistrasse%202A%2C%204532%20Feldbrunnen-St.%20Niklaus!5e0!3m2!1sen!2sch!4v1659449761985!5m2!1sen!2sch" width="100%" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      <h3>Papers and documents at:</h3>
      <h3>Solothurnstrasse 51, 2543 Lengnau BE</h3>
      </section>
    </div>
    </Layout>
  )
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}
