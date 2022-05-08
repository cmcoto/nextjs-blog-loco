import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout_me'
import Navbar from '../components/Navbar'
import utilStyles from '../styles/utils.module.css'
import styles from '../components/layout.module.css'
import Image from 'next/image'

import { useRouter } from 'next/router';
import en from '../locales/en';
import de from '../locales/de';


export default function Coto() {
  const router = useRouter();
  const { locale } = router;
  const t = locale === 'en' ? en : de;

  return (
    <Layout>
      <Head>
        <title>About Carlos Coto</title>
      </Head>
      <Link href="/">
              <a>
                <Image 
                  priority
                  src="/images/carlos.jpg"
                  //className={utilStyles.borderCircle}
                  height={508}
                  width={348}
                  
                />
              </a>
            </Link>
      <div className="middlePage"> 
    <section className={utilStyles.headingMd}>
        
        <h3>{ t.aboutCarlos }</h3>
        <p>Hello my name is Carlos Coto. I am from El Salvador, Central America, currently living in Lengnau BE, Switzerland.
        </p>
        <p>I'm a Clinical Psychologist and ex-university professor, 13 years, from the School of Psychology, Universidad Dr. Jose Matias Delgado.</p>
         <p> 
        <p>I have a Master's in Clinical and Health Psychology, from ITEAP, Malaga Spain.</p> 
         <p>I am the creator of HandLink Technique, an Energy Psychology method to deal with ANY negative emotion, and negative thoughts.</p> 
          <br />
          <li>Kinesiology (Applied Physiology, Sport Kinesiology, Touch For Health)</li>
          <li>Psychology Counseling (Anxiety Disorders, Eating Disorders, Psychooncology)</li> 
          <li>NLP</li>
          <li>Ericksonian Hypnosis</li> 
          <li>Biomagnetism by Dr. Goiz</li>
        </p>
    </section>
      </div>
    </Layout>
  )
}