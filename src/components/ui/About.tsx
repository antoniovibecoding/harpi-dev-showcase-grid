import { Card, CardContent } from "./card";
import { Badge } from "./badge";
import { Code, Palette, Zap, Globe } from "lucide-react";

const About = () => {
  const skills = [
    "React", "TypeScript", "Node.js", "Python", "PostgreSQL", 
    "MongoDB", "AWS", "Docker", "Next.js", "Tailwind CSS"
  ];
  
  const services = [
    {
      icon: Code,
      title: "Desenvolvimento Web",
      description: "Aplicações web modernas e responsivas com foco na experiência do usuário"
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Interfaces intuitivas e elegantes que convertem visitantes em clientes"
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Otimização avançada para velocidade e eficiência em todos os dispositivos"
    },
    {
      icon: Globe,
      title: "Consultoria",
      description: "Estratégias digitais personalizadas para acelerar o crescimento do seu negócio"
    }
  ];

  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Sobre Mim
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Desenvolvedor apaixonado por tecnologia com mais de 5 anos de experiência 
            criando soluções digitais que impactam positivamente negócios e usuários.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Bio */}
          <div className="animate-slide-up">
            <h3 className="text-2xl font-semibold mb-6">Minha Jornada</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Começei minha jornada no desenvolvimento há mais de 5 anos, trabalhando 
                com diversas tecnologias e sempre buscando aprender algo novo. Minha 
                paixão é transformar ideias complexas em soluções digitais elegantes e funcionais.
              </p>
              <p>
                Especializo-me em desenvolvimento full-stack, com forte foco em React, 
                TypeScript e tecnologias modernas. Acredito que a melhor tecnologia é 
                aquela que resolve problemas reais de forma simples e eficiente.
              </p>
              <p>
                Quando não estou codando, gosto de estudar novas tecnologias, contribuir 
                com projetos open source e compartilhar conhecimento com a comunidade dev.
              </p>
            </div>
          </div>

          {/* Skills */}
          <div className="animate-scale-in">
            <h3 className="text-2xl font-semibold mb-6">Tecnologias</h3>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <Badge 
                  key={skill} 
                  variant="secondary" 
                  className="px-4 py-2 text-sm hover-float"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        {/* Services */}
        <div className="animate-fade-in">
          <h3 className="text-3xl font-bold text-center mb-12">
            O Que Eu Faço
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card 
                  key={index} 
                  className="hover-float surface-elevated shadow-elegant border-0"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6 text-center">
                    <div className="mb-4 inline-flex p-3 rounded-full bg-primary/10">
                      <Icon size={32} className="text-primary" />
                    </div>
                    <h4 className="text-lg font-semibold mb-3">
                      {service.title}
                    </h4>
                    <p className="text-muted-foreground text-sm">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;