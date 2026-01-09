import AdminDashboard from "@/components/Dashboard/admindashboard";
import { Footer } from "@/components/Homepage/sections/footer";
import Navbar from "@/components/Homepage/sections/navbar";

export default function Page() {
    return (
        <div className="min-h-screen">
            <Navbar />
            <AdminDashboard/>
            <Footer />
        </div>
    )
}