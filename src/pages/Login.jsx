import { useState, useContext } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import Section from '../components/Section';
import Button from '../components/Button';
import { AuthContext } from '../context/AuthContext';

const Login = () => {
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from || '/';

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      await login({ email, password });
      navigate(from, { replace: true });
    } catch (err) {
      setError(err.message || 'Login failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-blue-50/30 to-white pt-20">
      <Section>
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="max-w-md mx-auto bg-white border border-gray-100 rounded-2xl p-8 shadow-lg">
          <h2 className="text-3xl font-extrabold mb-4 text-gray-900">Se connecter</h2>
          <p className="text-sm text-gray-600 mb-6">Connectez-vous pour accéder aux fonctionnalités privées.</p>

          {error && <div className="mb-4 text-sm text-red-500">{error}</div>}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-semibold mb-2">Email</label>
              <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} required className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-primary" />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">Mot de passe</label>
              <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} required className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-primary" />
            </div>

            <Button type="submit" variant="primary" className="w-full py-3 font-bold" disabled={loading}>
              {loading ? 'Connexion...' : 'Se connecter'}
            </Button>
          </form>
        </motion.div>
      </Section>
    </div>
  );
};

export default Login;
