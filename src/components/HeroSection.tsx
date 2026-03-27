import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowDown, FileText, Mail, Code2, Database, Globe, Hexagon } from "lucide-react";

const roles = [
  "Software Engineer",
  "Cloud Computing Enthusiast",
  "DevOps Explorer",
  "Full-Stack Developer",
];

const HeroSection = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setText(current.slice(0, text.length + 1));
          if (text.length + 1 === current.length) {
            setTimeout(() => setIsDeleting(true), 2000); // Wait longer before deleting
          }
        } else {
          setText(current.slice(0, text.length - 1));
          if (text.length === 0) {
            setIsDeleting(false);
            setRoleIndex((prev) => (prev + 1) % roles.length);
          }
        }
      },
      isDeleting ? 40 : 80
    );
    return () => clearTimeout(timeout);
  }, [text, isDeleting, roleIndex]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Immersive Dot grid background */}
      <div className="absolute inset-0 dot-grid opacity-[0.35] pointer-events-none" />

      {/* Dynamic Aurora Glow Effects */}
      <motion.div
        animate={{ 
          opacity: [0.3, 0.6, 0.3], 
          scale: [0.8, 1.1, 0.8], 
          rotate: [0, 90, 0] 
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full bg-primary/20 blur-[120px] pointer-events-none mix-blend-screen"
      />

      <motion.div
        animate={{ 
          opacity: [0.4, 0.7, 0.4], 
          scale: [1, 1.2, 1], 
          x: [0, 50, 0] 
        }}
        transition={{ duration: 12, delay: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-accent-warm/20 blur-[130px] pointer-events-none mix-blend-screen"
      />

      <motion.div
        animate={{ 
          opacity: [0.2, 0.5, 0.2], 
          scale: [0.9, 1.3, 0.9],
        }}
        transition={{ duration: 18, delay: 1, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-[100%] bg-accent/10 blur-[150px] pointer-events-none mix-blend-screen"
      />

      {/* Floating Tech Elements Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div 
          animate={{ y: [0, -30, 0], x: [0, 15, 0], rotate: [0, 45, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[15%] left-[10%] opacity-15 text-primary" 
        >
          <Code2 size={40} />
        </motion.div>
        <motion.div 
          animate={{ y: [0, 40, 0], x: [0, -20, 0], rotate: [0, -45, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-[20%] right-[12%] opacity-15 text-accent-warm" 
        >
          <Database size={48} />
        </motion.div>
        <motion.div 
          animate={{ y: [0, -25, 0], x: [0, 20, 0], rotate: [0, 180, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear", delay: 2 }}
          className="absolute top-[40%] right-[8%] opacity-[0.12] text-accent" 
        >
          <Hexagon size={56} />
        </motion.div>
        <motion.div 
          animate={{ y: [0, 30, 0], x: [0, -15, 0], rotate: [0, -90, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut", delay: 3 }}
          className="absolute bottom-[35%] left-[8%] opacity-[0.12] text-primary whitespace-nowrap" 
        >
          <Globe size={40} />
        </motion.div>
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center flex flex-col items-center">
        
        {/* Availability Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="mb-8"
        >
          <div className="glass-badge">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-muted-foreground">Available for new opportunities</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl mx-auto"
        >
          <motion.h1
            initial={{ opacity: 0, filter: "blur(10px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
            className="text-5xl sm:text-6xl md:text-8xl font-bold tracking-tight mb-6 leading-tight"
          >
            Hi, I'm <br className="sm:hidden" />
            <span className="gradient-text-animated inline-block pb-2">
              Boddiga Sai Krishna
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="text-xl sm:text-2xl md:text-3xl text-muted-foreground font-medium h-12 sm:h-10 mb-8 flex justify-center items-center"
          >
            <span>Passionate&nbsp;</span>
            <span className="gradient-text-warm font-semibold">{text}</span>
            <span className="w-[3px] h-[1em] bg-accent-warm ml-1 animate-blink relative top-[2px]"></span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-muted-foreground/80 max-w-2xl mx-auto leading-relaxed mb-12 text-base sm:text-lg text-balance"
          >
            Crafting exceptional digital experiences through robust backend architectures and highly polished frontend interfaces. Building the future, one line of code at a time.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-5"
          >
            <motion.a
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px -5px rgba(255,107,74,0.5)" }}
              whileTap={{ scale: 0.95 }}
              href="#projects"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-accent-warm to-primary text-white font-semibold text-lg transition-all duration-300"
            >
              View My Work
              <ArrowDown size={18} className="animate-bounce" />
            </motion.a>
            
            <div className="flex gap-4 w-full sm:w-auto">
              <motion.a
                whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
                whileTap={{ scale: 0.95 }}
                href="#contact"
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full border border-white/10 glass-card text-foreground font-medium transition-all duration-300 group"
              >
                <Mail size={18} className="text-muted-foreground group-hover:text-primary transition-colors" />
                <span>Contact</span>
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
                whileTap={{ scale: 0.95 }}
                href="#"
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full border border-white/10 glass-card text-foreground font-medium transition-all duration-300 group"
              >
                <FileText size={18} className="text-muted-foreground group-hover:text-accent-warm transition-colors" />
                <span>Resume</span>
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
