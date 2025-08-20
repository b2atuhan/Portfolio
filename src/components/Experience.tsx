import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, ExternalLink } from 'lucide-react';

const Experience: React.FC = () => {
    const experiences = [
        {
            company: 'Software Company',
            position: 'Software Engineer',
            duration: '2023 - Present',
            location: 'Istanbul, Turkey',
            description: 'Developing and maintaining full-stack web applications using React, Node.js, and MongoDB. Collaborating with cross-functional teams to deliver high-quality software solutions.',
            technologies: ['React', 'Node.js', 'MongoDB', 'TypeScript', 'Docker'],
            link: '#'
        },
        {
            company: 'Tech Startup',
            position: 'Frontend Developer',
            duration: '2022 - 2023',
            location: 'Remote',
            description: 'Built responsive user interfaces and implemented modern web technologies. Worked on improving user experience and performance optimization.',
            technologies: ['React', 'JavaScript', 'CSS3', 'HTML5', 'Git'],
            link: '#'
        },
        {
            company: 'Freelance',
            position: 'Web Developer',
            duration: '2021 - 2022',
            location: 'Istanbul, Turkey',
            description: 'Developed custom websites and web applications for various clients. Managed projects from concept to deployment.',
            technologies: ['JavaScript', 'HTML/CSS', 'WordPress', 'PHP', 'MySQL'],
            link: '#'
        }
    ];

    return (
        <section id="experience" className="section-padding bg-slate-900/50">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        Work <span className="gradient-text">Experience</span>
                    </h2>
                    <p className="text-xl text-slate-400 max-w-3xl mx-auto">
                        My professional journey in software development, showcasing my growth and
                        contributions to various projects and organizations.
                    </p>
                </motion.div>

                <div className="space-y-8">
                    {experiences.map((experience, index) => (
                        <motion.div
                            key={`${experience.company}-${experience.position}`}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: index * 0.2 }}
                            viewport={{ once: true }}
                            className="group"
                        >
                            <div className="bg-slate-800/50 rounded-2xl p-8 hover:bg-slate-800 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl">
                                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                                    {/* Left side - Company and Position */}
                                    <div className="flex-1">
                                        <div className="flex items-start gap-4 mb-4">
                                            <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl group-hover:scale-110 transition-transform duration-300">
                                                <Briefcase className="w-6 h-6 text-white" />
                                            </div>
                                            <div className="flex-1">
                                                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
                                                    {experience.position}
                                                </h3>
                                                <div className="flex items-center gap-4 text-slate-400 mb-3">
                                                    <div className="flex items-center gap-2">
                                                        <Calendar className="w-4 h-4" />
                                                        <span className="text-sm">{experience.duration}</span>
                                                    </div>
                                                    <div className="flex items-center gap-2">
                                                        <MapPin className="w-4 h-4" />
                                                        <span className="text-sm">{experience.location}</span>
                                                    </div>
                                                </div>
                                                <h4 className="text-lg font-semibold text-slate-300 mb-3">
                                                    {experience.company}
                                                </h4>
                                                <p className="text-slate-400 leading-relaxed mb-6">
                                                    {experience.description}
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Right side - Technologies and Link */}
                                    <div className="lg:w-48 flex flex-col items-start lg:items-end gap-4">
                                        <div className="flex flex-wrap gap-2 justify-start lg:justify-end">
                                            {experience.technologies.map((tech) => (
                                                <span
                                                    key={tech}
                                                    className="px-3 py-1 bg-slate-700 text-slate-300 rounded-full text-xs font-medium hover:bg-slate-600 transition-colors duration-200"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>

                                        {experience.link && experience.link !== '#' && (
                                            <motion.a
                                                href={experience.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                whileHover={{ scale: 1.05 }}
                                                whileTap={{ scale: 0.95 }}
                                                className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors duration-200 text-sm"
                                            >
                                                <ExternalLink size={16} />
                                                Visit Company
                                            </motion.a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mt-16"
                >
                    <div className="inline-flex items-center gap-4 px-8 py-4 bg-slate-800/50 rounded-2xl">
                        <div className="flex -space-x-2">
                            {['React', 'Node.js', 'MongoDB', 'TypeScript'].map((tech, index) => (
                                <div
                                    key={tech}
                                    className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-xs font-bold border-2 border-slate-800"
                                    style={{ zIndex: 4 - index }}
                                >
                                    {tech.slice(0, 2)}
                                </div>
                            ))}
                        </div>
                        <div className="text-left">
                            <p className="text-white font-semibold">Growing Experience</p>
                            <p className="text-slate-400 text-sm">Continuously learning new technologies</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Experience;
