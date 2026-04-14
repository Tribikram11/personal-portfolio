import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

function Contact() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`);
        const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`);
        window.location.href = `mailto:tribikramswain@gmail.com?subject=${subject}&body=${body}`;
    };

    return (
        <section className="w-full py-16 px-4" ref={ref}>
            <motion.h2
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
                className="text-4xl font-bold text-center mb-16 text-blue-500 dark:text-neon-cyan"
            >
                GET IN TOUCH
            </motion.h2>

            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* Left — Info */}
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="flex flex-col justify-center"
                >
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
                        Let's build something amazing together
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                        I'm always open to new opportunities, collaborations, and interesting projects.
                        Whether you have a question or just want to say hello — feel free to reach out!
                    </p>

                    <div className="flex space-x-6">
                        <a href="https://www.linkedin.com/in/tribikram-swain"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-500 dark:text-gray-400 hover:text-pink-500 dark:hover:text-neon-pink transition-colors">
                            <FaLinkedin size={32} />
                        </a>
                        <a href="https://github.com/Tribikram11"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-500 dark:text-gray-400 hover:text-pink-500 dark:hover:text-neon-pink transition-colors">
                            <FaGithub size={32} />
                        </a>
                        <a href="mailto:tribikramswain@gmail.com"
                            className="text-gray-500 dark:text-gray-400 hover:text-pink-500 dark:hover:text-neon-pink transition-colors">
                            <FaEnvelope size={32} />
                        </a>
                    </div>
                </motion.div>

                {/* Right — Form */}
                <motion.form
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0, x: 40 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="bg-white dark:bg-gray-800 p-8 rounded-xl
                               border border-gray-200 dark:border-gray-700
                               shadow-lg space-y-5"
                >
                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Name</label>
                        <input type="text" name="name" value={formData.name} onChange={handleChange} required
                            className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-900
                                       border border-gray-200 dark:border-gray-700
                                       text-gray-800 dark:text-white
                                       focus:outline-none focus:border-pink-500 dark:focus:border-neon-pink
                                       focus:ring-1 focus:ring-pink-500 dark:focus:ring-neon-pink
                                       transition-colors"
                            placeholder="Your name"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email</label>
                        <input type="email" name="email" value={formData.email} onChange={handleChange} required
                            className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-900
                                       border border-gray-200 dark:border-gray-700
                                       text-gray-800 dark:text-white
                                       focus:outline-none focus:border-pink-500 dark:focus:border-neon-pink
                                       focus:ring-1 focus:ring-pink-500 dark:focus:ring-neon-pink
                                       transition-colors"
                            placeholder="your@email.com"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Message</label>
                        <textarea name="message" value={formData.message} onChange={handleChange} required rows="4"
                            className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-900
                                       border border-gray-200 dark:border-gray-700
                                       text-gray-800 dark:text-white
                                       focus:outline-none focus:border-pink-500 dark:focus:border-neon-pink
                                       focus:ring-1 focus:ring-pink-500 dark:focus:ring-neon-pink
                                       transition-colors resize-none"
                            placeholder="Your message..."
                        />
                    </div>
                    <button type="submit"
                        className="w-full py-3 rounded-lg font-semibold text-white
                                   bg-gradient-to-r from-pink-500 to-purple-600
                                   hover:from-pink-600 hover:to-purple-700
                                   transition-all duration-300
                                   shadow-lg hover:shadow-pink-500/25"
                    >
                        Send Message →
                    </button>
                </motion.form>
            </div>
        </section>
    );
}

export default Contact;
