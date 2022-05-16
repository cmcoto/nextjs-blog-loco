import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout'
import Navbar from '../components/Navbar'
import utilStyles from '../styles/utils.module.css'
import styles from '../components/layout.module.css'
import Image from 'next/image'
import { useRouter } from 'next/router';
import en from '../locales/en/en';

import de from '../locales/de/de';



export default function Kinesiology() {
  const router = useRouter();
  const { locale } = router;
  const t = locale === 'en' ? en : de;

  return (
    <Layout>
      <Head>
        <title>{t.kine_page_title}</title>
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
        
        <h3>{t.kinesiology}</h3>

        <p>{ t.kine_page_p1 }</p>
        <p>{ t.kine_page_p2 }</p>
        <p> { t.kine_page_p3 }</p>
        <p>{ t.kine_page_p4 }</p>
        <br />
        <strong> {t.kine_page_cost}</strong>

        
        <br />
        <br />
    </section>
      </div>
    </Layout>
  )
}