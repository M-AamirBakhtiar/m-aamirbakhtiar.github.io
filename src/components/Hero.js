import { motion } from 'framer-motion';

import { HeroSection, Hide } from '../styles';
import { titleAnimation, fade } from '../animation';
const Hero = () => {
  return (
    <HeroSection>
      <Hide>
        <motion.h2 variants={titleAnimation}>Hi, I am Aamir Bakhtiar</motion.h2>
      </Hide>
      <Hide>
        <motion.h2 variants={titleAnimation}>
          Your Next <span>Full Stack JavaScript Developer.</span>
        </motion.h2>
      </Hide>
      <Hide>
        <motion.button variants={fade} className="cta-btn">
          Hire Me
        </motion.button>
        <motion.button variants={fade}>View Projects</motion.button>
      </Hide>
    </HeroSection>
  );
};

export default Hero;
