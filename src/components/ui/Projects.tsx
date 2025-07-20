import { Card, CardContent, CardHeader } from "./card";
import { Button } from "./button";
import { Badge } from "./badge";
import { ExternalLink, Github, ArrowRight } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Plataforma completa de e-commerce com dashboard administrativo, sistema de pagamentos integrado e análise de vendas em tempo real.",
      tech: ["React", "Node.js", "PostgreSQL", "Stripe", "AWS"],
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      github: "https://github.com",
      demo: "https://demo.com",
      category: "Full Stack"
    },
    {
      title: "Task Management App",
      description: "Aplicativo de gerenciamento de tarefas com colaboração em tempo real, notificações push e integração com APIs externas.",
      tech: ["React", "TypeScript", "Firebase", "Material-UI"],
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
      github: "https://github.com",
      demo: "https://demo.com",
      category: "Frontend"
    },
    {
      title: "Analytics Dashboard",
      description: "Dashboard de analytics avançado com visualizações interativas, relatórios personalizáveis e processamento de big data.",
      tech: ["React", "D3.js", "Python", "MongoDB", "Docker"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      github: "https://github.com",
      demo: "https://demo.com",
      category: "Data Viz"
    },
    {
      title: "Mobile Banking App",
      description: "Aplicativo bancário mobile com autenticação biométrica, transferências instantâneas e investimentos automatizados.",
      tech: ["React Native", "Node.js", "JWT", "Redis", "AWS Lambda"],
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop",
      github: "https://github.com",
      demo: "https://demo.com",
      category: "Mobile"
    },
    {
      title: "AI Content Generator",
      description: "Ferramenta de geração de conteúdo baseada em IA para marketing digital, com templates personalizáveis e análise de performance.",
      tech: ["Next.js", "OpenAI API", "Prisma", "TailwindCSS", "Vercel"],
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
      github: "https://github.com",
      demo: "https://demo.com",
      category: "AI/ML"
    },
    {
      title: "Real Estate Portal",
      description: "Portal imobiliário completo com busca avançada, tours virtuais 360°, sistema de CRM e integração com APIs de geolocalização.",
      tech: ["Vue.js", "Laravel", "MySQL", "Google Maps API", "AWS S3"],
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop",
      github: "https://github.com",
      demo: "https://demo.com",
      category: "Web Platform"
    }
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-surface-subtle">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Projetos em Destaque
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Uma seleção dos meus trabalhos mais recentes, demonstrando expertise 
            em diferentes tecnologias e soluções inovadoras para problemas complexos.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="group hover-float surface-elevated shadow-elegant border-0 overflow-hidden animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute top-4 right-4">
                  <Badge variant="secondary" className="bg-background/90 backdrop-blur-sm">
                    {project.category}
                  </Badge>
                </div>
              </div>

              <CardHeader>
                <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <Badge 
                      key={tech} 
                      variant="outline" 
                      className="text-xs"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-2">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="flex-1"
                    asChild
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github size={16} className="mr-2" />
                      Código
                    </a>
                  </Button>
                  <Button 
                    size="sm" 
                    className="flex-1"
                    asChild
                  >
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink size={16} className="mr-2" />
                      Demo
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* More Projects CTA */}
        <div className="text-center mt-16 animate-fade-in">
          <Button variant="outline" size="lg" className="hover-float">
            Ver Todos os Projetos
            <ArrowRight size={20} className="ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;