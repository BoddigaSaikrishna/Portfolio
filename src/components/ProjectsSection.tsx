import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

interface Project {
  title: string;
  description: string;
  tags: string[];
  githubUrl?: string;
  demoUrl?: string;
}

const projects: Project[] = [
  {
    title: "InterviewAI",
    description:
      "An AI-powered interview preparation platform built using React, TypeScript, Vite, Tailwind CSS, and Supabase. Includes mock interviews, AI scoring, feedback reports, readiness analysis, PDF export, and automated email results.",
    tags: ["React", "TypeScript", "Vite", "Tailwind CSS", "Supabase", "AI"],
    githubUrl: "https://github.com/BoddigaSaikrishna/Interview.AI.git",
    demoUrl: "https://interview-ai-uqva.onrender.com/",
  },
  {
    title: "Farm2Home",
    description:
      "A full-stack e-commerce platform connecting farmers and consumers using React, TypeScript, Supabase Auth, PostgreSQL, and Edge Functions. Features include cart management, order tracking, and automated email notifications.",
    tags: ["React", "TypeScript", "Supabase", "PostgreSQL", "Edge Functions"],
    githubUrl: "https://github.com/BoddigaSaikrishna/Farm2Home",
    demoUrl: "https://myfarm2home.vercel.app",
  },
  {
    title: "TestCase Pro",
    description:
      "A comprehensive test case management system featuring a segregated architecture. The frontend is built with React, TypeScript, and Vite, while the backend leverages Express.js and Supabase for secure data management.",
    tags: ["React", "TypeScript", "Vite", "Express.js", "Supabase"],
    githubUrl: "https://github.com/BoddigaSaikrishna/Test-Case-Management-System.git",
    demoUrl: "#",
  },
];

const ProjectsSection = () => (
  <section id="projects" className="py-24 relative">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <p className="mono-label mb-3">Work</p>
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-foreground mb-12">
          Featured Projects
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: i * 0.15,
              ease: [0.16, 1, 0.3, 1],
            }}
            whileHover={{ y: -8, scale: 1.02, transition: { duration: 0.2 } }}
            className="glass-card-hover p-6 flex flex-col"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-foreground">
                {project.title}
              </h3>
              <div className="flex items-center gap-3">
                <motion.a 
                  href={project.githubUrl || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, rotate: 5 }} 
                  whileTap={{ scale: 0.9 }}
                >
                  <Github
                    size={18}
                    className="text-muted-foreground hover:text-primary transition-colors cursor-pointer"
                  />
                </motion.a>
                <motion.a 
                  href={project.demoUrl || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, rotate: 5 }} 
                  whileTap={{ scale: 0.9 }}
                >
                  <ExternalLink
                    size={18}
                    className="text-muted-foreground hover:text-primary transition-colors cursor-pointer"
                  />
                </motion.a>
              </div>
            </div>

            <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-1">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <motion.span
                  key={tag}
                  whileHover={{ scale: 1.05 }}
                  className="font-mono text-xs px-2.5 py-1 rounded-md bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 transition-colors cursor-default"
                >
                  {tag}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;
