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
import { Heading } from '@chakra-ui/react'
import { Box, Center, Flex, Spacer } from "@chakra-ui/react";


export default function Biomagnetism() {
  const router = useRouter();
  const { locale } = router;
  const t = (
    locale === 'en' ? en : // if 
    locale === 'de' ? de : // else if 
    locale === 'es' ? es : // else if
    null // else 
  );

  return (
    <Layout>
      <Head>
        <title>{t.biomag_page_title}</title>
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
        
        <Heading color="800" pb="1rem">{t.biomagnetism}</Heading>

        <p>{ t.biomagnetism_1 }</p>
        <p>{ t.biomagnetism_2 }</p>
        <p>{ t.biomagnetism_3 }</p>
       
        <br />
        <strong> {t.biomag_page_cost}</strong>

        
        <br />
        <br />
    </section>
      </div>
    </Layout>
  )
}