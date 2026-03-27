import { motion } from "framer-motion";
import { MapPin, Mail, Phone } from "lucide-react";

const AboutSection = () => (
  <section id="about" className="py-24 relative section-glow">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <p className="mono-label mb-3">About</p>
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-foreground mb-8">
          About Me
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <p className="text-muted-foreground leading-relaxed max-w-[65ch]">
              I am a Computer Science Engineering student passionate about
              software development, cloud computing, and modern web
              technologies. I enjoy building real-world applications and
              continuously improving my skills in programming, DevOps tools,
              and cloud platforms. I have completed cloud computing training
              through Google Cloud and gained industry exposure through
              internships and projects.
            </p>
          </div>

          <div className="space-y-4">
            <motion.div whileHover={{ scale: 1.02, x: 5 }} className="glass-card p-4 flex items-center gap-3 transition-colors hover:border-primary/30">
              <MapPin size={18} className="text-primary shrink-0" />
              <span className="text-sm text-muted-foreground">
                Sri Sathya Sai District, Rayalaseema Region, Andhra Pradesh, India
              </span>
            </motion.div>
            <motion.div whileHover={{ scale: 1.02, x: 5 }} className="glass-card p-4 flex items-center gap-3 transition-colors hover:border-primary/30">
              <Mail size={18} className="text-primary shrink-0" />
              <div className="flex flex-col gap-1">
                <span className="text-sm text-muted-foreground break-all">
                  bsaikrishnasai48@gmail.com
                </span>
                <span className="text-sm text-muted-foreground break-all">
                  2300039074cse3@gmail.com
                </span>
              </div>
            </motion.div>
            <motion.div whileHover={{ scale: 1.02, x: 5 }} className="glass-card p-4 flex items-center gap-3 transition-colors hover:border-primary/30">
              <Phone size={18} className="text-primary shrink-0" />
              <span className="text-sm text-muted-foreground">
                +91 9014059493
              </span>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default AboutSection;
