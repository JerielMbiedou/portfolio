import React from "react";
import { motion } from "framer-motion";
import { Server, Brain, Network, Braces, Cloud, Database } from "lucide-react";

const skillCategories = [
  {
    title: "Machine Learning",
    icon: Brain,
    skills: ["PyTorch", "Scikit-learn", "Scanpy", "Neural Networks", "Deep Learning", "Representation Learning"]
  },
  {
    title: "Data Science",
    icon: Network,
    skills: ["Pandas", "NumPy", "Matplotlib", "Seaborn", "D3.js", "Bokeh"]
  },
  {
    title: "Programming Languages",
    icon: Braces,
    skills: ["Python", "Java", "C#", "TypeScript", "Haskell", "Agda"]
  },
  {
    title: "Backend Development",
    icon: Server,
    skills: ["ASP.NET", "NestJS", "Django", "Laravel", "Node.js", "REST APIs"]
  },
  {
    title: "Frontend Development",
    icon: Cloud,
    skills: ["Angular", "AngularJS", "Vue.js", "TailwindCSS", "HTML/CSS", "JavaScript"]
  },
  {
    title: "Tools & Workflow",
    icon: Database,
    skills: ["Git", "GitHub", "GitLab", "Azure DevOps", "Jira", "Docker"]
  }
];

export function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="skills" className="py-24 bg-secondary/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Technical <span className="text-gradient">Arsenal</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            A broad toolkit built across academia and industry — from ML research and data science to full-stack software engineering.
          </p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skillCategories.map((category, idx) => (
            <motion.div 
              key={idx}
              variants={itemVariants}
              className="glass-card p-6 rounded-2xl flex flex-col"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-primary/10 rounded-xl text-primary">
                  <category.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-foreground">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2 mt-auto">
                {category.skills.map((skill, sIdx) => (
                  <span 
                    key={sIdx}
                    className="px-3 py-1.5 text-sm font-medium bg-background/50 border border-white/5 text-muted-foreground rounded-lg hover:text-primary hover:border-primary/30 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
