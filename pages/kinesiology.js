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
     {/* <Link href="/">
              <a>
                <Image 
                  priority
                  src="/images/carlos.jpg"
                  //className={utilStyles.borderCircle}
                  height={508}
                  width={348}
                  
                />
                </a>
            </Link>*/}
      <div className="middlePage"> 
    <section className={utilStyles.headingMd}>
        
        <h3>Kinesiology</h3>
        
         <p>Kinesiology is a holistic method of complementary therapy that uses muscle monitoring, as a biofeedback loop, to search the body for inbalances that may cause disease. </p> 
         <p>If the human body is balanced, then the body is healthy. </p>
         <p>Kinesiology is based on Western and Eastern healing methods.</p>
          
          <br />
    </section>
      </div>
    </Layout>
  )
}