import { motion } from "framer-motion";
import { Award, Search } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger, DialogTitle } from "./ui/dialog";

const certs = [
  {
    name: "Global Certification of AWS Cloud Practitioner",
    image: "/cloud practioner.png",
  },
  {
    name: "Agentathon Hackathon Participation Certificate – GDG Hyderabad",
    image: "/agentathon.png",
  },
  {
    name: "Oracle Certified Associate",
    image: "/oracle.png.png",
  },
  {
    name: "Movidu Technologies Internship Certificate",
    image: "/Movidu.png",
  },
  {
    name: "TCS iON Career Edge – Young Professional",
    image: "/tcsion.png.png",
  },
  {
    name: "AICTE Cloud Computing Foundations Virtual Internship",
    image: "/aicte.png",
  },
  {
    name: "ServiceNow Certified Implementation Specialist – Data Foundations (CMDB and CSDM)",
    image: "/Servicenow.png",
  },
];

const CertificationsSection = () => (
  <section id="certifications" className="py-24 relative section-glow">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <p className="mono-label mb-3">Credentials</p>
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-foreground mb-12">
          Certifications
        </h2>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {certs.map((cert, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="flex"
          >
            <Dialog>
              <DialogTrigger asChild>
                <button
                  type="button"
                  className="w-full text-left glass-card-hover p-5 flex items-start gap-4 cursor-pointer group relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <Award size={20} className="text-primary shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground font-medium leading-relaxed group-hover:text-primary transition-colors duration-300">
                    {cert.name}
                  </span>
                  <Search size={16} className="text-muted-foreground absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0" />
                </button>
              </DialogTrigger>
              <DialogContent className="max-w-4xl bg-card border-border/50 p-2 sm:p-4 rounded-xl shadow-2xl overflow-hidden glass-card">
                <DialogTitle className="sr-only">{cert.name}</DialogTitle>
                <div className="relative rounded-lg overflow-hidden bg-background/50 flex items-center justify-center p-2">
                  <img 
                    src={cert.image} 
                    alt={cert.name} 
                    className="max-w-full max-h-[80vh] object-contain rounded border border-border/30"
                    loading="lazy"
                  />
                </div>
                <p className="text-center font-medium mt-2 text-foreground/80">{cert.name}</p>
              </DialogContent>
            </Dialog>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default CertificationsSection;
