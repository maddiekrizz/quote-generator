import React from 'react';
import "./Footer.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faLinkedin,faGithub,faYoutube,faSkype} from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  return (
    <div id="c">
      <footer class="footer-distributed">

<div class="footer-left">
    <hr></hr>
    <hr></hr>
    <h3> More <span>About</span> Us<span>...!</span></h3>
<hr className='hr'></hr>
<hr></hr>
    

    <p class="footer-company-name">Copyright © 2023 <strong>MADHURA</strong> All rights reserved</p>
</div>

<div class="footer-center">
    <div>
        <i class="fa fa-map-marker"></i>
        <p><span>Coimbatore</span>
            Tamilnadu</p>
    </div>

    <div>
        <i class="fa fa-phone"></i>
        <p>+91 6382649306</p>
    </div>
    <div>
        <i class="fa fa-envelope"></i>
        <p className='mail'><a href="mailto:madhuranavaneethakrishnan@gmail.com">madhurakrishnan31@gmail.com</a></p>
    </div>
</div>
<div class="footer-right">
    <p class="footer-company-about">
        <span>About Us</span>
        <strong>RANDOM QUOTE GENERATOR-</strong>If you're looking for some motivational quotes or inspirational quotes to positively 
        influence your day, you've come to the right place. 
        This is exactly what the Random Quotes Generator is able to do.
    </p>

    <div class="footer-icons">
    <p className='icon'>
      <p className='ic'>
      <a
            href="https://www.linkedin.com/in/madhura-krishnan-a38887254?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BYZ9Y85%2FpSE6GMO07OcjqlA%3D%3D"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              color="#4d4d4e"
              className="anchor-icon"
            />
          </a>
      </p>
      <p className='ic'>
          <a
            href="https://github.com/maddiekrizz"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faGithub}
              color="#4d4d4e"
              className="anchor-icon"
            />
          </a>
        </p>
        <p className='ic'>
          <a
            href="https://youtube.com/@madhura1389"
            rel="noreferrer"
            target="_blank"
          >
            <FontAwesomeIcon
              icon={faYoutube}
              color="#4d4d4e"
              className="anch-icon"
            />
          </a>
        </p>
        <p className='ic'>
          <a href="skype:live:madhurakrishnan31" rel="noreferrer" target="_blank">
            <FontAwesomeIcon
              icon={faSkype}
              color="#4d4d4e"
              className="anchor-icon"
            />
          </a>
        </p>
    </p>
    </div>
</div>
</footer>
    </div>
  );
};
export default Footer;