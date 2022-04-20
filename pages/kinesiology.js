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
         <p>Kinesiology is based on Western  and Eastern Traditional Chinese healing methods.</p>
         <p>With Kinesiology you may identify and balance health problems and disorders in the physical, mental and spiritual areas.</p>
         <p>Your body <strong>knows why</strong> it is out of balance, and by gaining this balance back, then you will gain health.</p>
          <br />
        <p>I have studied the following methods:</p>
        <li>Touch For Health 1-4</li>
        <li>Applied Physiology 1-5</li>
        <li>Sport Kinesiology 1 with John Maguire</li>
        <li>Simply The Brain with Jacque Mooney</li>
        <li>Gui: Understanding and Transporting Negative Energy with Ron Wayman</li>
        <li>With the help of Jacque Mooney, I have been able to connect Handlink Technique with Applied Physiology, so I may use the speed of Handlink whith the robust base that Applied Physiology has in healing.</li>
        <br />
        <strong>Since I'm still studying to have a Diploma, I am still not accepted by the Insurance Companies here in Switzerland. Therefore the cost per hour is: 45 CHF</strong>
        <br />
        <br />
    </section>
      </div>
    </Layout>
  )
}