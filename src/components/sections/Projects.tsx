import React from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink, Activity } from "lucide-react";
import { Button } from "@/components/ui/custom-button";

const projects = [
  {
    title: "Deep Representation Learning for Single-cell Data",
    description: "Master's thesis: designed a deep learning pipeline to extract biologically meaningful latent representations from single-cell RNA sequencing (scRNA-seq) data, enabling downstream clustering and cell-type annotation.",
    image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800&q=80",
    tags: ["PyTorch", "Scanpy", "Python", "Deep Learning", "Bioinformatics"],
    github: "https://github.com/JerielMbiedou/IntenseCPA",
    demo: "#"
  },
  {
    title: "Interactive Visualization of Phylogenetic Trees",
    description: "Bachelor's thesis: built an interactive web tool for visualizing the similarity structure of change-intensive software systems using phylogenetic tree representations, enabling developers to explore evolutionary patterns.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    tags: ["D3.js", "Python", "Data Visualization", "Software Analysis"],
    github: "https://github.com/JerielMbiedou/phylographix",
    demo: "https://effulgent-taffy-1fb3c3.netlify.app/"
  },
  {
    title: "Multilingual Web Application Tool",
    description: "Developed at BASF: a full-stack tool allowing Product Owners to maintain and manage multilingual content across enterprise web applications, with Azure authentication and REST API backend.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&q=80",
    tags: ["ASP.NET", "Angular", "TypeScript", "Azure", "Entity Framework"],
    github: "#",
    demo: "#"
  },
  {
    title: "PLM Database System Extension",
    description: "Extended and customized the CIM Database (PLM platform) at Dataciders using the CONTACT Elements framework. Includes Python business logic, MySQL schema migrations, and end-to-end legacy data migration.",
    image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=800&q=80",
    tags: ["Python", "MySQL", "PLM", "CIM Database", "Data Migration"],
    github: "#",
    demo: "#"
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Featured <span className="text-primary">Projects</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              A selection of my academic and industry projects, spanning deep learning research, data visualization, enterprise software, and database systems.
            </p>
          </div>
          <Button variant="outline" className="hidden md:flex">
            <Github className="w-5 h-5 mr-2" />
            View all on GitHub
          </Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group glass-card rounded-2xl overflow-hidden flex flex-col h-full"
            >
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-background/20 z-10 group-hover:bg-transparent transition-colors duration-300" />
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute top-4 right-4 z-20 flex gap-2">
                  <a href={project.github} aria-label="GitHub Repository" className="w-8 h-8 rounded-full bg-background/80 backdrop-blur text-foreground flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                    <Github className="w-4 h-4" />
                  </a>
                  <a href={project.demo} aria-label="Live Demo" className="w-8 h-8 rounded-full bg-background/80 backdrop-blur text-foreground flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-6 flex-grow">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="text-xs font-medium text-primary bg-primary/10 px-2.5 py-1 rounded-md">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-10 md:hidden flex justify-center">
          <Button variant="outline" className="w-full">
            <Github className="w-5 h-5 mr-2" />
            View all on GitHub
          </Button>
        </div>

      </div>
    </section>
  );
}
