import { motion } from "framer-motion";
import {
  Code2,
  Globe,
  Database,
  GitBranch,
  Terminal,
  Container,
  FileCode2,
  Braces,
} from "lucide-react";

interface SkillCategory {
  title: string;
  skills: { name: string; icon: React.ReactNode }[];
}

const categories: SkillCategory[] = [
  {
    title: "Programming Languages",
    skills: [
      { name: "Java", icon: <Code2 size={20} /> },
      { name: "Python", icon: <Terminal size={20} /> },
      { name: "C", icon: <FileCode2 size={20} /> },
    ],
  },
  {
    title: "Web Development",
    skills: [
      { name: "HTML", icon: <Globe size={20} /> },
      { name: "CSS", icon: <Braces size={20} /> },
      { name: "React", icon: <Code2 size={20} /> },
      { name: "TypeScript", icon: <FileCode2 size={20} /> },
    ],
  },
  {
    title: "Databases",
    skills: [
      { name: "PostgreSQL", icon: <Database size={20} /> },
      { name: "MySQL", icon: <Database size={20} /> },
    ],
  },
  {
    title: "Tools & Technologies",
    skills: [
      { name: "Git", icon: <GitBranch size={20} /> },
      { name: "GitHub", icon: <GitBranch size={20} /> },
      { name: "Docker", icon: <Container size={20} /> },
      { name: "Jenkins", icon: <Terminal size={20} /> },
    ],
  },
];

const SkillsSection = () => (
  <section id="skills" className="py-24 relative section-glow">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <p className="mono-label mb-3">Stack</p>
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-foreground mb-12">
          Skills & Technologies
        </h2>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((cat, ci) => (
          <motion.div
            key={cat.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: ci * 0.1,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="glass-card-hover p-6"
            whileHover={{ y: -8, scale: 1.02, transition: { duration: 0.2 } }}
          >
            <h3 className="font-mono text-xs uppercase tracking-widest text-primary mb-5">
              {cat.title}
            </h3>
            <div className="space-y-3">
              {cat.skills.map((skill) => (
                <motion.div
                  key={skill.name}
                  whileHover={{ x: 5, transition: { duration: 0.2 } }}
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors duration-200 group cursor-default"
                >
                  <span className="text-primary/60 group-hover:text-primary transition-colors">
                    {skill.icon}
                  </span>
                  <span className="text-sm font-medium">{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default SkillsSection;
