import { motion } from "framer-motion";
import { Briefcase, Cloud } from "lucide-react";

const experiences = [
  {
    icon: <Cloud size={18} />,
    title: "Cloud Computing Foundations Virtual Internship",
    org: "AICTE & Google Cloud (EduSkills)",
    period: "Apr 2025 – Jun 2025",
    description:
      "Learned Google Cloud services, infrastructure, networking, storage, security, and cloud resource management.",
  },
  {
    icon: <Briefcase size={18} />,
    title: "Vice President – Megha Club",
    org: "KL University",
    period: "Jan 2024 – Present",
    description:
      "Supported leadership and management of club activities, coordinated with team members, and helped organize events and initiatives.",
  },
  {
    icon: <Briefcase size={18} />,
    title: "Business Development Intern",
    org: "Movidu Technologies Pvt Ltd",
    period: "Nov 2023 – Jul 2024",
    description:
      "Worked on business development activities, client communication, and market research.",
  },
];

const ExperienceSection = () => (
  <section id="experience" className="py-24 relative">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <p className="mono-label mb-3">Career</p>
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-foreground mb-12">
          Professional Experience
        </h2>
      </motion.div>

      <div className="relative">
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary/20 md:-translate-x-px" />

        <div className="space-y-12">
          {experiences.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className={`relative flex items-start gap-6 md:gap-0 ${
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-primary border-2 border-background -translate-x-[5px] md:-translate-x-1.5 mt-1 z-10" />

              <div className={`ml-10 md:ml-0 md:w-1/2 ${i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                <div className="glass-card p-5">
                  <div className={`flex items-center gap-2 mb-2 ${i % 2 === 0 ? "md:justify-end" : ""}`}>
                    <span className="text-primary">{item.icon}</span>
                    <span className="font-mono text-xs text-muted-foreground">{item.period}</span>
                  </div>
                  <h3 className="font-semibold text-foreground text-sm mb-1">{item.title}</h3>
                  <p className="text-sm text-primary/80 mb-2">{item.org}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default ExperienceSection;
