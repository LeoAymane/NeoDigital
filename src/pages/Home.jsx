import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Hero3D from '../components/Hero3D';
import Button from '../components/Button';
import Section from '../components/Section';
import Logo from '../components/Logo';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section - Full Screen with 3D */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-primary/5 pt-20">
        {/* 3D Background - only on desktop */}
        <div className="hidden md:block absolute inset-0 z-0">
          <Hero3D />
        </div>
        
        {/* Animated gradient background */}
        <motion.div
          animate={{
            background: [
              'radial-gradient(circle at 20% 50%, rgba(14, 165, 233, 0.1) 0%, transparent 50%)',
              'radial-gradient(circle at 80% 50%, rgba(14, 165, 233, 0.15) 0%, transparent 50%)',
              'radial-gradient(circle at 20% 50%, rgba(14, 165, 233, 0.1) 0%, transparent 50%)',
            ],
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute inset-0 z-[1]"
        />
        
        {/* Content */}
        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mb-16"
            >
              <div className="relative flex justify-center">
                <motion.div
                  animate={{ 
                    scale: [1, 1.05, 1],
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="scale-150 md:scale-200 lg:scale-[2.5]"
                >
                  <Logo noLink={true} />
                </motion.div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="mb-12"
            >
              <div className="flex flex-wrap justify-center gap-2 md:gap-3">
                {['Web Design', 'E-commerce', 'SEO', 'Branding'].map((tag, index) => (
                  <motion.div
                    key={tag}
                    initial={{ opacity: 0, scale: 0, rotate: -180 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ 
                      duration: 0.6, 
                      delay: 1.2 + index * 0.15, 
                      type: "spring",
                      stiffness: 200 
                    }}
                    whileHover={{ scale: 1.15, rotate: 5, y: -8 }}
                    className="relative group"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-primary to-neon-purple rounded-full blur-lg opacity-0 group-hover:opacity-60 transition-opacity" />
                    <div className="relative px-5 py-2.5 bg-white border-2 border-primary rounded-full shadow-lg hover:shadow-glow transition-all">
                      <span className="text-sm md:text-base font-black text-transparent bg-clip-text bg-gradient-to-r from-primary to-neon-purple">{tag}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button to="/contact" variant="primary" className="text-xl px-10 py-5 font-bold shadow-2xl">
                  Démarrer maintenant
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button to="/portfolio" variant="outline" className="text-xl px-10 py-5 font-bold">
                  Voir nos réalisations
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Floating elements */}
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute top-20 right-10 w-20 h-20 bg-primary/20 rounded-full blur-xl hidden lg:block"
        />
        <motion.div
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 5, repeat: Infinity, delay: 1 }}
          className="absolute bottom-20 left-10 w-32 h-32 bg-primary/15 rounded-full blur-xl hidden lg:block"
        />
      </section>

      {/* Stats Section */}
      <section className="bg-gradient-to-r from-white via-primary/5 to-white py-16 border-y border-primary/10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '100+', label: 'Projets' },
              { number: '50+', label: 'Clients' },
              { number: '5', label: 'Années' },
              { number: '24/7', label: 'Support' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.2, type: "spring" }}
                  className="text-5xl md:text-6xl font-black bg-gradient-to-r from-primary to-neon-purple text-transparent bg-clip-text mb-2"
                >
                  {stat.number}
                </motion.div>
                <div className="text-gray-600 font-semibold text-lg">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview - Visual Cards */}
      <Section className="bg-gradient-to-b from-white via-blue-50/50 to-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-6xl md:text-7xl font-black text-gray-900 mb-4">
            Ce que nous <span className="text-primary">créons</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: 'Sites Web',
              icon: '🌐',
              color: 'from-primary via-primary/80 to-neon-blue',
              description: 'Modernes & performants',
            },
            {
              title: 'E-commerce',
              icon: '🛒',
              color: 'from-neon-purple via-primary to-primary/90',
              description: 'Boutiques en ligne',
            },
            {
              title: 'Branding',
              icon: '✨',
              color: 'from-primary/80 via-neon-purple to-neon-pink',
              description: 'Identité digitale',
            },
          ].map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -15, scale: 1.05 }}
              className="relative group"
            >
              <div className={`bg-gradient-to-br ${service.color} rounded-3xl p-12 text-white shadow-2xl transform transition-all duration-300 hover:shadow-glow-lg`}>
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, delay: index * 0.5 }}
                  className="text-8xl mb-6"
                >
                  {service.icon}
                </motion.div>
                <h3 className="text-4xl font-black mb-3">{service.title}</h3>
                <p className="text-xl text-white/90">{service.description}</p>
                <div className="mt-8">
                  <Link
                    to="/services"
                    className="inline-block bg-white text-primary px-6 py-3 rounded-lg font-bold hover:bg-gray-100 hover:shadow-lg transition-all"
                  >
                    En savoir plus →
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Why Choose Us - Minimalist */}
      <Section className="bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-6xl md:text-7xl font-black text-gray-900 mb-8">
              Pourquoi <span className="text-primary">nous</span> ?
            </h2>
          </motion.div>

          <div className="space-y-12">
            {[
              { icon: '🚀', title: 'Innovation', desc: 'Technologies de pointe' },
              { icon: '⚡', title: 'Rapidité', desc: 'Livraison express' },
              { icon: '💎', title: 'Qualité', desc: 'Excellence garantie' },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="flex items-center gap-8 p-8 rounded-2xl hover:bg-primary/5 transition-colors"
              >
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="text-7xl flex-shrink-0"
                >
                  {item.icon}
                </motion.div>
                <div>
                  <h3 className="text-4xl font-black text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-xl text-gray-600">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA Section - Bold */}
      <section className="relative bg-gradient-to-r from-primary via-primary/95 to-neon-purple text-white py-24 overflow-hidden">
        <div className="absolute inset-0">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{ duration: 8, repeat: Infinity }}
            className="absolute top-0 left-0 w-full h-full bg-white/10 rounded-full blur-3xl"
          />
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-6xl md:text-8xl font-black mb-8">
              Prêt à transformer
              <br />
              <span className="text-white/90">votre business ?</span>
            </h2>
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="mt-12"
            >
              <Button
                to="/contact"
                variant="white"
                className="text-2xl px-16 py-6 font-black shadow-2xl"
              >
                Contactez-nous maintenant
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
