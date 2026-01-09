'use client'

import { Footer } from "@/components/Homepage/sections/footer";
import Navbar from "@/components/Homepage/sections/navbar";
import { useEffect, useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { IconShoppingBag, IconTag, IconShirt, IconHanger, IconChevronRight, IconX, IconExternalLink } from "@tabler/icons-react";

// Merchandise data
const merchData = [
    {
        id: 1,
        title: "Night Tribe T Shirt",
        description: "Be part of the tribe with this exclusive VITopia 2025 dark theme tee.",
        price: "₹300",
        image: "/tshirts/img8.avif",
        category: "T-Shirt",
        status: "available",
        link: "https://events.vitap.ac.in/e/vitopia-2025-t-shirts-70ec62a9-cbad-4124-938f-e59a699f1727"
    },
    {
        id: 2,
        title: "Butterfly T Shirt",
        description: "Metamorphosis theme tee featuring stunning butterfly artwork.",
        price: "₹300",
        image: "/tshirts/img6.avif",
        category: "T-Shirt",
        status: "selling_fast",
        link: "https://events.vitap.ac.in/e/vitopia-2025-t-shirts-70ec62a9-cbad-4124-938f-e59a699f1727"
    }
];

// Animated counter component
function AnimatedCounter({ value, suffix = "" }) {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (isInView) {
            const duration = 2000;
            const steps = 60;
            const increment = value / steps;
            let current = 0;

            const timer = setInterval(() => {
                current += increment;
                if (current >= value) {
                    setCount(value);
                    clearInterval(timer);
                } else {
                    setCount(Math.floor(current));
                }
            }, duration / steps);

            return () => clearInterval(timer);
        }
    }, [isInView, value]);

    return <span ref={ref}>{count}{suffix}</span>;
}

// Merch card component
function MerchCard({ item, index, onClick }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -8 }}
            onClick={() => onClick(item)}
            className="group relative cursor-pointer h-[420px]"
        >
            {/* Card glow effect */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-[var(--accent)] to-[var(--secondary)] rounded-2xl opacity-0 group-hover:opacity-40 blur-xl transition-all duration-500" />

            {/* Main card */}
            <div className="relative h-full bg-[#0a0a0a] border border-white/5 rounded-2xl overflow-hidden transition-all duration-300 group-hover:border-[var(--accent)]/30">
                {/* Image */}
                <div className="absolute inset-0 h-[70%] overflow-hidden bg-white/5">
                    <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />
                </div>

                {/* Status badge */}
                {item.status !== 'available' && (
                    <div className={`absolute top-4 right-4 z-20 px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm ${item.status === 'sold_out'
                        ? 'bg-red-500/20 text-red-500 border border-red-500/20'
                        : 'bg-yellow-500/20 text-yellow-500 border border-yellow-500/20'
                        }`}>
                        {item.status === 'sold_out' ? 'Sold Out' : 'Selling Fast'}
                    </div>
                )}

                {/* Content positioned at bottom */}
                <div className="absolute bottom-0 left-0 right-0 p-6 z-10 h-[35%] bg-[#0a0a0a] border-t border-white/5">
                    <div className="flex justify-between items-start mb-2">
                        <div>
                            <span className="text-[var(--accent)] text-xs font-medium tracking-wider uppercase mb-1 block">
                                {item.category}
                            </span>
                            <h3 className="text-xl font-bold text-white group-hover:text-[var(--accent)] transition-colors duration-300 line-clamp-1">
                                {item.title}
                            </h3>
                        </div>
                        <span className="text-white font-bold text-lg">{item.price}</span>
                    </div>

                    <p className="text-white/60 text-sm mb-4 line-clamp-1">
                        {item.description}
                    </p>
                </div>

                {/* Hover arrow */}
                <motion.div
                    className="absolute bottom-6 right-6 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                >
                    <IconChevronRight className="text-[var(--accent)]" size={20} />
                </motion.div>
            </div>
        </motion.div>
    );
}

