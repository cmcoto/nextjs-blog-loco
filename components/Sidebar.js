import React from 'react';
import { bubble as Menu } from 'react-burger-menu'
import Link from 'next/link'



class Sidebar extends React.Component {
  showSettings (event) {
    event.preventDefault();
    

    
  }

  render () {
    // NOTE: You also need to provide styles, see https://github.com/negomi/react-burger-menu#styling
    return (
      <Menu>
        <a id="home" className="menu-item" href="/">HOME</a>
        <a id="about" className="menu-item" href="/about">ABOUT</a>
        
        {/*<a onClick={ this.showSettings } className="menu-item--small" href="">Settings</a> */}
        

      </Menu>
    );
  }
}

export default Sidebar;