import React from 'react';

const Location = () => {
  return (
    <div className="location_wrapper">
      
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3212.28216481402!2d139.2383636152781!3d36.378162780037634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x601ee5ac522f66e9%3A0x95fad3ea5002cdfd!2z44CSMzc5LTIyMDQg576k6aas55yM5LyK5Yui5bSO5biC6KW_5LmF5L-d55S677yS5LiB55uuIOOCpuOCpOODs-OCsOODkOODvOODieS8iuWLouW0jg!5e0!3m2!1sja!2sjp!4v1534722055338" 
        width="100%" 
        height="500px" 
        frameBorder="0" 
        allowFullScreen>
        </iframe>

      <div className="location_tag">
        <div>Location</div>
      </div>


    </div>
  );
};

export default Location;