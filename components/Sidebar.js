import React from 'react';
import { bubble as Menu } from 'react-burger-menu'
import Link from 'next/link'
import { useRouter } from 'next/router';
import en from '../locales/en';
import de from '../locales/de';


export default function Sidebar() {
  const router = useRouter();
  const { locale } = router;
  const t = locale === 'en' ? en : de;

  const changeLanguage = (e) => {
    const locale = e.target.value;
    router.push(router.pathname, router.asPath, { locale });
  }

  return (
    <Menu>
    <a id="home" className="menu-item" href="/">HOME</a>
    <a id="about" className="menu-item" href="/about">ABOUT</a>
    <br />
    {/*<a onClick={ this.showSettings } className="menu-item--small" href="">Settings</a> */}
    
    <select
        onChange={changeLanguage}
        defaultValue={ "en" }
        className="text-white text-shadow-sm text-lg bg-transparent tracking-wide"
      >
        <option className="text-black" value="en">EN</option>
        <option className="text-black" value="de">DE</option>
    </select>

  </Menu>
  );
}