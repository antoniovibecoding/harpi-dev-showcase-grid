import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { icon: Github, href: "https://github.com", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: Mail, href: "mailto:antonio@harpidev.com", label: "Email" }
  ];

  return (
    <footer className="bg-surface-subtle py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">HarpiDEV</h3>
            <p className="text-muted-foreground">
              Desenvolvendo soluções digitais inovadoras com paixão e precisão técnica.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-background hover:bg-accent transition-colors hover-float"
                    aria-label={link.label}
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold">Links Rápidos</h4>
            <nav className="space-y-2">
              <a href="#about" className="block text-muted-foreground hover:text-foreground transition-colors">
                Sobre Mim
              </a>
              <a href="#projects" className="block text-muted-foreground hover:text-foreground transition-colors">
                Projetos
              </a>
              <a href="#contact" className="block text-muted-foreground hover:text-foreground transition-colors">
                Contato
              </a>
            </nav>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="font-semibold">Serviços</h4>
            <div className="space-y-2 text-muted-foreground">
              <p>Desenvolvimento Web</p>
              <p>UI/UX Design</p>
              <p>Consultoria Tech</p>
              <p>Performance & SEO</p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-muted-foreground text-sm">
              © {currentYear} HarpiDEV by Antonio Marques. Todos os direitos reservados.
            </p>
            <p className="text-muted-foreground text-sm flex items-center">
              Feito com <Heart size={16} className="mx-1 text-red-500" /> e muito café
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;