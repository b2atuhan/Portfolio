import React from 'react';
import { motion } from 'framer-motion';
import { Code, Palette, Zap, Heart } from 'lucide-react';

const About: React.FC = () => {
  const features = [
    {
      icon: Code,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable code that stands the test of time.'
    },
    {
      icon: Palette,
      title: 'Creative Design',
      description: 'Blending aesthetics with functionality to create stunning interfaces.'
    },
    {
      icon: Zap,
      title: 'Performance',
      description: 'Optimizing every pixel and byte for lightning-fast user experiences.'
    },
    {
      icon: Heart,
      title: 'User-Centric',
      description: 'Putting users first in every design and development decision.'
    }
  ];

  return (
    <section id="about" className="section-padding bg-slate-900/50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            I'm a passionate software engineer with experience in full-stack development, 
            specializing in modern web technologies. I love solving complex problems and 
            creating efficient, scalable solutions that make a difference.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-2xl overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Ahmet Batuhan Baykal"
                  className="w-full h-full object-cover rounded-2xl hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center glow-animation">
                <Code size={32} className="text-white" />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-2xl font-bold mb-4 text-white">My Philosophy</h3>
              <p className="text-slate-400 mb-6">
                I believe in writing clean, maintainable code that not only solves the 
                immediate problem but also considers future scalability and maintainability. 
                Every project is an opportunity to learn and grow as a developer.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-4 bg-slate-800/50 rounded-xl hover:bg-slate-800 transition-all duration-300 group"
                >
                  <feature.icon className="w-8 h-8 text-blue-400 mb-3 group-hover:scale-110 transition-transform duration-300" />
                  <h4 className="font-semibold text-white mb-2">{feature.title}</h4>
                  <p className="text-sm text-slate-400">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;