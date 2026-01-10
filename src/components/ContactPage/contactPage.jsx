'use client';
import { motion } from 'framer-motion';
import { IconMail, IconPhone, IconUser, IconMapPin, IconMessage, IconSend, IconBuildingCommunity } from '@tabler/icons-react';

export default function Contact() {
    const coordinatorGroups = [
        {
            type: "Event Coordinators",
            members: [
                { name: "Dr. M. Krishna Swamy", position: "Convenor", email: "convenor.vitopia@vitap.ac.in" },
                { name: "Dr. Karishma Bisht", position: "Co Convenor", email: "karishma.b@vitap.ac.in" },
                { name: "Dr. U M Gopala Krishna", position: "Co Convenor", email: "gopalkrishna.um@vitap.ac.in", phone: "+91 81421 77143" },
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
        <div className="bg-[#050505] min-h-screen pt-24 pb-20 relative overflow-hidden font-sans">
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div
                    className="absolute inset-0 opacity-[0.03]"
                    style={{
                        backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
                        backgroundSize: '60px 60px'
                    }}
                />
                <motion.div
                    className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-[var(--primary)]/10 rounded-full blur-[120px]"
                    animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                    transition={{ duration: 10, repeat: Infinity }}
                />
                <motion.div
                    className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-[var(--secondary)]/10 rounded-full blur-[120px]"
                    animate={{ scale: [1.2, 1, 1.2], opacity: [0.3, 0.5, 0.3] }}
                    transition={{ duration: 12, repeat: Infinity, delay: 2 }}
                />
            </div>

            <div className="max-w-7xl mx-auto px-4 relative z-10">
                {/* Hero Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-20"
                >
                    <motion.div
                        className="inline-flex items-center gap-2 bg-[var(--primary)]/10 border border-[var(--primary)]/20 rounded-full px-4 py-2 mb-8"
                        animate={{ y: [0, -5, 0] }}
                        transition={{ duration: 3, repeat: Infinity }}
                    >
                        <IconBuildingCommunity className="text-[var(--primary)]" size={18} />
                        <span className="text-[var(--primary)] text-sm font-medium">24/7 Support</span>
                    </motion.div>

                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-tight">
                        <span className="block">GET IN</span>
                        <span className="block bg-gradient-to-r from-[var(--primary)] via-[var(--secondary)] to-[var(--accent)] bg-clip-text text-transparent">
                            TOUCH.
                        </span>
                    </h1>
                    <p className="text-white/50 text-lg md:text-xl max-w-2xl mx-auto">
                        Have questions about VITOPIA '25? Reach out to our coordinators or drop us a message directly.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
                    {/* Left Column: Form & Map */}
                    <div className="space-y-8">
                        {/* Contact Form Section */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="bg-[#0a0a0a] border border-white/5 rounded-3xl p-8 md:p-10 relative overflow-hidden group"
                        >
                            {/* Card glow effect */}
                            <div className="absolute -inset-0.5 bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] rounded-3xl opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500 pointer-events-none" />

                            <div className="relative z-10">
                                <h2 className="text-3xl font-bold text-white mb-2">Send Message</h2>
                                <p className="text-white/50 mb-8">We'll get back to you within 24 hours.</p>

                                <form className="space-y-5">
                                    <div className="grid md:grid-cols-2 gap-5">
                                        <div className="space-y-2">
                                            <label className="text-xs font-semibold uppercase tracking-wider text-white/50 pl-1">Name</label>
                                            <div className="relative group/input">
                                                <IconUser className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30 group-focus-within/input:text-[var(--primary)] transition-colors" size={20} />
                                                <input
                                                    type="text"
                                                    placeholder="John Doe"
                                                    className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white placeholder:text-white/20 focus:outline-none focus:border-[var(--primary)]/50 focus:bg-white/10 transition-all font-medium"
                                                />
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-xs font-semibold uppercase tracking-wider text-white/50 pl-1">Email</label>
                                            <div className="relative group/input">
                                                <IconMail className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30 group-focus-within/input:text-[var(--primary)] transition-colors" size={20} />
                                                <input
                                                    type="email"
                                                    placeholder="john@example.com"
                                                    className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white placeholder:text-white/20 focus:outline-none focus:border-[var(--primary)]/50 focus:bg-white/10 transition-all font-medium"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-xs font-semibold uppercase tracking-wider text-white/50 pl-1">Subject</label>
                                        <div className="relative">
                                            <select className="w-full bg-white/5 border border-white/10 rounded-xl py-4 px-4 text-white/80 focus:outline-none focus:border-[var(--primary)]/50 focus:bg-white/10 transition-all font-medium appearance-none cursor-pointer">
                                                <option className="bg-[#0a0a0a]">General Inquiry</option>
                                                <option className="bg-[#0a0a0a]">Registration Issue</option>
                                                <option className="bg-[#0a0a0a]">Sponsorship</option>
                                                <option className="bg-[#0a0a0a]">Technical Support</option>
                                            </select>
                                            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-white/30">
                                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-xs font-semibold uppercase tracking-wider text-white/50 pl-1">Message</label>
                                        <div className="relative group/input">
                                            <IconMessage className="absolute left-4 top-4 text-white/30 group-focus-within/input:text-[var(--primary)] transition-colors" size={20} />
                                            <textarea
                                                rows="5"
                                                placeholder="How can we help you?"
                                                className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white placeholder:text-white/20 focus:outline-none focus:border-[var(--primary)]/50 focus:bg-white/10 transition-all font-medium resize-none leading-relaxed"
                                            />
                                        </div>
                                    </div>

                                    <button type="button" className="w-full bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] text-[#0a0a0a] font-bold text-lg py-4 rounded-xl flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-[var(--primary)]/20 transition-all hover:scale-[1.02] active:scale-[0.98] uppercase tracking-wide">
                                        <IconSend size={22} stroke={2} />
                                        Send Message
                                    </button>
                                </form>
                            </div>
                        </motion.div>

                        {/* Map Section */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="border border-white/10 rounded-3xl overflow-hidden h-[250px] relative group"
                        >
                            <div className="absolute inset-0 bg-[#0a0a0a] flex items-center justify-center z-10 pointer-events-none">
                                <div className="text-center p-6 bg-black/60 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl">
                                    <IconMapPin size={32} className="text-[var(--primary)] mx-auto mb-3" />
                                    <h3 className="text-xl font-bold text-white mb-1">VIT-AP University</h3>
                                    <p className="text-white/50 text-sm">Amaravati, Andhra Pradesh</p>
                                </div>
                            </div>
                            <img
                                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=1200&h=600&fit=crop"
                                className="w-full h-full object-cover opacity-30 grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                                alt="VIT-AP Campus"
                            />
                        </motion.div>
                    </div>

                    {/* Right Column: Coordinators Section */}
                    <div className="space-y-8">
                        {coordinatorGroups.map((group, groupIndex) => (
                            <motion.div
                                key={groupIndex}
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: groupIndex * 0.1 }}
                            >
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="h-[1px] flex-1 bg-gradient-to-r from-[var(--primary)]/50 to-transparent" />
                                    <h3 className="text-xl font-bold text-white whitespace-nowrap uppercase tracking-wider">
                                        {group.type}
                                    </h3>
                                    <div className="h-[1px] w-8 bg-white/10" />
                                </div>

                                <div className="grid gap-4">
                                    {group.members.map((member, index) => (
                                        <div
                                            key={index}
                                            className="bg-white/5 border border-white/5 rounded-2xl p-5 hover:bg-white/10 hover:border-[var(--primary)]/20 transition-all group"
                                        >
                                            <div className="flex items-start gap-4">
                                                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-white/40 group-hover:bg-[var(--primary)]/20 group-hover:text-[var(--primary)] transition-all shrink-0">
                                                    <IconUser size={24} />
                                                </div>
                                                <div className="flex-1 min-w-0">
                                                    <h4 className="text-white font-bold text-lg leading-tight mb-1 truncate">{member.name}</h4>
                                                    <p className="text-[var(--primary)] text-sm font-medium mb-3">{member.position}</p>

                                                    <div className="space-y-1.5 text-sm">
                                                        <a href={`mailto:${member.email}`} className="flex items-center gap-2 text-white/50 hover:text-white transition-colors truncate">
                                                            <IconMail size={14} className="shrink-0" />
                                                            {member.email}
                                                        </a>
                                                        {member.phone && (
                                                            <a href={`tel:${member.phone}`} className="flex items-center gap-2 text-white/50 hover:text-white transition-colors">
                                                                <IconPhone size={14} className="shrink-0" />
                                                                {member.phone}
                                                            </a>
                                                        )}
                                                    </div>
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
