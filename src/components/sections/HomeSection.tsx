import React, { useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import ScrollAnimation from "@/components/ScrollAnimation";
import dashboardMockup from "@/assets/dashboard-mockup.jpg";
import { Input } from "@/components/ui/input";
import { GoogleLogo } from "phosphor-react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

const HeroSection = () => {
  const [isLogin, setIsLogin] = useState(true);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen pt-32 pb-40 px-4 flex flex-col items-center justify-start overflow-hidden text-center"
    >
      {/* 🧠 Hero Heading */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-5xl mx-auto"
      >
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-4xl md:text-6xl font-extrabold tracking-tight text-center leading-tight h-[6rem] sm:h-[7rem] md:h-[8rem]"
        >
          <span className="text-purple-500">AI-Powered</span>{" "}
          <span className="text-white">
            <Typewriter
              words={["Crypto Trading Revolution"]}
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={2000}
              loop
              cursor
              cursorStyle="/"
            />
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-lg md:text-xl text-muted-foreground mb-10 max-w-3xl mx-auto font-light"
        >
          Harness the power of artificial intelligence to automate your
          cryptocurrency investments. Join thousands of traders who trust
          FlashAlgo to maximize their returns while they sleep.
        </motion.p>

        {/* ✅ CTA + Login */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="flex flex-col gap-4 justify-center items-center"
        >
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              className="text-lg px-8 py-4"
              onClick={() => scrollToSection("#pricing")}
            >
              Get Started Today
            </Button>
            <Button
              variant="glass"
              size="lg"
              className="text-lg px-8 py-4"
              onClick={() => scrollToSection("#how-it-works")}
            >
              See How It Works
            </Button>
          </div>

          {/* 👇 Login Modal Trigger */}
          <Dialog>
            <DialogTrigger asChild>
              <Button
                variant="ghost"
                size="sm"
                className="rounded-xl mt-4 px-6 py-2 font-semibold bg-purple-600 text-white hover:bg-white hover:text-purple-600 border border-purple-600 transition"
              >
                Login / Sign Up
              </Button>
            </DialogTrigger>

            {/* 🔐 Login/Signup Modal Content */}
            <DialogContent className="bg-white/5 backdrop-blur-[10px] border border-white/20 rounded-2xl shadow-xl text-white max-w-sm w-full">
              <DialogHeader>
                <DialogTitle className="text-purple-400 text-center text-2xl font-bold">
                  {isLogin ? "Welcome to FlashAlgo" : "Create an Account"}
                </DialogTitle>
                <DialogDescription className="text-center text-sm text-gray-300">
                  {isLogin
                    ? "Sign in to access your AI trading dashboard"
                    : "Sign up to get started with smart crypto trading"}
                </DialogDescription>
              </DialogHeader>

              <form className="space-y-4 mt-4">
                <Input placeholder="Email" type="email" className="rounded-md" />
                <Input placeholder="Password" type="password" className="rounded-md" />
                {!isLogin && (
                  <Input
                    placeholder="Confirm Password"
                    type="password"
                    className="rounded-md"
                  />
                )}
                <Button
                  type="submit"
                  className="w-full bg-purple-600 hover:bg-purple-700 text-white rounded-md"
                >
                  {isLogin ? "Login" : "Sign Up"}
                </Button>
              </form>

              <div className="my-4 text-center text-sm text-white/70">or</div>

              <Button className="w-full flex items-center justify-center gap-2 border border-white/20 rounded-md text-sm font-medium py-2 hover:bg-white/10 text-white">
                <GoogleLogo size={20} /> Sign in with Google
              </Button>

              <p className="text-xs text-center text-white/50 mt-6">
                {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
                <button
                  onClick={() => setIsLogin(!isLogin)}
                  className="underline text-purple-300 hover:text-purple-500 ml-1"
                  type="button"
                >
                  {isLogin ? "Sign up here" : "Login"}
                </button>
              </p>
            </DialogContent>
          </Dialog>
        </motion.div>
      </motion.div>

      {/* 🌍 Spline Earth */}
      <div className="relative w-full flex justify-center z-0 -mt-12 mb-[-80px] pointer-events-none">
        <div className="w-[800px] h-[400px] overflow-hidden">
          <iframe
            src="https://my.spline.design/worldplanet-NLDNoyQdlsObQ62BimSM2lHX/"
            frameBorder="0"
            allowFullScreen
            className="w-full h-full object-contain scale-110"
          ></iframe>
        </div>
      </div>

      {/* 💻 Dashboard Mockup */}
      <ScrollAnimation delay={0.8}>
        <div className="relative max-w-5xl mx-auto mt-20 z-10">
          <div className="bg-white/5 backdrop-blur-md rounded-2xl p-4 border border-white/10 shadow-xl">
            <img
              src={dashboardMockup}
              alt="FlashAlgo Dashboard"
              className="w-full h-auto rounded-xl"
            />
          </div>

          {/* Floating Tags */}
          <motion.div
            animate={{ y: [0, -10, 0], rotate: [0, 2, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-8 -left-8 bg-white/5 backdrop-blur-md rounded-xl px-4 py-2 border border-white/10 hidden md:block"
          >
            <div className="text-purple-400 font-bold text-sm">+24.7%</div>
            <div className="text-xs text-gray-300">Portfolio Growth</div>
          </motion.div>

          <motion.div
            animate={{ y: [0, 10, 0], rotate: [0, -2, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-6 -right-6 bg-white/5 backdrop-blur-md rounded-xl px-4 py-2 border border-white/10 hidden md:block"
          >
            <div className="text-green-400 font-bold text-sm">AI Active</div>
            <div className="text-xs text-gray-300">24/7 Trading</div>
          </motion.div>
        </div>
      </ScrollAnimation>
    </section>
  );
};

export default HeroSection;
