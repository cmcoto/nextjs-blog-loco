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
import es from '../locales/es/es';
import corrective_de from '../locales/de/corrective_de';
import corrective_en from '../locales/en/corrective_en';
import corrective_es from '../locales/es/corrective_es';

export default function Corrective() {
  const router = useRouter();
  const { locale } = router;
  const t = (
    locale === 'en' ? ( en, corrective_en ) : // if 
    locale === 'de' ? corrective_de  : // else if 
    locale === 'es' ? ( es, corrective_es ) : // else if
    //locale === 'de' ? about_de :
    null // else 
  );

  return (
    <Layout>
      <Head>
        <title>{ t.corrective_title }</title>
      </Head>
      <Link href="/">
              <a>
                <Image 
                  priority
                  src="/images/correct.jpeg"
                  className={styles.center}
                  height={508}
                  width={348}
                  padding-left={200}
                  
                  
                />
              </a>
            </Link>
      <div className="middlePage"> 
    <section className={utilStyles.headingMd}>
        
        <h3>{ t.corrective_title }</h3>
        <p> { t.p1 }</p>
        <p> { t.p2 }</p>
         
        
    </section>
      </div>
    </Layout>
  )
}