import React from "react";
import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Calendar } from "lucide-react";

const experience = [
  {
    role: "Software Developer",
    company: "Dataciders InMediasP GmbH — Hennigsdorf",
    date: "09/2025 – Present",
    description: [
      "Customization and extension of the CIM Database (PLM) using the CONTACT Elements framework.",
      "Implementing business logic in Python and managing large-scale MySQL database schemas and migrations.",
      "Developing low-code configurations to meet specific technical requirements.",
      "Managing the end-to-end data lifecycle: mapping, transformation, and cleanup of legacy data for the new PLM environment."
    ]
  },
  {
    role: "Working Student — Individual Software Solutions",
    company: "Dataciders InMediasP GmbH — Hennigsdorf",
    date: "01/2024 – 08/2025",
    description: [
      "Developed web applications with AngularJS and TailwindCSS on the frontend.",
      "Implemented backend logic using NestJS.",
      "Collaborated in an agile development team to deliver end-to-end features."
    ]
  },
  {
    role: "Teaching Assistant (Wissenschaftliche Hilfskraft)",
    company: "RPTU Kaiserslautern-Landau — Kaiserslautern",
    date: "10/2022 – 06/2025",
    description: [
      "Tutor for Object-Oriented Programming, Fundamentals of Programming, and Software Engineering Project.",
      "Created exercise sheets, conducted tutorial sessions, and graded exams.",
      "🏆 HiWi Teaching Award 2024 & 2025 for outstanding engagement in \"Fundamentals of Programming\"."
    ]
  },
  {
    role: "Working Student — Software Engineering",
    company: "BASF SE — Ludwigshafen",
    date: "03/2023 – 09/2023",
    description: [
      "Led development of a multilingual web application maintenance tool for Product Owners.",
      "Built REST APIs with ASP.NET and a frontend with TypeScript/Angular; integrated Azure authentication (MSAL).",
      "Managed sequential databases with Entity Framework in .NET and used Azure DevOps for requirements management."
    ]
  },
  {
    role: "Working Student — Software Development",
    company: "SAP SE — St. Ingbert",
    date: "03/2022 – 02/2023",
    description: [
      "Developed comprehensive unit tests using the PTF (Platform Test Framework).",
      "Contributed to quality-assurance workflows in an enterprise-scale SAP development environment."
    ]
  },
  {
    role: "Full Stack Developer",
    company: "General Agentur Sascha Ackermann — Bad Dürkheim",
    date: "02/2021 – 02/2022",
    description: [
      "Designed and developed the company's website end-to-end according to client requirements and design specifications."
    ]
  }
];

const education = [
  {
    degree: "M.Sc. Computer Science (Grade: 2.0)",
    institution: "RPTU Kaiserslautern-Landau",
    date: "10/2023 – 06/2025",
    details: "Specializations: Intelligent Systems & Software Engineering. Thesis: \"Deep Representation Learning for Single-cell Data\" (PyTorch, Scanpy)."
  },
  {
    degree: "B.Sc. Computer Science",
    institution: "RPTU Kaiserslautern-Landau",
    date: "04/2020 – 10/2023",
    details: "Specialization: Software Engineering. Thesis: \"Interactive Visualization of Similarities of Change-intensive Systems Using Phylogenetic Trees\" (D3.js, Python)."
  },
  {
    degree: "German Language — DSH Certificate",
    institution: "Technische Universität Kaiserslautern",
    date: "10/2019 – 03/2020",
    details: "Completed the Deutsche Sprachprüfung für den Hochschulzugang (DSH) — university entrance language qualification."
  },
  {
    degree: "German Language — Certificate B2",
    institution: "Goethe Institut Kamerun — Yaoundé",
    date: "09/2018 – 07/2019",
    details: "Intensive German language study achieving the B2 (Zertifikat Deutsch) qualification."
  }
];

export function Experience() {
  return (
    <section id="experience" className="py-24 bg-secondary/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Journey & <span className="text-primary">Experience</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            From full-stack software development at SAP, BASF, and Dataciders to deep learning research and award-winning university teaching.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Work Experience */}
          <div>
            <div className="flex items-center gap-3 mb-10">
              <div className="p-3 rounded-xl bg-primary/10 text-primary">
                <Briefcase className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-display font-bold text-foreground">Work Experience</h3>
            </div>

            <div className="space-y-8 border-l-2 border-primary/20 ml-4 pl-8 relative">
              {experience.map((job, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="relative"
                >
                  <div className="absolute -left-[41px] top-1.5 w-5 h-5 rounded-full border-4 border-background bg-primary" />
                  <div className="bg-card/50 backdrop-blur-sm border border-white/5 rounded-2xl p-6 hover:border-primary/30 transition-colors">
                    <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-2 mb-4">
                      <div>
                        <h4 className="text-xl font-bold text-foreground">{job.role}</h4>
                        <div className="text-primary font-medium">{job.company}</div>
                      </div>
                      <div className="flex items-center gap-1.5 text-sm text-muted-foreground bg-secondary/50 px-3 py-1 rounded-full w-fit">
                        <Calendar className="w-4 h-4" />
                        {job.date}
                      </div>
                    </div>
                    <ul className="space-y-2">
                      {job.description.map((desc, dIdx) => (
                        <li key={dIdx} className="text-muted-foreground text-sm flex gap-2">
                          <span className="text-primary/50 mt-1">•</span>
                          <span>{desc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <div className="flex items-center gap-3 mb-10">
              <div className="p-3 rounded-xl bg-primary/10 text-primary">
                <GraduationCap className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-display font-bold text-foreground">Education</h3>
            </div>

            <div className="space-y-8 border-l-2 border-primary/20 ml-4 pl-8 relative">
              {education.map((edu, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="relative"
                >
                  <div className="absolute -left-[41px] top-1.5 w-5 h-5 rounded-full border-4 border-background bg-primary" />
                  <div className="bg-card/50 backdrop-blur-sm border border-white/5 rounded-2xl p-6 hover:border-primary/30 transition-colors">
                    <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-2 mb-4">
                      <div>
                        <h4 className="text-xl font-bold text-foreground">{edu.degree}</h4>
                        <div className="text-primary font-medium">{edu.institution}</div>
                      </div>
                      <div className="flex items-center gap-1.5 text-sm text-muted-foreground bg-secondary/50 px-3 py-1 rounded-full w-fit">
                        <Calendar className="w-4 h-4" />
                        {edu.date}
                      </div>
                    </div>
                    <p className="text-muted-foreground text-sm">
                      {edu.details}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
