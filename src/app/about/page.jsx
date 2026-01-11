import About from "@/components/AboutPage/AboutPage";
import { Footer } from "@/components/Homepage/sections/footer";
import Navbar from "@/components/Homepage/sections/navbar";

export default function Page() {
    return (
        <div className="bg-white min-h-screen">
            <Navbar />
            <About />
            <Footer />
        </div>
    );
}