import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import UnderConstruction from "@/components/UnderConstruction";
import WhatsAppButton from "@/components/WhatsAppButton";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <UnderConstruction />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
