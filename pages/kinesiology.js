import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout'
import Navbar from '../components/Navbar'
import utilStyles from '../styles/utils.module.css'
import styles from '../components/layout.module.css'
import Image from 'next/image'


export default function Coto() {
  return (
    <Layout>
      <Head>
        <title>Kinesiology</title>
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
        
        <h3>Kinesiology</h3>
        <p>
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