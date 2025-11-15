import { motion } from "framer-motion";
import { useState } from "react";
import { Mail , Instagram, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";


const UnderConstruction = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all fields");
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error("Please enter a valid email address");
      return;
    }

    // Prepare Web3Forms data
    const data = {
      access_key: "a18fca48-f25f-4bc6-b9ca-f6d6bdfd5153", // <-- Harshith the key here
      name: formData.name,
      email: formData.email,
      message: formData.message,
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (result.success) {
        toast.success("Message sent! We'll get back to you soon.");
        setFormData({ name: "", email: "", message: "" });
      } else {
        toast.error("Something went wrong. Try again!");
      }
    } catch (error) {
      toast.error("Network error. Please try again.");
    }
  };

const socialLinks = [
  { icon: Mail, href: "mailto:info@resrishti.com", label: "Email" },
  { icon: Instagram, href: "https://www.instagram.com/resrishti_?igsh=MW81dms1amI5c2o1aA==", label: "Instagram" },
];


  return (
    <section id="contact" className="py-20 sm:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Facility
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            We're building something sustainable!
          </p>
        </motion.div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
          {/* Left: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="bg-card rounded-2xl p-6 sm:p-8 shadow-lg border border-border">
              <h3 className="text-2xl font-semibold text-foreground mb-6">
                Get in Touch
              </h3>

              <form onSubmit={handleSubmit} className="space-y-5">
                <Input
                  type="text"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />

                <Input
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />

                <Textarea
                  placeholder="Your Message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                />

                <Button
                  type="submit"
                  className="w-full hero-gradient text-primary-foreground hover:opacity-90 transition-opacity rounded-lg py-6 text-lg group"
                >
                  Send Message
                  <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>

              {/* Social Links */}
              <div className="mt-8 pt-6 border-t border-border">
                <p className="text-sm text-muted-foreground mb-4 text-center">
                  Connect with us
                </p>
                <div className="flex justify-center gap-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      aria-label={social.label}
                      className="w-10 h-10 rounded-full bg-primary/10 hover:bg-primary/20 flex items-center justify-center transition-colors group"
                    >
                      <social.icon className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Section: Video and Icons */}
<motion.div
  initial={{ opacity: 0, x: 30 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.7 }}
  className="relative"
>
  <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center p-8 border border-border relative overflow-hidden">
    
    {/* Floating particles */}
    {[...Array(12)].map((_, i) => (
      <motion.span
        key={i}
        className="absolute w-2 h-2 bg-primary/20 rounded-full"
        style={{ top: `${Math.random() * 100}%`, left: `${Math.random() * 100}%` }}
        animate={{ y: [0, -20, 0], opacity: [0.2, 1, 0.2] }}
        transition={{ duration: 3 + Math.random() * 2, repeat: Infinity, delay: i * 0.3 }}
      />
    ))}

    <div className="text-center space-y-8">

      {/* Crane Animation */}
      <motion.div
        className="relative w-48 h-48 mx-auto"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Crane arm */}
        <motion.div
          className="absolute top-0 left-1/2 w-40 h-2 bg-primary rounded"
          animate={{ rotate: [-3, 3, -3] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Hanging hook */}
        <motion.div
          className="absolute top-2 left-1/2 w-1 h-24 bg-primary/40"
          animate={{ height: [80, 95, 80] }}
          transition={{ duration: 2.5, repeat: Infinity }}
        />

        {/* Hook block */}
        <motion.div
          className="absolute top-24 left-1/2 w-8 h-8 bg-yellow-500 rounded shadow-lg"
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 2.5, repeat: Infinity }}
        />
      </motion.div>

      {/* Under Construction text */}
      <div className="space-y-2">
        <motion.div
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-6xl"
        >
          🚧
        </motion.div>

        <p className="text-3xl font-bold text-foreground tracking-wide">
          Site Under Construction
        </p>

        <motion.p
          animate={{ opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="text-muted-foreground"
        >
          We’re crafting something powerful and sustainable.
        </motion.p>
      </div>

      {/* Barrier Bounce Animation */}
      <div className="flex justify-center gap-6 text-4xl pt-4">
        {["🚧", "⚠️", "🛠️"].map((icon, i) => (
          <motion.span
            key={i}
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
          >
            {icon}
          </motion.span>
        ))}
      </div>
    </div>
  </div>
</motion.div>

        </div>
      </div>
    </section>
  );
};

export default UnderConstruction;
