import React, { useState, useEffect } from 'react';
import '../styles/global.css'
import styles from '../components/sidebar.css'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from '../styles/theme';



function MyApp({ Component, pageProps }) {
    //Este primer use effect lo agregue porque parecia ayudar a cargar varias veces el locomotive
    //useEffect(()=> window.dispatchEvent(new Event('resize')), [Component])
  useEffect(() => {
    
      let scroll;
      import("locomotive-scroll").then((locomotiveModule) => {
          scroll = new locomotiveModule.default({
              el: document.querySelector("[data-scroll-container]"),
              smooth: true,
              smoothMobile: false,
              resetNativeScroll: true
          });
      });

      

      // `useEffect`'s cleanup phase
      return () => scroll.destroy();
     
  });


  
  return (
    <ChakraProvider theme={ theme }>
    <div id="outer-container">
        <const Menu pageWrapId={ "page-wrap" } outerContainerId={ "outer-container" } />
        <main id= "page-wrap" className="main" data-scroll-container>
            
            <layout>
                <Component {...pageProps} />
            </layout>
            
        </main>
    </div>
    </ChakraProvider>
  );
}

export default MyApp;