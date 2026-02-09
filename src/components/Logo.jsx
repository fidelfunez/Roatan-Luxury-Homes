import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { hoverScale, buttonTap } from '@/lib/animations';

const LOGO_SRC = '/Roatán Luxury Homes - Logo.webp';

const Logo = ({ className = '', textClassName = '', imgClassName = '' }) => {
  return (
    <Link
      to="/"
      className={`flex items-center space-x-2 shrink-0 ${className}`}
      aria-label="Roatán Luxury Homes - Home"
    >
      <motion.img
        src={LOGO_SRC}
        alt=""
        width={120}
        height={36}
        className={`h-8 w-auto object-contain object-left sm:h-9 ${imgClassName}`}
        whileHover={hoverScale}
        whileTap={buttonTap}
      />
      <span className={`text-xl sm:text-2xl font-bold text-primary tracking-tight ${textClassName}`}>
        Roatán Luxury Homes
      </span>
    </Link>
  );
};

export default Logo;
