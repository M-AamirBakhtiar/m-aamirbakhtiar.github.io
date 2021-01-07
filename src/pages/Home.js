import { motion } from 'framer-motion';

import { pageAnimation } from '../animation';
import Hero from '../components/Hero';

const Home = () => {
  return (
    <motion.div variants={pageAnimation} initial="hidden" animate="show" exit="exit">
      <Hero />
    </motion.div>
  );
};

export default Home;
