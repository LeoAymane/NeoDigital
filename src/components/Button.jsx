import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Button = ({ children, to, href, onClick, variant = 'primary', className = '', type, disabled }) => {
  const baseClasses = 'px-6 py-3 rounded-lg font-semibold transition-all duration-300 inline-block text-center cursor-pointer relative overflow-hidden';
  
  const variants = {
    primary: 'bg-gradient-to-r from-primary to-primary/80 text-white hover:shadow-glow hover:shadow-primary/50 active:scale-95 font-bold',
    outline: 'border-2 border-primary text-primary bg-transparent hover:bg-primary hover:text-white hover:shadow-lg active:scale-95',
    ghost: 'text-primary bg-transparent hover:bg-primary/10 active:scale-95',
    white: 'bg-white text-primary hover:bg-gray-50 hover:shadow-xl font-bold active:scale-95',
  };

  const disabledClasses = disabled ? 'opacity-50 cursor-not-allowed pointer-events-none' : '';
  const classes = `${baseClasses} ${variants[variant]} ${disabledClasses} ${className}`;

  const buttonContent = (
    <motion.div
      whileHover={!disabled ? { scale: 1.05 } : {}}
      whileTap={!disabled ? { scale: 0.95 } : {}}
      className="inline-block relative z-10"
    >
      {children}
    </motion.div>
  );

  if (to) {
    return (
      <Link to={to} className={classes}>
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
          initial={{ x: '-100%' }}
          whileHover={{ x: '100%' }}
          transition={{ duration: 0.6 }}
        />
        {buttonContent}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
          initial={{ x: '-100%' }}
          whileHover={{ x: '100%' }}
          transition={{ duration: 0.6 }}
        />
        {buttonContent}
      </a>
    );
  }

  return (
    <button type={type || 'button'} onClick={onClick} className={classes} disabled={disabled}>
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
        initial={{ x: '-100%' }}
        whileHover={{ x: '100%' }}
        transition={{ duration: 0.6 }}
      />
      {buttonContent}
    </button>
  );
};

export default Button;

