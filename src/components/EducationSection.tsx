import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const education = [
  {
    title: "B.Tech in Computer Science and Engineering",
    specialization: "Software Modelling and Devops",
    org: "KL Deemed to be University, Vijayawada",
    period: "2024 – Present",
  },
  {
    title: "Diploma in Computer Science Engineering",
    org: "BIT Institute of Technologies, Hindupur",
    period: "2021 – 2024",
  },
];

const EducationSection = () => (
  <section id="education" className="py-24 relative section-glow">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <p className="mono-label mb-3">Academics</p>
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-foreground mb-12">
          Education
        </h2>
      </motion.div>

      <div className="grid sm:grid-cols-2 gap-6">
        {education.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
            className="glass-card-hover p-6"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <GraduationCap size={20} className="text-primary" />
              </div>
              <span className="font-mono text-xs text-muted-foreground">{item.period}</span>
            </div>
            <h3 className="font-semibold text-foreground text-sm mb-1">{item.title}</h3>
            {item.specialization && (
              <p className="text-xs text-accent-warm mb-1 font-medium">
                Specialization: {item.specialization}
              </p>
            )}
            <p className="text-sm text-primary/80">{item.org}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default EducationSection;
