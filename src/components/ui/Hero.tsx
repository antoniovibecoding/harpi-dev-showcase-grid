import { Button } from "./button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import heroBackground from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      <div className="absolute inset-0 bg-background/80" />
      
      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
            HarpiDEV
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-2">
            by Antonio Marques
          </p>
          <p className="text-lg md:text-xl text-subtle mb-8 max-w-2xl mx-auto">
            Desenvolvedor Full Stack especializado em soluções web modernas, 
            criando experiências digitais excepcionais com tecnologias de ponta.
          </p>
        </div>
        
        <div className="animate-slide-up flex flex-wrap gap-4 justify-center mb-12">
          <Button variant="default" size="lg" className="hover-float">
            Ver Projetos
          </Button>
          <Button variant="outline" size="lg" className="hover-float">
            Sobre Mim
          </Button>
        </div>
        
        {/* Social Links */}
        <div className="animate-scale-in flex gap-6 justify-center mb-12">
          <a 
            href="https://github.com" 
            className="p-3 rounded-full bg-surface-elevated shadow-elegant hover-float transition-all"
            aria-label="GitHub"
          >
            <Github size={24} />
          </a>
          <a 
            href="https://linkedin.com" 
            className="p-3 rounded-full bg-surface-elevated shadow-elegant hover-float transition-all"
            aria-label="LinkedIn"
          >
            <Linkedin size={24} />
          </a>
          <a 
            href="mailto:antonio@harpidev.com" 
            className="p-3 rounded-full bg-surface-elevated shadow-elegant hover-float transition-all"
            aria-label="Email"
          >
            <Mail size={24} />
          </a>
        </div>
        
        {/* Scroll indicator */}
        <div className="animate-bounce absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <ArrowDown size={32} className="text-muted-foreground" />
        </div>
      </div>
    </section>
  );
};

export default Hero;