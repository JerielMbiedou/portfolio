import React from "react";
import { motion } from "framer-motion";
import { BrainCircuit, Database, Globe } from "lucide-react";

export function About() {
  const stats = [
    { label: "Years of Industry Experience", value: "4+", icon: BrainCircuit },
    { label: "Master's Grade (GPA)", value: "2.0", icon: Database },
    { label: "HiWi Teaching Awards", value: "2×", icon: Globe },
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="aspect-square max-w-md mx-auto relative rounded-3xl overflow-hidden bg-secondary border border-white/10 shadow-2xl">
              <img 
                src={`${import.meta.env.BASE_URL}images/avatar.png`} 
                alt="Profile Avatar" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-background/80 via-transparent to-transparent mix-blend-multiply" />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-primary/20 rounded-full blur-[40px] -z-10" />
            <div className="absolute -top-8 -left-8 w-40 h-40 bg-indigo-500/20 rounded-full blur-[50px] -z-10" />
          </motion.div>

          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 text-foreground">
              Bridging the gap between <span className="text-primary">research</span> and <span className="text-primary">real-world impact</span>.
            </h2>
            
            <div className="space-y-4 text-muted-foreground text-lg mb-10">
              <p>
                Hi! I'm <span className="text-foreground font-medium">Jeriel Nkouadja Mbiedou</span>, a 22-year-old computer scientist from Cameroon, based in Germany. I completed my M.Sc. in Computer Science at RPTU Kaiserslautern in June 2025 (grade 2.0), with specializations in <span className="text-foreground font-medium">Intelligent Systems</span> and Software Engineering.
              </p>
              <p>
                My master's thesis — <span className="text-foreground font-medium">"Deep Representation Learning for Single-cell Data"</span> — used PyTorch and Scanpy to build deep learning pipelines extracting biologically meaningful representations from scRNA-seq data. This work cemented my passion for ML research and motivates my pursuit of a PhD.
              </p>
              <p>
                Alongside my studies I worked at SAP, BASF, and Dataciders, and served as a teaching assistant at RPTU — earning the <span className="text-foreground font-medium">HiWi Teaching Award</span> twice for excellence in "Fundamentals of Programming".
              </p>
            </div>

            <div className="grid grid-cols-3 gap-6">
              {stats.map((stat, i) => (
                <div key={i} className="flex flex-col items-center sm:items-start text-center sm:text-left">
                  <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-4 text-primary">
                    <stat.icon className="w-6 h-6" />
                  </div>
                  <div className="text-3xl font-display font-bold text-foreground mb-1">{stat.value}</div>
                  <div className="text-sm font-medium text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
