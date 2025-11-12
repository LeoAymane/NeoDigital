import { motion } from 'framer-motion';
import Section from '../components/Section';
import Button from '../components/Button';

const About = () => {
  const values = [
    {
      title: 'Innovation',
      description: 'Nous restons à la pointe de la technologie pour offrir des solutions modernes et performantes.',
      icon: '🚀',
    },
    {
      title: 'Rapidité',
      description: 'Nous respectons vos délais et livrons rapidement sans compromis sur la qualité.',
      icon: '⚡',
    },
    {
      title: 'Transparence',
      description: 'Communication claire, suivi régulier et tarifs transparents pour une collaboration sereine.',
      icon: '💎',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-blue-50/30 to-white pt-20">
      <Section>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h1 className="text-6xl md:text-7xl font-extrabold text-gray-900 mb-4">
            À propos de <span className="text-primary">nous</span>
          </h1>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-gradient-to-br from-white to-blue-50 border-2 border-primary/20 rounded-2xl p-12 shadow-lg">
              <motion.div
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
                className="w-40 h-40 bg-gradient-to-br from-primary to-primary/80 rounded-full mx-auto mb-8 flex items-center justify-center text-7xl shadow-xl"
              >
                👨‍💻
              </motion.div>
              <h3 className="text-3xl font-bold text-gray-900 text-center mb-2">
                Fondateur
              </h3>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-4xl font-extrabold text-gray-900 mb-8">Notre Histoire</h2>
            <p className="text-gray-700 leading-relaxed text-lg mb-6">
              Agence web marocaine passionnée par l'innovation digitale.
            </p>
            <p className="text-gray-700 leading-relaxed text-lg mb-6">
              Nous créons des sites web modernes qui propulsent votre business.
            </p>
            <p className="text-gray-700 leading-relaxed text-lg">
              Solutions adaptées au marché marocain.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-extrabold text-gray-900 text-center mb-16">
            Nos <span className="text-primary">Valeurs</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-br from-white to-blue-50 border-2 border-primary/20 rounded-2xl p-10 text-center hover:border-primary hover:shadow-2xl transition-all duration-300 shadow-lg"
              >
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                  className="text-7xl mb-6"
                >
                  {value.icon}
                </motion.div>
                <h3 className="text-3xl font-bold text-gray-900">{value.title}</h3>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-primary via-primary/90 to-primary text-white rounded-2xl p-12 text-center shadow-2xl"
        >
          <h3 className="text-4xl md:text-5xl font-extrabold text-white mb-8">
            Travaillons ensemble
          </h3>
          <Button to="/contact" variant="white" className="text-xl px-12 py-6 font-bold shadow-2xl">
            Contactez-nous
          </Button>
        </motion.div>
      </Section>
    </div>
  );
};

export default About;

