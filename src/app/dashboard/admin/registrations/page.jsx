import Registrations from "@/components/Dashboard/sportsRegistrations";
import { Footer } from "@/components/Homepage/sections/footer";
import Navbar from "@/components/Homepage/sections/navbar";

export default function Page() {
    return (
        <div className="bg-black">
            <Navbar />
            <Registrations />
            <Footer />
        </div>
    )
}