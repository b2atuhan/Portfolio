import React from 'react';
import { motion } from 'framer-motion';
import { Heart, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      <div className="container">
        <div className="py-12">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center md:text-left mb-6 md:mb-0"
            >
              <div className="text-2xl font-bold gradient-text mb-2">Ahmet Batuhan Baykal</div>
              <p className="text-slate-400">
                Building innovative software solutions with passion and precision
              </p>
            </motion.div>

            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 bg-slate-800 rounded-full text-slate-400 hover:text-white hover:bg-gradient-to-br hover:from-blue-500 hover:to-purple-600 transition-all duration-300"
              title="Back to top"
            >
              <ArrowUp size={20} />
            </motion.button>
          </div>
        </div>

        <div className="border-t border-slate-800 py-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row items-center justify-between text-sm text-slate-400"
          >
            <div className="flex items-center gap-2 mb-4 sm:mb-0">
              <span>Made with</span>
              <Heart size={16} className="text-red-500 animate-pulse" />
              <span>by Ahmet Batuhan Baykal</span>
            </div>
            <div className="flex items-center gap-6">
              <span>© 2024 All rights reserved</span>
              <a href="#" className="hover:text-white transition-colors duration-200">
                Privacy
              </a>
              <a href="#" className="hover:text-white transition-colors duration-200">
                Terms
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;