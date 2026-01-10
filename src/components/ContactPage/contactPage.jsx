'use client';
import { motion } from 'framer-motion';
import { IconMail, IconPhone, IconUser, IconMapPin, IconMessage, IconSend } from '@tabler/icons-react';

export default function Contact() {
    const coordinatorGroups = [
        {
            type: "Event Coordinators",
            members: [
                { name: "Dr. S Gopikrishnan", position: "Convenor", email: "convenor.vitopia@vitap.ac.in" },
                { name: "Dr. Karishma Bisht", position: "Co Convenor – Cultural Events", email: "karishma.b@vitap.ac.in" },
                { name: "Dr. Guruprakash Jayabalasamy", position: "Co Convenor – Pro Show Events", email: "guruprakash@vitap.ac.in" },
                { name: "Dr. U M Gopala Krishna", position: "Co Convenor – Sports", email: "gopalkrishna.um@vitap.ac.in", phone: "+91 81421 77143" },
            ],
        },
        {
            type: "Sports Coordinators",
            members: [
                { name: "Mr. Sathwik Sangani", position: "Sports Student Coordinator", email: "sathwik.22bce7808@vitapstudent.ac.in", phone: "+91 93813 58149" },
                { name: "Mr. Gujarathi Dheeraj", position: "Sports Student Coordinator", email: "dheeraj.22bce9581@vitapstudent.ac.in", phone: "+91 98851 29430" },
            ],
        },
        {
            type: "Accommodation & Transport",
            members: [
                { name: "PAWAN KUMAR", position: "Accommodation Student Coordinator", email: "Pawan.22bce9637@vitapstudent.ac.in", phone: "+91 82470 15128" },
                { name: "Aravind Kumar", position: "Transport Student Coordinator", email: "aravind.22bce20503@vitapstudent.ac.in", phone: "+91 72073 40228" },
            ]
        }
    ];

    return (
        <div className="bg-[#050505] min-h-screen pt-24 pb-20 relative overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <motion.div
                    className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-[var(--primary)]/10 rounded-full blur-[100px]"
                    animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                    transition={{ duration: 10, repeat: Infinity }}
                />
                <motion.div
                    className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-[var(--secondary)]/10 rounded-full blur-[100px]"
                    animate={{ scale: [1.2, 1, 1.2], opacity: [0.3, 0.5, 0.3] }}
                    transition={{ duration: 12, repeat: Infinity, delay: 2 }}
                />
            </div>

            <div className="max-w-7xl mx-auto px-4 relative z-10">
                {/* Hero Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-20"
                >
                    <div className="inline-block mb-4 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
                        <span className="bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] bg-clip-text text-transparent font-medium text-sm">
                            Get in Touch
                        </span>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                        Contact Us
                    </h1>
                    <p className="text-white/50 text-xl max-w-2xl mx-auto">
                        Have questions about VITOPIA '25? Reach out to our coordinators or drop us a message.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
                    {/* Left Column: Form & Map */}
                    <div className="space-y-8">
                        {/* Contact Form Section */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="bg-[#0a0a0a] border border-white/5 rounded-3xl p-8 md:p-10 relative overflow-hidden group"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)]/5 to-[var(--secondary)]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <div className="relative z-10">
                                <h2 className="text-3xl font-bold text-white mb-2">Send Message</h2>
                                <p className="text-white/50 mb-8">We'll get back to you as soon as possible.</p>

                                <form className="space-y-6">
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium text-white/70">Name</label>
                                            <div className="relative">
                                                <IconUser className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30" size={20} />
                                                <input
                                                    type="text"
                                                    placeholder="John Doe"
                                                    className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white placeholder:text-white/20 focus:outline-none focus:border-[var(--primary)]/50 focus:bg-white/10 transition-all font-light"
                                                />
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium text-white/70">Email</label>
                                            <div className="relative">
                                                <IconMail className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30" size={20} />
                                                <input
                                                    type="email"
                                                    placeholder="john@example.com"
                                                    className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white placeholder:text-white/20 focus:outline-none focus:border-[var(--primary)]/50 focus:bg-white/10 transition-all font-light"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-white/70">Subject</label>
                                        <select className="w-full bg-white/5 border border-white/10 rounded-xl py-4 px-4 text-white/80 focus:outline-none focus:border-[var(--primary)]/50 focus:bg-white/10 transition-all font-light appearance-none">
                                            <option className="bg-[#0a0a0a]">General Inquiry</option>
                                            <option className="bg-[#0a0a0a]">Registration Issue</option>
                                            <option className="bg-[#0a0a0a]">Sponsorship</option>
                                            <option className="bg-[#0a0a0a]">Technical Support</option>
                                        </select>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-white/70">Message</label>
                                        <div className="relative">
                                            <IconMessage className="absolute left-4 top-4 text-white/30" size={20} />
                                            <textarea
                                                rows="4"
                                                placeholder="How can we help you?"
                                                className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white placeholder:text-white/20 focus:outline-none focus:border-[var(--primary)]/50 focus:bg-white/10 transition-all font-light resize-none"
                                            />
                                        </div>
                                    </div>

                                    <button type="button" className="w-full bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] text-black font-bold py-4 rounded-xl flex items-center justify-center gap-2 hover:shadow-[0_0_30px_-5px_var(--primary)] transition-all hover:scale-[1.02] active:scale-[0.98]">
                                        <IconSend size={20} />
                                        Send Message
                                    </button>
                                </form>
                            </div>
                        </motion.div>

                        {/* Map Section - Now inside left column */}
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="border border-white/10 rounded-3xl overflow-hidden h-[300px] relative"
                        >
                            <div className="absolute inset-0 bg-[#0a0a0a] flex items-center justify-center z-10 pointer-events-none">
                                <div className="text-center p-6 bg-black/80 backdrop-blur-md rounded-2xl border border-white/10">
                                    <IconMapPin size={40} className="text-[var(--primary)] mx-auto mb-4" />
                                    <h3 className="text-2xl font-bold text-white mb-1">VIT-AP University</h3>
                                    <p className="text-white/50">Amaravati, Andhra Pradesh</p>
                                </div>
                            </div>
                            {/* Placeholder for map */}
                            <div className="absolute inset-0 opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
                                <img
                                    src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=1200&h=600&fit=crop"
                                    className="w-full h-full object-cover"
                                    alt="Map Location"
                                />
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Column: Coordinators Section */}
                    <div className="space-y-8">
                        {coordinatorGroups.map((group, groupIndex) => (
                            <motion.div
                                key={groupIndex}
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: groupIndex * 0.1 }}
                            >
                                <h3 className="text-xl font-bold text-white mb-6 border-l-4 border-[var(--primary)] pl-4">
                                    {group.type}
                                </h3>
                                <div className="grid gap-4">
                                    {group.members.map((member, index) => (
                                        <div
                                            key={index}
                                            className="bg-white/5 border border-white/5 rounded-2xl p-5 hover:bg-white/10 transition-all group"
                                        >
                                            <div className="flex items-start justify-between">
                                                <div>
                                                    <h4 className="text-white font-semibold text-lg">{member.name}</h4>
                                                    <p className="text-[var(--primary)] text-sm mb-3">{member.position}</p>

                                                    <div className="space-y-2">
                                                        <a href={`mailto:${member.email}`} className="flex items-center gap-2 text-white/60 text-sm hover:text-white transition-colors">
                                                            <IconMail size={16} />
                                                            {member.email}
                                                        </a>
                                                        {member.phone && (
                                                            <a href={`tel:${member.phone}`} className="flex items-center gap-2 text-white/60 text-sm hover:text-white transition-colors">
                                                                <IconPhone size={16} />
                                                                {member.phone}
                                                            </a>
                                                        )}
                                                    </div>
                                                </div>
                                                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/40 group-hover:bg-[var(--primary)]/20 group-hover:text-[var(--primary)] transition-all">
                                                    <IconUser size={20} />
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
