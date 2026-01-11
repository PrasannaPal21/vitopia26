'use client'

import { Footer } from "@/components/Homepage/sections/footer";
import Navbar from "@/components/Homepage/sections/navbar";
import { useEffect, useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { IconTrophy, IconUsers, IconCalendar, IconMapPin, IconChevronRight, IconX, IconExternalLink } from "@tabler/icons-react";

// Sports data with enhanced details
const sportsData = [
    // 1. Cricket
    {
        id: 1,
        title: "Cricket (Men)",
        description: "Team of 15 Players • Fee: ₹5000",
        image: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=600&h=400&fit=crop",
        teamSize: "15 Players",
        registrationStatus: "open",
        registrationLink: "https://events.vitap.ac.in/e/vitopia-sports-2026-ca922eb3-2265-4aca-bc56-5607cb39d99f",
        date: "11th to 17th Feb 2026",
        venue: "VIT-AP Sports Ground",
        entryFee: "₹5000"
    },
    // 2. Football
    {
        id: 2,
        title: "Football (Men)",
        description: "Team of 15 Players • Fee: ₹5000",
        image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=600&h=400&fit=crop",
        teamSize: "15 Players",
        registrationStatus: "open",
        registrationLink: "https://events.vitap.ac.in/e/vitopia-sports-2026-ca922eb3-2265-4aca-bc56-5607cb39d99f",
        date: "12th & 13th Feb 2026",
        venue: "VIT-AP Football Arena",
        entryFee: "₹5000"
    },
    // 3. Volleyball Men
    {
        id: 3,
        title: "Volleyball (Men)",
        description: "Team of 12 Players • Fee: ₹4000",
        image: "https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?w=600&h=400&fit=crop",
        teamSize: "12 Players",
        registrationStatus: "open",
        registrationLink: "https://events.vitap.ac.in/e/vitopia-sports-2026-ca922eb3-2265-4aca-bc56-5607cb39d99f",
        date: "12th & 13th Feb 2026",
        venue: "Volleyball Court",
        entryFee: "₹4000"
    },
    // 4. Volleyball Women
    {
        id: 4,
        title: "Volleyball (Women)",
        description: "Team of 12 Players • Fee: ₹4000",
        image: "https://images.unsplash.com/photo-1592656094267-764a45160876?w=600&h=400&fit=crop",
        teamSize: "12 Players",
        registrationStatus: "open",
        registrationLink: "https://events.vitap.ac.in/e/vitopia-sports-2026-ca922eb3-2265-4aca-bc56-5607cb39d99f",
        date: "12th & 13th Feb 2026",
        venue: "Volleyball Court",
        entryFee: "₹4000"
    },
    // 5. Basketball Men
    {
        id: 5,
        title: "Basketball (Men)",
        description: "Team of 12 Players • Fee: ₹4000",
        image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=600&h=400&fit=crop",
        teamSize: "12 Players",
        registrationStatus: "open",
        registrationLink: "https://events.vitap.ac.in/e/vitopia-sports-2026-ca922eb3-2265-4aca-bc56-5607cb39d99f",
        date: "12th & 13th Feb 2026",
        venue: "Basketball Court",
        entryFee: "₹4000"
    },
    // 6. Basketball Women
    {
        id: 6,
        title: "Basketball (Women)",
        description: "Team of 12 Players • Fee: ₹4000",
        image: "https://images.unsplash.com/photo-1627627256672-0279553f9dbc?w=600&h=400&fit=crop",
        teamSize: "12 Players",
        registrationStatus: "open",
        registrationLink: "https://events.vitap.ac.in/e/vitopia-sports-2026-ca922eb3-2265-4aca-bc56-5607cb39d99f",
        date: "12th & 13th Feb 2026",
        venue: "Basketball Court",
        entryFee: "₹4000"
    },
    // 7. Badminton (Singles) Men
    {
        id: 7,
        title: "Badminton Singles (Men)",
        description: "Individual • Fee: ₹400",
        image: "https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?w=600&h=400&fit=crop",
        teamSize: "Individual",
        registrationStatus: "open",
        registrationLink: "https://events.vitap.ac.in/e/vitopia-sports-2026-ca922eb3-2265-4aca-bc56-5607cb39d99f",
        date: "12th & 13th Feb 2026",
        venue: "Indoor Badminton Court",
        entryFee: "₹400"
    },
    // 8. Badminton (Doubles) Men
    {
        id: 8,
        title: "Badminton Doubles (Men)",
        description: "Team • Fee: ₹800",
        image: "https://images.unsplash.com/photo-1613918108466-292b78a8ef95?w=600&h=400&fit=crop",
        teamSize: "Team",
        registrationStatus: "open",
        registrationLink: "https://events.vitap.ac.in/e/vitopia-sports-2026-ca922eb3-2265-4aca-bc56-5607cb39d99f",
        date: "12th & 13th Feb 2026",
        venue: "Indoor Badminton Court",
        entryFee: "₹800"
    },
    // 9. Badminton (Singles) Women
    {
        id: 9,
        title: "Badminton Singles (Women)",
        description: "Individual • Fee: ₹400",
        image: "https://images.unsplash.com/photo-1613918116549-b39178526568?w=600&h=400&fit=crop",
        teamSize: "Individual",
        registrationStatus: "open",
        registrationLink: "https://events.vitap.ac.in/e/vitopia-sports-2026-ca922eb3-2265-4aca-bc56-5607cb39d99f",
        date: "12th & 13th Feb 2026",
        venue: "Indoor Badminton Court",
        entryFee: "₹400"
    },
    // 10. Badminton (Doubles) Women
    {
        id: 10,
        title: "Badminton Doubles (Women)",
        description: "Team • Fee: ₹800",
        image: "https://images.unsplash.com/photo-1554068865-24cecd4e34b8?w=600&h=400&fit=crop",
        teamSize: "Team",
        registrationStatus: "open",
        registrationLink: "https://events.vitap.ac.in/e/vitopia-sports-2026-ca922eb3-2265-4aca-bc56-5607cb39d99f",
        date: "12th & 13th Feb 2026",
        venue: "Indoor Badminton Court",
        entryFee: "₹800"
    },
    // 11. Table Tennis (Singles) Men
    {
        id: 11,
        title: "Table Tennis Singles (Men)",
        description: "Individual • Fee: ₹400",
        image: "https://images.unsplash.com/photo-1534158914592-062992fbe900?w=600&h=400&fit=crop",
        teamSize: "Individual",
        registrationStatus: "open",
        registrationLink: "https://events.vitap.ac.in/e/vitopia-sports-2026-ca922eb3-2265-4aca-bc56-5607cb39d99f",
        date: "12th & 13th Feb 2026",
        venue: "TT Hall",
        entryFee: "₹400"
    },
    // 12. Table Tennis (Singles) Women
    {
        id: 12,
        title: "Table Tennis Singles (Women)",
        description: "Individual • Fee: ₹400",
        image: "https://images.unsplash.com/photo-1609710228159-0fa9bd7c0827?w=600&h=400&fit=crop",
        teamSize: "Individual",
        registrationStatus: "open",
        registrationLink: "https://events.vitap.ac.in/e/vitopia-sports-2026-ca922eb3-2265-4aca-bc56-5607cb39d99f",
        date: "12th & 13th Feb 2026",
        venue: "TT Hall",
        entryFee: "₹400"
    },
    // 13. Table Tennis (Doubles) Men
    {
        id: 13,
        title: "Table Tennis Doubles (Men)",
        description: "Team • Fee: ₹800",
        image: "https://images.unsplash.com/photo-1517137879134-48acfbe3be13?w=600&h=400&fit=crop",
        teamSize: "Team",
        registrationStatus: "open",
        registrationLink: "https://events.vitap.ac.in/e/vitopia-sports-2026-ca922eb3-2265-4aca-bc56-5607cb39d99f",
        date: "12th & 13th Feb 2026",
        venue: "TT Hall",
        entryFee: "₹800"
    },
    // 14. Table Tennis (Doubles) Women
    {
        id: 14,
        title: "Table Tennis Doubles (Women)",
        description: "Team • Fee: ₹800",
        image: "https://images.unsplash.com/photo-1528639599581-22956cf55132?w=600&h=400&fit=crop",
        teamSize: "Team",
        registrationStatus: "open",
        registrationLink: "https://events.vitap.ac.in/e/vitopia-sports-2026-ca922eb3-2265-4aca-bc56-5607cb39d99f",
        date: "12th & 13th Feb 2026",
        venue: "TT Hall",
        entryFee: "₹800"
    },
    // 15. Lawn Tennis (Singles) Men
    {
        id: 15,
        title: "Lawn Tennis Singles (Men)",
        description: "Individual • Fee: ₹400",
        image: "https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?w=600&h=400&fit=crop",
        teamSize: "Individual",
        registrationStatus: "open",
        registrationLink: "https://events.vitap.ac.in/e/vitopia-sports-2026-ca922eb3-2265-4aca-bc56-5607cb39d99f",
        date: "12th & 13th Feb 2026",
        venue: "Tennis Court",
        entryFee: "₹400"
    },
    // 16. Chess (Women)
    {
        id: 16,
        title: "Chess (Women)",
        description: "Any No. of Players • Fee: ₹400",
        image: "https://images.unsplash.com/photo-1529699211952-734e80c4d42b?w=600&h=400&fit=crop",
        teamSize: "Individual",
        registrationStatus: "open",
        registrationLink: "https://events.vitap.ac.in/e/vitopia-sports-2026-ca922eb3-2265-4aca-bc56-5607cb39d99f",
        date: "12th & 13th Feb 2026",
        venue: "Seminar Hall",
        entryFee: "₹400"
    },
    // 17. Kho-Kho Men
    {
        id: 17,
        title: "Kho-Kho (Men)",
        description: "Team of 12 Players • Fee: ₹4000",
        image: "https://plus.unsplash.com/premium_photo-1664303847960-586318f59035?w=600&h=400&fit=crop",
        teamSize: "12 Players",
        registrationStatus: "open",
        registrationLink: "https://events.vitap.ac.in/e/vitopia-sports-2026-ca922eb3-2265-4aca-bc56-5607cb39d99f",
        date: "12th & 13th Feb 2026",
        venue: "Kho-Kho Court",
        entryFee: "₹4000"
    },
    // 18. Kho-Kho Women
    {
        id: 18,
        title: "Kho-Kho (Women)",
        description: "Team of 12 Players • Fee: ₹4000",
        image: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?w=600&h=400&fit=crop",
        teamSize: "12 Players",
        registrationStatus: "open",
        registrationLink: "https://events.vitap.ac.in/e/vitopia-sports-2026-ca922eb3-2265-4aca-bc56-5607cb39d99f",
        date: "12th & 13th Feb 2026",
        venue: "Kho-Kho Court",
        entryFee: "₹4000"
    },
    // 19. Kabaddi Women
    {
        id: 19,
        title: "Kabaddi (Women)",
        description: "Team of 12 Players • Fee: ₹4000",
        image: "https://images.unsplash.com/photo-1601646731671-55b57d34195c?w=600&h=400&fit=crop",
        teamSize: "12 Players",
        registrationStatus: "open",
        registrationLink: "https://events.vitap.ac.in/e/vitopia-sports-2026-ca922eb3-2265-4aca-bc56-5607cb39d99f",
        date: "14th & 15th Feb 2026",
        venue: "Kabaddi Mat",
        entryFee: "₹4000"
    },
    // 20. Kabaddi Men
    {
        id: 20,
        title: "Kabaddi (Men)",
        description: "Team of 12 Players • Fee: ₹4000",
        image: "https://images.unsplash.com/photo-1616423405786-218413de7640?w=600&h=400&fit=crop",
        teamSize: "12 Players",
        registrationStatus: "open",
        registrationLink: "https://events.vitap.ac.in/e/vitopia-sports-2026-ca922eb3-2265-4aca-bc56-5607cb39d99f",
        date: "14th & 15th Feb 2026",
        venue: "Kabaddi Mat",
        entryFee: "₹4000"
    },
    // 21. Throwball Women
    {
        id: 21,
        title: "Throwball (Women)",
        description: "Team of 12 Players • Fee: ₹3000",
        image: "https://images.unsplash.com/photo-1592656094267-764a45160876?w=600&h=400&fit=crop",
        teamSize: "12 Players",
        registrationStatus: "open",
        registrationLink: "https://events.vitap.ac.in/e/vitopia-sports-2026-ca922eb3-2265-4aca-bc56-5607cb39d99f",
        date: "14th Feb 2026",
        venue: "Throwball Court",
        entryFee: "₹3000"
    },
    // 22. Long Jump Men
    {
        id: 22,
        title: "Long Jump (Men)",
        description: "Individual • Fee: ₹400",
        image: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=600&h=400&fit=crop",
        teamSize: "Individual",
        registrationStatus: "open",
        registrationLink: "https://events.vitap.ac.in/e/vitopia-sports-2026-ca922eb3-2265-4aca-bc56-5607cb39d99f",
        date: "15th Feb 2026",
        venue: "Athletics Track",
        entryFee: "₹400"
    },
    // 23. Long Jump Women
    {
        id: 23,
        title: "Long Jump (Women)",
        description: "Individual • Fee: ₹400",
        image: "https://images.unsplash.com/photo-1549488330-891ca9d25574?w=600&h=400&fit=crop",
        teamSize: "Individual",
        registrationStatus: "open",
        registrationLink: "https://events.vitap.ac.in/e/vitopia-sports-2026-ca922eb3-2265-4aca-bc56-5607cb39d99f",
        date: "15th Feb 2026",
        venue: "Athletics Track",
        entryFee: "₹400"
    },
    // 24. Triple Jump Men
    {
        id: 24,
        title: "Triple Jump (Men)",
        description: "Individual • Fee: ₹400",
        image: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=600&h=400&fit=crop",
        teamSize: "Individual",
        registrationStatus: "open",
        registrationLink: "https://events.vitap.ac.in/e/vitopia-sports-2026-ca922eb3-2265-4aca-bc56-5607cb39d99f",
        date: "15th Feb 2026",
        venue: "Athletics Track",
        entryFee: "₹400"
    },
    // 25. Shotput Men
    {
        id: 25,
        title: "Shotput (Men)",
        description: "Individual • Fee: ₹400",
        image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=600&h=400&fit=crop",
        teamSize: "Individual",
        registrationStatus: "open",
        registrationLink: "https://events.vitap.ac.in/e/vitopia-sports-2026-ca922eb3-2265-4aca-bc56-5607cb39d99f",
        date: "15th Feb 2026",
        venue: "Field Events Area",
        entryFee: "₹400"
    },
    // 26. Shotput Women
    {
        id: 26,
        title: "Shotput (Women)",
        description: "Individual • Fee: ₹400",
        image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=600&h=400&fit=crop",
        teamSize: "Individual",
        registrationStatus: "open",
        registrationLink: "https://events.vitap.ac.in/e/vitopia-sports-2026-ca922eb3-2265-4aca-bc56-5607cb39d99f",
        date: "15th Feb 2026",
        venue: "Field Events Area",
        entryFee: "₹400"
    },
    // 27. 100m Meters Men
    {
        id: 27,
        title: "100 Meters (Men)",
        description: "Individual • Fee: ₹400",
        image: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=600&h=400&fit=crop",
        teamSize: "Individual",
        registrationStatus: "open",
        registrationLink: "https://events.vitap.ac.in/e/vitopia-sports-2026-ca922eb3-2265-4aca-bc56-5607cb39d99f",
        date: "15th Feb 2026",
        venue: "Athletics Track",
        entryFee: "₹400"
    },
    // 28. 400m Meters Men
    {
        id: 28,
        title: "400 Meters (Men)",
        description: "Individual • Fee: ₹400",
        image: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=600&h=400&fit=crop",
        teamSize: "Individual",
        registrationStatus: "open",
        registrationLink: "https://events.vitap.ac.in/e/vitopia-sports-2026-ca922eb3-2265-4aca-bc56-5607cb39d99f",
        date: "15th Feb 2026",
        venue: "Athletics Track",
        entryFee: "₹400"
    },
    // 29. 4x100m Relay Men
    {
        id: 29,
        title: "4x100m Relay (Men)",
        description: "Individual • Fee: ₹400",
        image: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=600&h=400&fit=crop",
        teamSize: "Individual",
        registrationStatus: "open",
        registrationLink: "https://events.vitap.ac.in/e/vitopia-sports-2026-ca922eb3-2265-4aca-bc56-5607cb39d99f",
        date: "15th Feb 2026",
        venue: "Athletics Track",
        entryFee: "₹400"
    },
    // 30. 100 Meters Women
    {
        id: 30,
        title: "100 Meters (Women)",
        description: "Individual • Fee: ₹400",
        image: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=600&h=400&fit=crop",
        teamSize: "Individual",
        registrationStatus: "open",
        registrationLink: "https://events.vitap.ac.in/e/vitopia-sports-2026-ca922eb3-2265-4aca-bc56-5607cb39d99f",
        date: "15th Feb 2026",
        venue: "Athletics Track",
        entryFee: "₹400"
    },
    // 31. 400 Meters Women
    {
        id: 31,
        title: "400 Meters (Women)",
        description: "Individual • Fee: ₹400",
        image: "https://images.unsplash.com/photo-1549488330-891ca9d25574?w=600&h=400&fit=crop",
        teamSize: "Individual",
        registrationStatus: "open",
        registrationLink: "https://events.vitap.ac.in/e/vitopia-sports-2026-ca922eb3-2265-4aca-bc56-5607cb39d99f",
        date: "15th Feb 2026",
        venue: "Athletics Track",
        entryFee: "₹400"
    },
    // 32. 4x100m Relay Women
    {
        id: 32,
        title: "4x100m Relay (Women)",
        description: "Individual • Fee: ₹400",
        image: "https://images.unsplash.com/photo-1549488330-891ca9d25574?w=600&h=400&fit=crop",
        teamSize: "Individual",
        registrationStatus: "open",
        registrationLink: "https://events.vitap.ac.in/e/vitopia-sports-2026-ca922eb3-2265-4aca-bc56-5607cb39d99f",
        date: "15th Feb 2026",
        venue: "Athletics Track",
        entryFee: "₹400"
    },
    // 33. Discus Throw Men
    {
        id: 33,
        title: "Discus Throw (Men)",
        description: "Individual • Fee: ₹400",
        image: "https://images.unsplash.com/photo-1547445722-e7379743c3d5?w=600&h=400&fit=crop",
        teamSize: "Individual",
        registrationStatus: "open",
        registrationLink: "https://events.vitap.ac.in/e/vitopia-sports-2026-ca922eb3-2265-4aca-bc56-5607cb39d99f",
        date: "15th Feb 2026",
        venue: "Field Events Area",
        entryFee: "₹400"
    },
    // 34. Discus Throw Women
    {
        id: 34,
        title: "Discus Throw (Women)",
        description: "Individual • Fee: ₹400",
        image: "https://images.unsplash.com/photo-1547445722-e7379743c3d5?w=600&h=400&fit=crop",
        teamSize: "Individual",
        registrationStatus: "open",
        registrationLink: "https://events.vitap.ac.in/e/vitopia-sports-2026-ca922eb3-2265-4aca-bc56-5607cb39d99f",
        date: "15th Feb 2026",
        venue: "Field Events Area",
        entryFee: "₹400"
    },
    // 35. Power Lifting 59-64kg Men
    {
        id: 35,
        title: "Power Lifting 59-64kg (Men)",
        description: "Individual • Fee: ₹500",
        image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600&h=400&fit=crop",
        teamSize: "Individual",
        registrationStatus: "open",
        registrationLink: "https://events.vitap.ac.in/e/vitopia-sports-2026-ca922eb3-2265-4aca-bc56-5607cb39d99f",
        date: "15th Feb 2026",
        venue: "Gymnasium",
        entryFee: "₹500"
    },
    // 36. Power Lifting 65-74kg Men
    {
        id: 36,
        title: "Power Lifting 65-74kg (Men)",
        description: "Individual • Fee: ₹500",
        image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600&h=400&fit=crop",
        teamSize: "Individual",
        registrationStatus: "open",
        registrationLink: "https://events.vitap.ac.in/e/vitopia-sports-2026-ca922eb3-2265-4aca-bc56-5607cb39d99f",
        date: "15th Feb 2026",
        venue: "Gymnasium",
        entryFee: "₹500"
    },
    // 37. Power Lifting 75-84kg Men
    {
        id: 37,
        title: "Power Lifting 75-84kg (Men)",
        description: "Individual • Fee: ₹500",
        image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600&h=400&fit=crop",
        teamSize: "Individual",
        registrationStatus: "open",
        registrationLink: "https://events.vitap.ac.in/e/vitopia-sports-2026-ca922eb3-2265-4aca-bc56-5607cb39d99f",
        date: "15th Feb 2026",
        venue: "Gymnasium",
        entryFee: "₹500"
    },
    // 38. Power Lifting above 85kg Men
    {
        id: 38,
        title: "Power Lifting >85kg (Men)",
        description: "Individual • Fee: ₹500",
        image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600&h=400&fit=crop",
        teamSize: "Individual",
        registrationStatus: "open",
        registrationLink: "https://events.vitap.ac.in/e/vitopia-sports-2026-ca922eb3-2265-4aca-bc56-5607cb39d99f",
        date: "15th Feb 2026",
        venue: "Gymnasium",
        entryFee: "₹500"
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

// Sport card component with modern design
function SportCard({ sport, index, onClick }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            whileHover={{ y: -8 }}
            onClick={() => onClick(sport)}
            className="group relative cursor-pointer h-[420px] w-full"
        >
            {/* Card glow effect */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] rounded-2xl opacity-0 group-hover:opacity-30 blur-xl transition-all duration-500" />

            {/* Main card */}
            <div className="relative h-full bg-white border border-gray-100 rounded-2xl overflow-hidden transition-all duration-300 group-hover:border-violet-500/30 flex flex-col shadow-sm group-hover:shadow-xl group-hover:shadow-violet-500/10">
                {/* Image */}
                <div className="absolute inset-0 overflow-hidden">
                    <img
                        src={sport.image}
                        alt={sport.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    {/* Gradient overlay - lightened for white theme */}
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent opacity-80" />
                </div>

                {/* Registration status badge */}
                <div className={`absolute top-4 right-4 z-20 px-3 py-1 rounded-full text-xs font-medium backdrop-blur-md border ${sport.registrationStatus === 'open'
                    ? 'bg-violet-500/10 text-violet-600 border-violet-500/20'
                    : 'bg-gray-100 text-gray-500 border-gray-200'
                    }`}>
                    {sport.registrationStatus === 'open' ? 'Open' : 'Closed'}
                </div>

                {/* Content positioned at bottom with better spacing */}
                <div className="absolute bottom-0 left-0 right-0 p-6 z-10 flex flex-col justify-end h-full">
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-violet-400 transition-colors duration-300 leading-tight">
                        {sport.title}
                    </h3>
                    <p className="text-gray-200 text-sm mb-4 line-clamp-2 leading-relaxed">
                        {sport.description}
                    </p>

                    {/* Meta info */}
                    <div className="flex items-center gap-4 text-xs font-medium text-gray-300 border-t border-white/10 pt-4 mt-auto">
                        <span className="flex items-center gap-1.5">
                            <IconUsers size={16} className="text-violet-400" />
                            {sport.teamSize}
                        </span>
                        <span className="flex items-center gap-1.5">
                            <IconCalendar size={16} className="text-violet-400" />
                            {sport.date.split(',')[0]}
                        </span>
                    </div>
                </div>

                {/* Hover arrow */}
                <motion.div
                    className="absolute bottom-6 right-6 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                >
                    <IconChevronRight className="text-violet-400" size={24} />
                </motion.div>
            </div>
        </motion.div>
    );
}


// Modal component
function SportModal({ sport, onClose }) {
    if (!sport) return null;

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/90 backdrop-blur-md z-50 flex items-center justify-center p-4 lg:p-8"
        >
            <motion.div
                initial={{ scale: 0.95, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.95, opacity: 0, y: 20 }}
                onClick={(e) => e.stopPropagation()}
                className="relative bg-white border border-gray-100 rounded-3xl overflow-hidden max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
            >
                {/* Image header */}
                <div className="relative h-64 sm:h-72 overflow-hidden group">
                    <img
                        src={sport.image}
                        alt={sport.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />

                    {/* Close button */}
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 p-2.5 rounded-full bg-black/60 backdrop-blur-md hover:bg-[var(--primary)] hover:text-black transition-all border border-white/10 z-50 group/close"
                    >
                        <IconX size={20} className="text-white group-hover/close:text-black" />
                    </button>
                </div>

                {/* Content */}
                <div className="p-8 -mt-20 relative z-10">
                    <div className="bg-white/80 backdrop-blur-xl border border-gray-100 rounded-2xl p-6 mb-8 shadow-xl shadow-gray-200/50">
                        {/* Title */}
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{sport.title}</h2>
                        <p className="text-gray-600 text-lg">{sport.description}</p>
                    </div>

                    {/* Details grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                        <div className="bg-gray-50 rounded-2xl p-5 border border-gray-100 hover:border-violet-500/30 transition-colors">
                            <div className="flex items-center gap-2 text-gray-500 text-sm mb-2 uppercase tracking-wider font-semibold">
                                <IconUsers size={18} className="text-violet-500" />
                                Team Size
                            </div>
                            <div className="text-gray-900 text-lg font-medium">{sport.teamSize}</div>
                        </div>
                        <div className="bg-gray-50 rounded-2xl p-5 border border-gray-100 hover:border-violet-500/30 transition-colors">
                            <div className="flex items-center gap-2 text-gray-500 text-sm mb-2 uppercase tracking-wider font-semibold">
                                <IconTrophy size={18} className="text-violet-500" />
                                Entry Fee
                            </div>
                            <div className="text-violet-600 text-lg font-bold">{sport.entryFee}</div>
                        </div>
                        <div className="bg-gray-50 rounded-2xl p-5 border border-gray-100 hover:border-violet-500/30 transition-colors">
                            <div className="flex items-center gap-2 text-gray-500 text-sm mb-2 uppercase tracking-wider font-semibold">
                                <IconCalendar size={18} className="text-violet-500" />
                                Date
                            </div>
                            <div className="text-gray-900 text-lg font-medium">{sport.date}</div>
                        </div>
                        <div className="bg-gray-50 rounded-2xl p-5 border border-gray-100 hover:border-amber-500/30 transition-colors">
                            <div className="flex items-center gap-2 text-gray-500 text-sm mb-2 uppercase tracking-wider font-semibold">
                                <IconMapPin size={18} className="text-amber-500" />
                                Venue
                            </div>
                            <div className="text-gray-900 text-lg font-medium">{sport.venue}</div>
                        </div>
                    </div>

                    {/* Action buttons */}
                    <div className="flex flex-col sm:flex-row gap-4">
                        <a
                            href="https://universitywebsitbucket.s3.ap-south-1.amazonaws.com/vitopia/Final+Rules+%26+Regulations.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 flex items-center justify-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-900 py-4 px-6 rounded-xl transition-all font-medium border border-gray-200"
                        >
                            <IconExternalLink size={20} />
                            Rules & Regulations
                        </a>
                        {sport.registrationStatus === 'open' ? (
                            <a
                                href={sport.registrationLink || '#'}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex-1 flex items-center justify-center gap-2 bg-violet-600 hover:bg-violet-700 text-white font-bold py-4 px-6 rounded-xl transition-all hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-violet-500/20"
                            >
                                Register Now
                            </a>
                        ) : (
                            <button
                                className="flex-1 bg-gray-100 text-gray-400 py-4 px-6 rounded-xl cursor-not-allowed font-medium"
                                disabled
                            >
                                Registrations Closed
                            </button>
                        )}
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
}


// Main page component
function SportsPage() {
    const [selectedSport, setSelectedSport] = useState(null);

    return (
        <div className="bg-gray-50 min-h-screen relative overflow-hidden">
            {/* Global grid line pattern - covers entire page */}
            <div
                className="fixed inset-0 pointer-events-none"
                style={{
                    backgroundImage: `
                        linear-gradient(to right, #8b5cf6 1px, transparent 1px),
                        linear-gradient(to bottom, #8b5cf6 1px, transparent 1px)
                    `,
                    backgroundSize: '60px 60px',
                    opacity: 0.12
                }}
            />

            <Navbar />

            {/* Hero Section */}
            <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-20">
                {/* Animated background */}
                <div className="absolute inset-0">
                    {/* Grid pattern */}
                    <div
                        className="absolute inset-0 opacity-[0.04]"
                        style={{
                            backgroundImage: `linear-gradient(rgba(124, 58, 237, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(124, 58, 237, 0.1) 1px, transparent 1px)`,
                            backgroundSize: '60px 60px'
                        }}
                    />

                    {/* Gradient orbs - enhanced */}
                    <motion.div
                        className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-violet-500/20 to-fuchsia-500/10 blur-[120px]"
                        animate={{
                            scale: [1, 1.3, 1],
                            opacity: [0.4, 0.6, 0.4],
                            x: [0, 50, 0],
                            y: [0, -30, 0]
                        }}
                        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                    />
                    <motion.div
                        className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-gradient-to-tl from-rose-500/15 to-violet-500/10 blur-[100px]"
                        animate={{
                            scale: [1.2, 1, 1.2],
                            opacity: [0.3, 0.5, 0.3],
                            x: [0, -40, 0],
                            y: [0, 40, 0]
                        }}
                        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                    />
                    <motion.div
                        className="absolute top-1/2 right-1/3 w-[400px] h-[400px] rounded-full bg-fuchsia-500/10 blur-[80px]"
                        animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.2, 0.4, 0.2]
                        }}
                        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
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
                            className="inline-flex md:mt-5 items-center gap-2 bg-violet-500/10 border border-violet-500/20 rounded-full px-4 py-2 mb-8"
                            animate={{ y: [0, -5, 0] }}
                            transition={{ duration: 3, repeat: Infinity }}
                        >
                            <IconTrophy className="text-violet-500" size={18} />
                            <span className="text-violet-600 text-sm font-medium">VITOPIA 2026 Sports</span>
                        </motion.div>

                        {/* Title */}
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-gray-900 mb-6 tracking-tight">
                            <span className="block">READY.</span>
                            <span className="block bg-gradient-to-r from-violet-600 via-fuchsia-500 to-rose-500 bg-clip-text text-transparent">
                                SET.
                            </span>
                            <span className="block">GO.</span>
                        </h1>

                        {/* Subtitle */}
                        <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto mb-10">
                            Unleash the athlete within you. Join us for the biggest sports extravaganza
                            of the year featuring 35+ events.
                        </p>

                        {/* Stats */}
                        <div className="flex flex-wrap justify-center gap-8 md:gap-16">
                            {[
                                { value: 35, suffix: "+", label: "Events" },
                                { value: 2000, suffix: "+", label: "Participants" },
                                { value: 4, suffix: "", label: "Days" }
                            ].map((stat, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.5 + i * 0.1 }}
                                    className="text-center"
                                >
                                    <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-1">
                                        <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                                    </div>
                                    <div className="text-gray-500 text-sm uppercase tracking-wider">
                                        {stat.label}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>


            </section>



            {/* Sports Grid Section */}
            <section className="py-20 px-4 relative">
                {/* Purple gradient orbs like hero section */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full bg-violet-500/10 blur-[100px]" />
                    <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full bg-fuchsia-500/10 blur-[80px]" />
                </div>

                <div className="max-w-6xl mx-auto relative z-10">
                    {/* Section header */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
                            Featured Sports
                        </h2>
                        <p className="text-gray-600 max-w-xl mx-auto">
                            Explore our comprehensive lineup of sporting events
                        </p>
                    </motion.div>

                    {/* Sports grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {sportsData.map((sport, index) => (
                            <SportCard
                                key={sport.id}
                                sport={sport}
                                index={index}
                                onClick={setSelectedSport}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-4">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative overflow-hidden rounded-3xl bg-white border border-gray-200 p-12 text-center shadow-2xl shadow-gray-200/50"
                    >
                        {/* Background decoration */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-violet-500/10 rounded-full blur-[80px]" />
                        <div className="absolute bottom-0 left-0 w-48 h-48 bg-fuchsia-500/10 rounded-full blur-[60px]" />

                        <div className="relative z-10">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                Ready to Compete?
                            </h2>
                            <p className="text-gray-600 mb-8 max-w-xl mx-auto">
                                Check out the rule book and prepare for the ultimate showdown.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            <Footer />

            {/* Modal */}
            <AnimatePresence>
                {selectedSport && (
                    <SportModal sport={selectedSport} onClose={() => setSelectedSport(null)} />
                )}
            </AnimatePresence>
        </div>

    );
}

export default SportsPage;
