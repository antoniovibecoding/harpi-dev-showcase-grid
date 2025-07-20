
import { Button } from "./button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { LampContainer } from "./lamp";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      <LampContainer>
        <motion.div
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="text-center max-w-4xl mx-auto"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
            HarpiDEV
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-2">
            by Antonio Marques
          </p>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Desenvolvedor Full Stack especializado em soluções web modernas, 
            criando experiências digitais excepcionais com tecnologias de ponta.
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center mb-12">
            <Button variant="default" size="lg" className="hover-float">
              Ver Projetos
            </Button>
            <Button variant="outline" size="lg" className="hover-float">
              Sobre Mim
            </Button>
          </div>
          
          {/* Social Links */}
          <div className="flex gap-6 justify-center mb-12">
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
          <div className="animate-bounce">
            <ArrowDown size={32} className="text-muted-foreground" />
          </div>
        </motion.div>
      </LampContainer>
    </section>
  );
};

export default Hero;
