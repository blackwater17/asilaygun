import React from 'react';
import Header from "../app/components/Header"

const AboutPage: React.FC = () => {

  return (
    <div>
      <div className="about-content-container">
        <div className="header-row">
          <div className="info-container">
            <div className="img-container"><img alt="time icon" src="img/svgs/time.svg" /></div>
            <div className="info-text"><div>Speed</div>Lightweight applications for optimal performance.</div>
          </div>
          <div className="info-container">
            <div className="img-container"><img alt="device icon" src="img/svgs/devices.svg" /></div>
            <div className="info-text"><div>Compatibility</div>Diverse layouts compatible with all devices.</div>
          </div>
          <div className="info-container">
            <div className="img-container"><img alt="accessibility icon" src="img/svgs/accessibility.svg" /></div>
            <div className="info-text"><div>Accessibility</div>Emphasis on UX/UI designs for intuitive usability.</div>
          </div>
          <div className="info-container">
            <div className="img-container"><img alt="collab icon" src="img/svgs/collab.svg" /></div>
            <div className="info-text"><div>Collaboration</div>I love to collaborate with teammates and clients.</div>
          </div>
        </div>
        <div className="middle-row">
          <div className="middle-box">
            <div className="profile-pic"></div>
          </div>
          <div className="middle-box">
            <div className="middle-info">
              <div className="title-text"><span>Who am I?</span></div>
              I&apos;m passionate about crafting dynamic web applications using React. Seeking a position with a focus on JS/React.
              <div className="line"></div>
              Based in Istanbul/Turkiye, I&apos;m always looking for opportunities to collaborate. Let&apos;s create something new!
            </div>
          </div>
          <div className="middle-box">
            <div className="middle-info">
              <div className="title-text"><span>Technical skills</span></div>
              <div className="languages">
                <span>HTML</span> | <span>CSS/SASS</span> | <span>Javascript</span> | <span>React.js</span> | | <span>Next.js</span> | <span>Tailwind</span> | <span>MongoDB</span> | <span>JQuery</span> | <span>Python3</span> | <span>Node.js</span> | <span>Express.js</span> | <span>Git/Github</span>
              </div>
            </div>
          </div>
        </div>
        <div className="bottom-row">
          <div className="bottom-box">
            <div className="title-text"><span>Career Goals</span></div>
            Creating intuitive and visually appealing user interfaces that enhance the user experience and drive engagement.
            <div className="second">Building projects that make a positive impact in the digital world.</div>
          </div>
          <div className="bottom-box">
            <div className="title-text"><span>Hobbies</span></div>
            I like creating web applications/browser extensions for the internet communities I&apos;m involved in. I also like data hoarding and &apos;collecting&apos; digital stuff. I like mathematics, and statistics about the things I&apos;m interested in.
          </div>
        </div>
      </div>
      <Header />
    </div>
  );
};

export default AboutPage;
