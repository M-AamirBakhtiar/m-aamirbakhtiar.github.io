import styled from 'styled-components';
import { motion } from 'framer-motion';

const HeroSection = styled(motion.section)`
  min-height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  flex-direction: column;
  padding: 5em 5em;
  .cta-btn {
    background-color: #23d997;
    color: white;
    &:hover {
      background-color: transparent;
    }
  }
  button {
    margin-left: 2em;
  }
  h2 {
    margin-bottom: 1em;
    font-weight: lighter;
  }
`;

const Hide = styled.div`
  overflow: hidden;
`;

export { HeroSection, Hide };
