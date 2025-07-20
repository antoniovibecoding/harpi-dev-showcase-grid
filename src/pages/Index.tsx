
import Navigation from "@/components/ui/Navigation";
import Hero from "@/components/ui/Hero";
import RobotSection from "@/components/ui/RobotSection";
import About from "@/components/ui/About";
import Projects from "@/components/ui/Projects";
import Contact from "@/components/ui/Contact";
import Footer from "@/components/ui/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <section id="home">
          <Hero />
        </section>
        <RobotSection />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
