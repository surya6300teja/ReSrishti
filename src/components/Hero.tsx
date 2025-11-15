import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Sparkles, Leaf, Recycle, TreeDeciduous } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRef } from "react";

const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  // Floating particles data
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    size: Math.random() * 8 + 4,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 20 + 15,
    delay: Math.random() * 5,
  }));

  return (
    <section
      ref={ref}
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated gradient mesh background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-secondary/30 to-background">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary rounded-full mix-blend-multiply filter blur-3xl animate-float" />
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-accent rounded-full mix-blend-multiply filter blur-3xl animate-float" style={{ animationDelay: "2s" }} />
          <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-primary-light rounded-full mix-blend-multiply filter blur-3xl animate-float" style={{ animationDelay: "4s" }} />
        </div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full bg-primary/20"
            style={{
              width: particle.size,
              height: particle.size,
              left: `${particle.x}%`,
              top: `${particle.y}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.random() * 20 - 10, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Geometric decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          className="absolute -top-20 -right-20 w-80 h-80 border-2 border-primary/10 rounded-full"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-20 -left-20 w-96 h-96 border-2 border-accent/10 rounded-full"
        />
      </div>

      <motion.div
        style={{ y, opacity }}
        className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-20"
      >
        <div className="max-w-8xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 ">
            {/* Left: Text Content */}
            <div className="text-center lg:text-left space-y-8">
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-semibold backdrop-blur-sm"
              >
                <Sparkles className="w-4 h-4" />
                Sustainable Innovation
              </motion.div>

              {/* Main Heading with stagger animation */}
              <div className="space-y-4">
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="text-5xl sm:text-6xl md:text-7xl font-bold text-foreground leading-tight"
                >
                  Zero Waste.
                </motion.h1>
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="text-5xl sm:text-6xl md:text-7xl font-bold leading-tight"
                >
                  <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent bg-[length:200%_auto] animate-[gradient_3s_linear_infinite]">
                    Full Circle.
                  </span>
                </motion.h1>
              </div>

              {/* Subheading */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-xl mx-auto lg:mx-0"
              >
                Building a cleaner, greener future through innovation and
                sustainable waste management solutions.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                <Button
                  onClick={scrollToContact}
                  size="lg"
                  className="hero-gradient text-primary-foreground hover:opacity-90 transition-all rounded-full px-8 py-6 text-lg group shadow-xl hover:shadow-2xl hover:scale-105"
                >
                  Get Started
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
                  className="rounded-full px-8 py-6 text-lg border-2 hover:bg-primary/5"
                >
                  Learn More
                </Button>
              </motion.div>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.9 }}
                className="grid grid-cols-3 gap-6 pt-8"
              >
                {[
                  { value: "100%", label: "Eco-Friendly" },
                  { value: "24/7", label: "Support" },
                  // { value: "500+", label: "Clients" },
                ].map((stat, i) => (
                  <div key={i} className="text-center lg:text-left">
                    <div className="text-2xl sm:text-3xl font-bold text-primary">
                      {stat.value}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Right: Visual Elements */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative hidden lg:block"
            >
              <div className="relative w-full h-[500px]">
                {/* Center Circle */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 m-auto w-64 h-64 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 backdrop-blur-sm border-2 border-primary/30 flex items-center justify-center"
                >
                  <div className="w-48 h-48 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-6xl shadow-2xl">
                    ♻️
                  </div>
                </motion.div>

                {/* Orbiting Icons */}
                {[
                  { Icon: Leaf, angle: 0, delay: 0 },
                  { Icon: Recycle, angle: 120, delay: 0.5 },
                  { Icon: TreeDeciduous, angle: 240, delay: 1 },
                ].map(({ Icon, angle, delay }, i) => (
                  <motion.div
                    key={i}
                    className="absolute inset-0 m-auto w-64 h-64"
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear",
                      delay,
                    }}
                    style={{ transformOrigin: "center" }}
                  >
                    <motion.div
                      className="absolute w-16 h-16 rounded-full bg-card border-2 border-primary/30 shadow-lg flex items-center justify-center"
                      style={{
                        top: "50%",
                        left: "50%",
                        transform: `translate(-50%, -50%) rotate(${angle}deg) translateY(-150px) rotate(-${angle}deg)`,
                      }}
                      whileHover={{ scale: 1.2 }}
                    >
                      <Icon className="w-8 h-8 text-primary" />
                    </motion.div>
                  </motion.div>
                ))}

                {/* Decorative rings */}
                <motion.div
                  animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute inset-0 m-auto w-80 h-80 rounded-full border-2 border-primary/20"
                />
                <motion.div
                  animate={{ scale: [1, 1.15, 1], opacity: [0.2, 0.4, 0.2] }}
                  transition={{ duration: 5, repeat: Infinity, delay: 0.5 }}
                  className="absolute inset-0 m-auto w-96 h-96 rounded-full border-2 border-accent/20"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Bottom wave decoration */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg
          viewBox="0 0 1440 120"
          className="w-full h-auto"
          preserveAspectRatio="none"
        >
          <motion.path
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
            d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
            fill="hsl(var(--background))"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
