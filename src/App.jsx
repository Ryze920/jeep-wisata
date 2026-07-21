import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import JeepSection from "./components/JeepSection";
import Footer from "./components/Footer";
import FloatingWhatsAppButton from "./components/Floatingwhatsapp";
function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <JeepSection />
      <Footer />
      <FloatingWhatsAppButton />

      <div className="pt-24"></div>
    </>
  );
}

export default App;
