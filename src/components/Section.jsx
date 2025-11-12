import { motion } from 'framer-motion';

const Section = ({ children, className = '', id = '' }) => {
  return (
    <section id={id} className={`py-20 px-4 ${className}`}>
      <div className="container mx-auto">
        {children}
      </div>
    </section>
  );
};

export default Section;

