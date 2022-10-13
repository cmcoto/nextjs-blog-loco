import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout_me'
import Navbar from '../components/Navbar'
import utilStyles from '../styles/utils.module.css'
import styles from '../components/layout.module.css'
import Image from 'next/image'

import { useRouter } from 'next/router';
import en from '../locales/en/en';
import de from '../locales/de/de';
import es from '../locales/es/es';
import about_de from '../locales/de/about_de';
import about_en from '../locales/en/about_en';
import about_es from '../locales/es/about_es';
import { Heading } from '@chakra-ui/react'
import { Box, Center, Flex, Spacer } from "@chakra-ui/react";



export default function Coto() {
  const router = useRouter();
  const { locale } = router;
  const t = (
    locale === 'en' ? ( en, about_en ) : // if 
    locale === 'de' ?  about_de  : // else if 
    locale === 'es' ? ( es, about_es ) : // else if
    //locale === 'de' ? about_de :
    null // else 
  );

  return (
    <Layout>
      <Head>
        <title>About Carlos Coto</title>
      </Head>

      <Center h="70vh">
      <Box p="5" maxW="320px" borderWidth="1px">
        
        <Flex align="baseline" mt={2}>
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
          </Flex>
          </Box>
    </Center>
    <Spacer />

      <div className="middlePage"> 
    <section className={utilStyles.headingMd}>
        
        <Heading color="800">{ t.aboutCarlos }</Heading>
        
        <p> { t.p1 }</p>
        <p> { t.p2 }</p>
         <p> 
        <p> { t.p3 }</p> 
         <p> { t.p4 }</p> 
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