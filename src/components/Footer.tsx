import { motion } from "framer-motion";
import { Leaf, Linkedin, Instagram, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    // { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Instagram, href: "#https://www.instagram.com/resrishti_?igsh=MW81dms1amI5c2o1aA==", label: "Instagram" },
    { icon: Mail, href: "mailto:mailto:info@resrishti.com", label: "Email" },
  ];

  return (
    <footer id="contact" className="bg-primary text-primary-foreground py-12 sm:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Logo & Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center gap-4"
          >
            <div className="w-12 h-12 rounded-full bg-primary-foreground/10 flex items-center justify-center">
              <img src="../public/favicon.png"  alt="Logo" className="w-12 h-12 sm:w-10 sm:h-10 object-contain" />
            </div>
            <h3 className="text-2xl font-semibold">Resrishti</h3>
            <p className="text-primary-foreground/80 max-w-md">
              Building a cleaner, greener future through innovation and
              sustainable waste management.
            </p>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex justify-center gap-6"
          >
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className="w-12 h-12 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 flex items-center justify-center transition-colors"
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </motion.div>

          {/* Divider */}
          <div className="border-t border-primary-foreground/20 pt-8">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-sm text-primary-foreground/70"
            >
              © {currentYear} GreenEarth integrated facility private limited — All Rights Reserved.
            </motion.p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
