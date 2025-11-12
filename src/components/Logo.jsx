import { Link } from 'react-router-dom';

const Logo = ({ className = '', noLink = false }) => {
  const logoContent = (
    <>
      {/* Modern ND Logo with gradient and tech effect */}
      <div className="relative">
        <svg
          width="64"
          height="64"
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="flex-shrink-0 filter drop-shadow-lg"
        >
          {/* Gradient definitions */}
          <defs>
            <linearGradient id="gradientND" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0ea5e9" />
              <stop offset="100%" stopColor="#00d4ff" />
            </linearGradient>
            <linearGradient id="gradientAccent" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#9d4edd" />
              <stop offset="100%" stopColor="#ff006e" />
            </linearGradient>
          </defs>

          {/* Background circle with gradient */}
          <circle cx="32" cy="32" r="31" fill="url(#gradientND)" opacity="0.1" strokeWidth="1" stroke="url(#gradientND)" />

          {/* Left hexagon (N) */}
          <path
            d="M16 12 L24 12 L32 32 L24 52 L16 52 L24 32 Z"
            fill="url(#gradientND)"
          />

          {/* Right hexagon (D) */}
          <path
            d="M40 12 L52 12 L52 52 L40 52 L40 32 M48 18 L44 28 M48 46 L44 36"
            stroke="url(#gradientND)"
            strokeWidth="2.5"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Accent dots */}
          <circle cx="20" cy="32" r="2" fill="url(#gradientAccent)" opacity="0.8" />
          <circle cx="44" cy="32" r="2" fill="url(#gradientAccent)" opacity="0.8" />

          {/* Tech circuit lines */}
          <line x1="32" y1="12" x2="32" y2="52" stroke="url(#gradientND)" strokeWidth="1" opacity="0.3" />
          <circle cx="32" cy="22" r="1.5" fill="url(#gradientND)" opacity="0.4" />
          <circle cx="32" cy="32" r="1.5" fill="url(#gradientND)" opacity="0.4" />
          <circle cx="32" cy="42" r="1.5" fill="url(#gradientND)" opacity="0.4" />
        </svg>
      </div>
      
      {/* Text part */}
      <div className="flex flex-col">
        <div className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary to-neon-blue leading-tight">
          Neo
        </div>
        <div className="text-xs font-black text-primary uppercase tracking-widest">
          Digital
        </div>
      </div>
    </>
  );

  if (noLink) {
    return (
      <div className={`flex items-center space-x-2 ${className}`}>
        {logoContent}
      </div>
    );
  }

  return (
    <Link to="/" className={`flex items-center space-x-2 ${className}`}>
      {logoContent}
    </Link>
  );
};

export default Logo;

