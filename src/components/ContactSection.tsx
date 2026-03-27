import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react";

// ✅ Get your FREE access key from https://web3forms.com/
// Sign up with bsaikrishnasai48@gmail.com and paste the key here:
const WEB3FORMS_ACCESS_KEY = "eaceebe0-2259-4f3d-97a3-abf540b5f04b";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          name: form.name,
          email: form.email,
          message: form.message,
          subject: `Portfolio Contact: Message from ${form.name}`,
          from_name: "Portfolio Contact Form",
        }),
      });

      const data = await response.json();

      if (data.success) {
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="mono-label mb-3">Connect</p>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-foreground mb-12">
            Get In Touch
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-5"
          >
            <div>
              <label className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-2 block">
                Name
              </label>
              <input
                type="text"
                required
                maxLength={100}
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-secondary border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-2 block">
                Email
              </label>
              <input
                type="email"
                required
                maxLength={255}
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-secondary border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-2 block">
                Message
              </label>
              <textarea
                required
                maxLength={1000}
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-secondary border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all resize-none"
                placeholder="Your message..."
              />
            </div>

            {/* Status feedback */}
            {status === "success" && (
              <motion.div
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-2 text-sm text-green-400 bg-green-500/10 border border-green-500/20 rounded-xl px-4 py-3"
              >
                <CheckCircle size={16} />
                Message sent! I'll get back to you soon.
              </motion.div>
            )}
            {status === "error" && (
              <motion.div
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-2 text-sm text-red-400 bg-red-500/10 border border-red-500/20 rounded-xl px-4 py-3"
              >
                <AlertCircle size={16} />
                Something went wrong. Please try emailing directly.
              </motion.div>
            )}

            <button
              type="submit"
              disabled={status === "loading"}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-medium text-sm hover:glow-primary transition-all duration-200 hover:scale-[1.02] active:scale-95 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {status === "loading" ? (
                <>
                  <Loader2 size={16} className="animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Send size={16} />
                  Send Message
                </>
              )}
            </button>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-5"
          >
            <div className="glass-card p-5 flex flex-col gap-4 hover:border-foreground/20 transition-all duration-200">
              <div className="flex items-center gap-4">
                <Mail size={20} className="text-primary" />
                <p className="font-mono text-xs text-muted-foreground uppercase tracking-wider">
                  Email
                </p>
              </div>
              <div className="pl-9 space-y-2">
                <a href="mailto:bsaikrishnasai48@gmail.com" className="text-sm text-foreground hover:text-primary transition-colors block">
                  bsaikrishnasai48@gmail.com
                </a>
                <a href="mailto:2300039074cse3@gmail.com" className="text-sm text-foreground hover:text-primary transition-colors block">
                  2300039074cse3@gmail.com
                </a>
              </div>
            </div>
            <a
              href="https://linkedin.com/in/boddiga-sai-krishna-8b98472b6"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card p-5 flex items-center gap-4 hover:border-foreground/20 transition-all duration-200 block"
            >
              <Linkedin size={20} className="text-primary" />
              <div>
                <p className="font-mono text-xs text-muted-foreground uppercase tracking-wider">
                  LinkedIn
                </p>
                <p className="text-sm text-foreground">Boddiga Sai Krishna</p>
              </div>
            </a>
            <a
              href="tel:+919014059493"
              className="glass-card p-5 flex items-center gap-4 hover:border-foreground/20 transition-all duration-200 block"
            >
              <Phone size={20} className="text-primary" />
              <div>
                <p className="font-mono text-xs text-muted-foreground uppercase tracking-wider">
                  Phone
                </p>
                <p className="text-sm text-foreground">+91 9014059493</p>
              </div>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
