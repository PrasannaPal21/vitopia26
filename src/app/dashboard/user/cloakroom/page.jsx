import CloakRoomUserDashboard from "@/components/Dashboard/cloakRoomUserDashboard";
import { Footer } from "@/components/Homepage/sections/footer";
import Navbar from "@/components/Homepage/sections/navbar";

export default function Page() {
    return (
        <div className="min-h-screen">
            <Navbar />
            <CloakRoomUserDashboard />
            <Footer />
        </div>
    )
}