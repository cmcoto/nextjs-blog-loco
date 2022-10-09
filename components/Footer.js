import Navbar from "./Navbar";
import CookieConsent from "react-cookie-consent";


export default function Footer() {
    return (
        <footer><p>Designed and Coded by: Carlos Coto{' © '}{new Date().getFullYear()}</p> 
          <br />
          
          <CookieConsent
           location="bottom"
           buttonText="I Accept"
            cookieName="myAwesomeCookieName2"
            style={{ background: "#2B373B" }}
          buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
          expires={150}
          >
  This website uses cookies to enhance the user experience.{" "}
  <span style={{ fontSize: "10px" }}>By confirming "I Accept" you agree to the use of all cookies and measures.</span>
          </CookieConsent>
         </footer>
       
    );
  }