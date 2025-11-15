import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const phoneNumber = "919305558888"; 
  const message = "Hi! I'd like to learn more about GreenEarth Waste Management.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 sm:w-16 sm:h-16 rounded-full hero-gradient shadow-lg hover:shadow-xl flex items-center justify-center group animate-glow"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-7 h-7 sm:w-8 sm:h-8 text-primary-foreground group-hover:scale-110 transition-transform" />
      
      {/* Pulse effect */}
      <span className="absolute inset-0 rounded-full hero-gradient animate-ping opacity-20" />
    </motion.a>
  );
};

export default WhatsAppButton;
