import Link from 'next/link'
import Image from 'next/image'
import { motion } from "framer-motion"
import { redirect } from 'next/dist/server/api-utils';
import { useRouter } from 'next/router';
import en from '../locales/en/en';
import de from '../locales/de/de';
import es from '../locales/es/es';


export default function Navbar() {
    const router = useRouter();
    const { locale } = router;
    const t = (
      locale === 'en' ? en : // if 
      locale === 'de' ? de : // else if 
      locale === 'es' ? es : // else if
      null // else 
    );
  
    const changeLanguage = (e) => {
      const locale = e.target.value;
      router.push(router.pathname, router.asPath, { locale });
    }

    return (
        <nav>
            <div className="logo">
                {/* <Image src="/images/manik.png" width= {50} height= {50}/> */}
            </div>
            <div>
            
            <a id="home" className="menu-item" href={ t.home }>{ t.menu_home }</a>
            <a id="about" className="menu-item" href={ t.about_link }>{ t.menu_about }</a>
            </div>
        <br />
      <div className="select"> 
    <select
        onChange={changeLanguage}
        defaultValue={ "de" }
        className="text-white text-shadow-sm text-lg bg-transparent tracking-wide"
      >
        <option className="text-black" value="en">EN</option>
        <option className="text-black" value="de">DE</option>
        <option className="text-black" value="es">ES</option>
    </select>
    </div>  
 

        </nav>
        
    );
  }