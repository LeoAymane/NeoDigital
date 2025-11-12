import { motion } from 'framer-motion';

const Card = ({ children, className = '', delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -8, boxShadow: '0 0 30px rgba(14, 165, 233, 0.4)' }}
      className={`bg-white border-2 border-gray-100 rounded-2xl p-6 hover:border-primary hover:shadow-xl transition-all duration-300 ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default Card;

