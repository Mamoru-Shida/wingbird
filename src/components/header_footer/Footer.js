import React from 'react';
import Fade from 'react-reveal/Fade'

const Footer = () => {
  return (
    <footer className="bck_red">
      <Fade delay={500}>
        <div className="font_righteous footer_logo_venue">株式会社ベストプラン</div>
        <div className="footer_copyright">
          株式会社ベストプラン 2018.All rights reserved
        </div>
      </Fade>
      
    </footer>
  );
};

export default Footer;