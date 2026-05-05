import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Collection from "./components/Collection";
import WhatsappButton from "./components/WhatsappButton";
import Footer from "./components/Footer";
import Emotional from "./components/Emotional";
import Sobre from "./components/Sobre";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Collection />
      <Emotional />
      <Sobre />
      <WhatsappButton />
      <Footer />
    </>
  );
}