import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Section from '../components/Section';
import Card from '../components/Card';
import Button from '../components/Button';

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: 'Site E-commerce Mode',
      category: 'E-commerce',
      description: 'Boutique en ligne complète pour une marque de mode marocaine avec plus de 500 produits. Interface intuitive, paiement sécurisé et gestion d\'inventaire avancée.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=700&fit=crop',
      tags: ['React', 'E-commerce', 'Stripe'],
    },
    {
      title: 'Site Vitrine Restaurant',
      category: 'Vitrine',
      description: 'Site web élégant pour un restaurant gastronomique avec réservation en ligne et menu interactif. Design moderne avec galerie photo haute définition.',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200&h=700&fit=crop',
      tags: ['React', 'Tailwind', 'Reservation'],
    },
    {
      title: 'Plateforme Immobilière',
      category: 'Application Web',
      description: 'Plateforme complète de gestion immobilière avec recherche avancée et filtres intelligents. Dashboard pour agents avec statistiques en temps réel.',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=700&fit=crop',
      tags: ['React', 'Node.js', 'MongoDB'],
    },
    {
      title: 'Refonte Site Corporate',
      category: 'Refonte',
      description: 'Modernisation complète d\'un site corporate avec nouveau design et amélioration des performances. Temps de chargement réduit de 70%.',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=700&fit=crop',
      tags: ['Next.js', 'Tailwind', 'SEO'],
    },
    {
      title: 'Site Portfolio Artiste',
      category: 'Vitrine',
      description: 'Portfolio créatif pour un artiste avec galerie interactive et animations fluides. Showcases les projets avec vidéos intégrées et descriptions détaillées.',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&h=700&fit=crop',
      tags: ['React', 'Three.js', 'Animations'],
    },
    {
      title: 'Marketplace B2B',
      category: 'E-commerce',
      description: 'Plateforme B2B pour connecter fournisseurs et acheteurs avec système de commandes avancé. Gestion des devis et suivi des livraisons intégrés.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=700&fit=crop',
      tags: ['React', 'API', 'Stripe'],
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
            Notre <span className="text-primary">Portfolio</span>
          </h1>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white border-2 border-gray-100 rounded-xl overflow-hidden hover:border-primary hover:shadow-lg transition-all duration-300 group shadow-sm"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="bg-primary text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{project.title}</h3>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-semibold text-primary bg-primary/10 border border-primary/30 px-3 py-1.5 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <Button 
                  onClick={() => setSelectedProject(project)} 
                  variant="primary" 
                  className="w-full font-bold"
                >
                  Voir le projet
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-primary via-primary/90 to-primary text-white rounded-2xl p-12 text-center shadow-2xl"
        >
          <h3 className="text-4xl md:text-5xl font-extrabold text-white mb-8">
            Votre projet ici ?
          </h3>
          <Button to="/contact" variant="white" className="text-xl px-12 py-6 font-bold shadow-2xl">
            Démarrer maintenant
          </Button>
        </motion.div>
      </Section>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl overflow-hidden shadow-2xl max-w-4xl w-full max-h-[90vh] flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-10 bg-red-500 hover:bg-red-600 text-white rounded-full p-2 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Image */}
              <div className="relative h-96 md:h-[500px] overflow-hidden bg-gray-900">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-8 overflow-y-auto flex-1">
                <div className="mb-4">
                  <span className="bg-primary text-white text-sm font-semibold px-4 py-1 rounded-full">
                    {selectedProject.category}
                  </span>
                </div>

                <h2 className="text-4xl font-black text-gray-900 mb-4">
                  {selectedProject.title}
                </h2>

                <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                  {selectedProject.description}
                </p>

                <div className="mb-8">
                  <h3 className="text-sm font-bold text-gray-900 mb-3 uppercase tracking-wide">Technologies utilisées</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-sm font-semibold text-primary bg-primary/10 border border-primary/30 px-3 py-1.5 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <Button to="/contact" variant="primary" className="w-full text-lg py-4 font-bold">
                  Démarrer un projet similaire
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Portfolio;

