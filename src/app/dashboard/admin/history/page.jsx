import ScanHistory from "@/components/Dashboard/scanHistory";
import { Footer } from "@/components/Homepage/sections/footer";
import Navbar from "@/components/Homepage/sections/navbar";

export default function Page() {
    return (
        <div className="bg-black">
            <Navbar />
            <ScanHistory/>
            <Footer />
        </div>
    )
}