// Modal component
function MerchModal({ item, onClose }) {
    if (!item) return null;

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        >
            <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="relative bg-[#0a0a0a] border border-white/10 rounded-3xl overflow-hidden max-w-4xl w-full flex flex-col md:flex-row"
            >
                {/* Close button - Mobile */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 z-50 p-2 rounded-full bg-black/50 backdrop-blur-sm hover:bg-black/70 transition-colors border border-white/10 md:hidden"
                >
                    <IconX size={20} className="text-white/80" />
                </button>

                {/* Image Section */}
                <div className="w-full md:w-1/2 h-64 md:h-auto relative bg-white/5">
                    <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent md:bg-gradient-to-r" />
                </div>

                {/* Content Section */}
                <div className="w-full md:w-1/2 p-8 relative flex flex-col justify-center">
                    {/* Close button - Desktop */}
                    <button
                        onClick={onClose}
                        className="absolute top-8 right-8 hidden md:block p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors"
                    >
                        <IconX size={20} className="text-white/60" />
                    </button>

                    <div className="mb-6">
                        <span className="inline-block px-3 py-1 rounded-full bg-[var(--accent)]/10 text-[var(--accent)] text-xs font-medium mb-3">
                            {item.category}
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">{item.title}</h2>
                        <div className="text-2xl font-semibold text-white/90 mb-4">{item.price}</div>
                        <p className="text-white/60 leading-relaxed">
                            {item.description}
                        </p>
                    </div>

                    <div className="space-y-4 mt-auto">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-white/5 rounded-xl p-3 text-center">
                                <span className="block text-white/40 text-xs mb-1 uppercase tracking-wider">Material</span>
                                <span className="text-white font-medium">Premium Cotton</span>
                            </div>
                            <div className="bg-white/5 rounded-xl p-3 text-center">
                                <span className="block text-white/40 text-xs mb-1 uppercase tracking-wider">Delivery</span>
                                <span className="text-white font-medium">3-5 Days</span>
                            </div>
                        </div>

                        {item.status === 'sold_out' ? (
                            <button
                                disabled
                                className="w-full bg-white/10 text-white/40 py-4 rounded-xl font-semibold cursor-not-allowed uppercase tracking-wide"
                            >
                                Sold Out
                            </button>
                        ) : (
                            <a
                                href={item.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full flex items-center justify-center gap-2 bg-[var(--accent)] hover:bg-[var(--accent)]/90 text-white py-4 rounded-xl font-semibold transition-all hover:scale-[1.02] active:scale-[0.98] uppercase tracking-wide"
                            >
                                <IconShoppingBag size={20} />
                                Buy Now
                            </a>
                        )}
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
}

// Main page component
function MerchandisePage() {
    const [selectedItem, setSelectedItem] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setIsLoading(false), 500);
        return () => clearTimeout(timer);
    }, []);

    if (isLoading) {
        return (
            <div className="bg-[#050505] min-h-screen flex items-center justify-center">
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.5, 1, 0.5]
                    }}
                    transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="w-16 h-16 rounded-full border-2 border-[var(--accent)] border-t-transparent"
                    style={{ animation: 'spin 1s linear infinite' }}
                />
            </div>
        );
    }

    return (
        <div className="bg-[#050505] min-h-screen">
            <Navbar />

            {/* Hero Section */}
            <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-20">
                {/* Animated background */}
                <div className="absolute inset-0">
                    {/* Grid pattern */}
                    <div
                        className="absolute inset-0 opacity-[0.03]"
                        style={{
                            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
                            backgroundSize: '60px 60px'
                        }}
                    />

                    {/* Gradient orbs */}
                    <motion.div
                        className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-[var(--accent)]/10 blur-[120px]"
                        animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.3, 0.5, 0.3]
                        }}
                        transition={{ duration: 8, repeat: Infinity }}
                    />
                    <motion.div
                        className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-[#8b5cf6]/10 blur-[100px]"
                        animate={{
                            scale: [1.2, 1, 1.2],
                            opacity: [0.3, 0.5, 0.3]
                        }}
                        transition={{ duration: 10, repeat: Infinity }}
                    />
                </div>

                {/* Content */}
                <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        {/* Badge */}
                        <motion.div
                            className="inline-flex items-center gap-2 bg-[var(--accent)]/10 border border-[var(--accent)]/20 rounded-full px-4 py-2 mb-8"
                            animate={{ y: [0, -5, 0] }}
                            transition={{ duration: 3, repeat: Infinity }}
                        >
                            <IconTag className="text-[var(--accent)]" size={18} />
                            <span className="text-[var(--accent)] text-sm font-medium">Official Merchandise</span>
                        </motion.div>

                        {/* Title */}
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-tight">
                            <span className="block">WEAR.</span>
                            <span className="block bg-gradient-to-r from-[var(--accent)] via-[#8b5cf6] to-[var(--primary)] bg-clip-text text-transparent">
                                FLAUNT.
                            </span>
                            <span className="block">VIBE.</span>
                        </h1>

                        {/* Subtitle */}
                        <p className="text-white/50 text-lg md:text-xl max-w-2xl mx-auto mb-10">
                            Grab the exclusive VITOPIA '25 collection. Limited edition apparel and accessories
                            designed to make you stand out.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Merch Grid Section */}
            <section className="py-20 px-4">
                <div className="max-w-7xl mx-auto">
                    {/* Section header */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                            Latest Collection
                        </h2>
                        <p className="text-white/50 max-w-xl mx-auto">
                            Explore our premium range of festival gear
                        </p>
                    </motion.div>

                    {/* Merch grid - Centered with Flex */}
                    <div className="flex flex-wrap justify-center gap-10">
                        {merchData.map((item, index) => (
                            <div key={item.id} className="w-full sm:w-[calc(50%-20px)] lg:w-[calc(25%-20px)] min-w-[300px] max-w-[380px]">
                                <MerchCard
                                    item={item}
                                    index={index}
                                    onClick={setSelectedItem}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />

            {/* Modal */}
            <AnimatePresence>
                {selectedItem && (
                    <MerchModal item={selectedItem} onClose={() => setSelectedItem(null)} />
                )}
            </AnimatePresence>
        </div>
    );
}

export default MerchandisePage;
