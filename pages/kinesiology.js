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


export default function Kinesiology() {
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
        
        <Heading color="800" pb="1rem">{t.kinesiology}</Heading>

        <p>{ t.kine_page_p1 }</p>
        <p>{ t.kine_page_p2 }</p>
        <strong> { t.kine_page_p3 } </strong>
        <li><strong>{ t.touch }</strong></li>
        <li><strong>{ t.ap1to5 }</strong></li>
        <li><strong>{ t.spk }</strong></li>
        <li><strong>{ t.stb }</strong></li>
        <li><strong>{ t.gui }</strong></li>
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