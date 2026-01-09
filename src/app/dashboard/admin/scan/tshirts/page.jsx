import VerifyQR from "@/components/Dashboard/verifyQr";
import { Footer } from "@/components/Homepage/sections/footer";
import Navbar from "@/components/Homepage/sections/navbar";

export default function Page() {
    return (
        <div className="bg-black">
            <Navbar />
            <VerifyQR />
            <Footer />
        </div>
    );
}
