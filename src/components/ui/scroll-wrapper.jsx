"use client";
import React from "react";
import { motion } from "framer-motion";

export function ScrollWrapper({ children, className = "" }) {
    // Optimized for performance - removed continuous scroll listeners
    return (
        <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className={`relative w-full ${className}`}
        >
            {children}
        </motion.div>
    );
}

export function RevealWrapper({ children, delay = 0 }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay, ease: "easeOut" }}
        >
            {children}
        </motion.div>
    );
}
