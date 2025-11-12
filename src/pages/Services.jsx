import { motion } from 'framer-motion';
import Section from '../components/Section';
import Card from '../components/Card';
import Button from '../components/Button';

const Services = () => {
  const services = [
    {
      title: 'Création de sites vitrines',
      description: 'Sites web élégants et professionnels pour présenter votre entreprise et vos services. Design moderne, responsive et optimisé pour tous les appareils.',
      icon: '🌐',
      features: ['Design sur mesure', 'Responsive design', 'Optimisation SEO', 'Hébergement inclus'],
    },
    {
      title: 'E-commerce',
      description: 'Boutiques en ligne complètes avec gestion des produits, panier, paiement sécurisé et suivi des commandes. Prêt à vendre dès le lancement.',
      icon: '🛒',
      features: ['Catalogue produits', 'Paiement sécurisé', 'Gestion des stocks', 'Tableau de bord'],
    },
    {
      title: 'Refonte de site',
      description: 'Modernisez votre site existant avec un design actualisé, de meilleures performances et une expérience utilisateur optimale.',
      icon: '✨',
      features: ['Audit complet', 'Design moderne', 'Amélioration UX', 'Migration des données'],
    },
    {
      title: 'SEO & Maintenance',
      description: 'Optimisation pour les moteurs de recherche et maintenance continue pour garantir les performances et la sécurité de votre site.',
      icon: '🔧',
      features: ['Optimisation SEO', 'Maintenance régulière', 'Sauvegardes', 'Support technique'],
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
            Nos <span className="text-primary">Services</span>
          </h1>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-gradient-to-br from-white to-blue-50 border-2 border-gray-200 rounded-2xl p-10 hover:border-primary hover:shadow-2xl transition-all duration-300 shadow-lg"
            >
              <div className="text-7xl mb-6 text-center">{service.icon}</div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6 text-center">{service.title}</h3>
              
              <div className="grid grid-cols-2 gap-3 mb-8">
                {service.features.map((feature) => (
                  <div key={feature} className="flex items-center text-gray-700">
                    <span className="text-primary mr-2 text-xl">✓</span>
                    <span className="text-sm font-medium">{feature}</span>
                  </div>
                ))}
              </div>
              
              <Button to="/contact" variant="primary" className="w-full text-lg py-4 font-bold">
                Devis gratuit
              </Button>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-primary via-primary/90 to-primary text-white rounded-2xl p-12 text-center shadow-2xl"
        >
          <h3 className="text-4xl md:text-5xl font-extrabold text-white mb-8">
            Projet sur mesure ?
          </h3>
          <Button to="/contact" variant="white" className="text-xl px-12 py-6 font-bold shadow-2xl">
            Contactez-nous
          </Button>
        </motion.div>
      </Section>
    </div>
  );
};

export default Services;

