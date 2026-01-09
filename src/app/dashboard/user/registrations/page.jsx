import UserDashboard from "@/components/Dashboard/userdashboard";
import { Footer } from "@/components/Homepage/sections/footer";
import Navbar from "@/components/Homepage/sections/navbar";

export default function Page() {
    return (
        <div className="min-h-screen">
            <Navbar />
            <UserDashboard/>
            <Footer />
        </div>
    )
}