import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Expertise from "@/components/Expertise";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Academic from "@/components/Academic";
import Registrations from "@/components/Registrations";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <About />
        <Expertise />
        <Experience />
        <Education />
        <Academic />
        <Registrations />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
