import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';

const Education: React.FC = () => {
    const education = [
        {
            degree: 'Bachelor of Computer Science',
            institution: 'University Name',
            duration: '2019 - 2023',
            location: 'Istanbul, Turkey',
            description: 'Studied computer science fundamentals, algorithms, data structures, and software engineering principles. Graduated with honors.',
            gpa: '3.8/4.0',
            relevantCourses: ['Data Structures', 'Algorithms', 'Software Engineering', 'Database Systems', 'Web Development']
        },
        {
            degree: 'High School Diploma',
            institution: 'High School Name',
            duration: '2015 - 2019',
            location: 'Istanbul, Turkey',
            description: 'Completed high school with focus on mathematics and sciences. Participated in various academic competitions.',
            gpa: '3.9/4.0',
            relevantCourses: ['Mathematics', 'Physics', 'Computer Science', 'English']
        }
    ];

    const certifications = [
        {
            name: 'AWS Certified Developer',
            issuer: 'Amazon Web Services',
            date: '2023',
            description: 'Certified in developing and maintaining applications on AWS platform.'
        },
        {
            name: 'React Developer Certification',
            issuer: 'Meta',
            date: '2023',
            description: 'Advanced React development skills and best practices certification.'
        }
    ];

    return (
        <section id="education" className="section-padding">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        <span className="gradient-text">Education</span> & Certifications
                    </h2>
                    <p className="text-xl text-slate-400 max-w-3xl mx-auto">
                        My academic journey and professional certifications that have shaped my
                        technical foundation and expertise.
                    </p>
                </motion.div>

                {/* Education Section */}
                <div className="mb-16">
                    <h3 className="text-2xl font-bold text-white mb-8 text-center">Academic Background</h3>
                    <div className="space-y-8">
                        {education.map((edu, index) => (
                            <motion.div
                                key={`${edu.institution}-${edu.degree}`}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, delay: index * 0.2 }}
                                viewport={{ once: true }}
                                className="group"
                            >
                                <div className="bg-slate-800/50 rounded-2xl p-8 hover:bg-slate-800 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl">
                                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                                        {/* Left side - Degree and Institution */}
                                        <div className="flex-1">
                                            <div className="flex items-start gap-4 mb-4">
                                                <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl group-hover:scale-110 transition-transform duration-300">
                                                    <GraduationCap className="w-6 h-6 text-white" />
                                                </div>
                                                <div className="flex-1">
                                                    <h4 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
                                                        {edu.degree}
                                                    </h4>
                                                    <div className="flex items-center gap-4 text-slate-400 mb-3">
                                                        <div className="flex items-center gap-2">
                                                            <Calendar className="w-4 h-4" />
                                                            <span className="text-sm">{edu.duration}</span>
                                                        </div>
                                                        <div className="flex items-center gap-2">
                                                            <MapPin className="w-4 h-4" />
                                                            <span className="text-sm">{edu.location}</span>
                                                        </div>
                                                    </div>
                                                    <h5 className="text-lg font-semibold text-slate-300 mb-3">
                                                        {edu.institution}
                                                    </h5>
                                                    <p className="text-slate-400 leading-relaxed mb-4">
                                                        {edu.description}
                                                    </p>
                                                    <div className="flex items-center gap-4 mb-4">
                                                        <span className="text-slate-300 font-medium">GPA: {edu.gpa}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Right side - Relevant Courses */}
                                        <div className="lg:w-64 flex flex-col items-start lg:items-end gap-4">
                                            <h6 className="text-sm font-semibold text-slate-300 mb-2">Relevant Courses</h6>
                                            <div className="flex flex-wrap gap-2 justify-start lg:justify-end">
                                                {edu.relevantCourses.map((course) => (
                                                    <span
                                                        key={course}
                                                        className="px-3 py-1 bg-slate-700 text-slate-300 rounded-full text-xs font-medium hover:bg-slate-600 transition-colors duration-200"
                                                    >
                                                        {course}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Certifications Section */}
                <div>
                    <h3 className="text-2xl font-bold text-white mb-8 text-center">Professional Certifications</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                        {certifications.map((cert, index) => (
                            <motion.div
                                key={cert.name}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: index * 0.2 }}
                                viewport={{ once: true }}
                                className="group"
                            >
                                <div className="bg-slate-800/50 rounded-2xl p-6 hover:bg-slate-800 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl">
                                    <div className="flex items-start gap-4">
                                        <div className="p-3 bg-gradient-to-br from-green-500 to-blue-600 rounded-xl group-hover:scale-110 transition-transform duration-300">
                                            <Award className="w-6 h-6 text-white" />
                                        </div>
                                        <div className="flex-1">
                                            <h4 className="text-lg font-bold text-white mb-2 group-hover:text-green-400 transition-colors duration-300">
                                                {cert.name}
                                            </h4>
                                            <p className="text-slate-300 mb-2">{cert.issuer}</p>
                                            <p className="text-slate-400 text-sm mb-3">{cert.date}</p>
                                            <p className="text-slate-400 text-sm leading-relaxed">
                                                {cert.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
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
                            {['Computer Science', 'Web Development', 'Cloud Computing', 'React'].map((tech, index) => (
                                <div
                                    key={tech}
                                    className="w-10 h-10 bg-gradient-to-br from-green-500 to-blue-600 rounded-full flex items-center justify-center text-white text-xs font-bold border-2 border-slate-800"
                                    style={{ zIndex: 4 - index }}
                                >
                                    {tech.slice(0, 2)}
                                </div>
                            ))}
                        </div>
                        <div className="text-left">
                            <p className="text-white font-semibold">Continuous Learning</p>
                            <p className="text-slate-400 text-sm">Always expanding knowledge</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Education;
