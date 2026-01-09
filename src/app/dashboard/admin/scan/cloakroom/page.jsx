import VerifyQR1 from "@/components/Dashboard/verifyQr1";
import { Footer } from "@/components/Homepage/sections/footer";
import Navbar from "@/components/Homepage/sections/navbar";

export default function Page() {
    return (
        <div className="bg-black">
            <Navbar />
            <VerifyQR1 />
            <Footer />
        </div>
    );
}
