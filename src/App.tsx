/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  Palette, 
  Code2, 
  Stethoscope, 
  Instagram, 
  Facebook, 
  Video, 
  ExternalLink,
  MapPin,
  Calendar,
  Layers,
  Sparkles,
  ArrowRight
} from "lucide-react";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function App() {
  const experiences = [
    {
      title: "Media & Event Coordination",
      period: "Feb 2026 - Present",
      role: "Social Media Coordinator & Stage Secretary",
      description: "Served for the regional Talent Award Show. Managed full-scale visual branding, digital promotion, and scriptwriting.",
      icon: Video,
      color: "text-indigo-400"
    },
    {
      title: "Software Development",
      period: "Dec 2025",
      role: "Lead Developer",
      description: "Designed and deployed the 'Niaz Autos Inventory Manager,' a robust web-based tool for tracking business assets using React and optimized DB structures.",
      icon: Code2,
      color: "text-pink-400"
    },
    {
      title: "Commercial Design & Architecture",
      period: "2025 - 2026",
      role: "3D Designer & Brand Specialist",
      description: "Executed 3D interior layouts for Janan Cafe (20x42 ft) and established product branding for the 'Yaran' fragrance line.",
      icon: Layers,
      color: "text-emerald-400"
    }
  ];

  const skills = [
    { category: "Design", tags: ["Graphic Design", "3D Interior Design", "Visual Branding", "Product Branding"] },
    { category: "Technology", tags: ["HTML/CSS/JS", "React", "Software Development", "Inventory Systems"] },
    { category: "Innovation", tags: ["AI Art Generation", "Prompt Engineering", "Digital Illustration"] },
    { category: "Management", tags: ["Event Management", "Content Strategy", "Digital Promotion", "Scriptwriting"] }
  ];

  return (
    <div className="min-h-screen relative font-sans">
      <div className="mesh-gradient">
        <div className="circle-1"></div>
        <div className="circle-2"></div>
        <div className="circle-3"></div>
      </div>

      <nav className="max-w-7xl mx-auto px-12 py-10 flex justify-between items-center relative z-10">
        <div className="text-2xl font-bold tracking-tighter text-white">
          AN<span className="text-indigo-400">.</span>
        </div>
        <div className="hidden md:flex gap-8 text-xs font-medium opacity-80 uppercase tracking-[0.2em] text-white">
          <a href="#projects" className="hover:opacity-100 transition-opacity">Work</a>
          <a href="#skills" className="hover:opacity-100 transition-opacity">Process</a>
          <a href="#contact" className="hover:opacity-100 transition-opacity">Contact</a>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-12 py-20 relative z-10">
        {/* Intro Section */}
        <section id="hero" className="grid grid-cols-12 gap-12 mb-32 items-center">
          <div className="col-span-12 lg:col-span-7">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-6 mb-8">
                <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-2 border-white/20 glass p-1">
                  <img 
                    src="input_file_0.png" 
                    alt="Abid Ullah Naseem" 
                    className="w-full h-full object-cover rounded-full"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div>
                   <h1 className="text-5xl md:text-8xl font-bold leading-[1.1] tracking-tight text-white mb-2">
                    Abid Ullah<br/><span className="gradient-text">Naseem</span>
                  </h1>
                </div>
              </div>
              
              <p className="text-xl md:text-2xl font-light opacity-60 max-w-xl mb-10 leading-relaxed text-white">
                Independent Designer & Developer specialized in crafting immersive digital interfaces and healthcare tech solutions.
              </p>
              
              <div className="flex gap-4">
                <button className="px-8 py-3 bg-white text-slate-900 font-semibold rounded-full text-sm hover:bg-opacity-90 transition-all">
                  Download CV
                </button>
                <button className="px-8 py-3 glass rounded-full text-sm font-medium hover:bg-white/10 transition-all text-white">
                  Contact Me
                </button>
              </div>
            </motion.div>
          </div>

          <div className="col-span-12 lg:col-span-5 flex flex-col gap-4 text-xs font-mono tracking-wider opacity-50 uppercase text-white">
            <div className="flex items-center gap-3">
              <span className="w-8 h-px bg-white/30" /> Graphic Designer
            </div>
            <div className="flex items-center gap-3">
              <span className="w-8 h-px bg-white/30" /> Software Developer
            </div>
            <div className="flex items-center gap-3">
              <span className="w-8 h-px bg-white/30" /> Dental Technologist
            </div>
          </div>
        </section>

        {/* Selected Work */}
        <section id="projects" className="mb-40">
          <div className="flex justify-between items-end mb-16 border-b border-white/10 pb-8">
            <h2 className="text-sm uppercase tracking-[0.3em] font-bold opacity-40 text-white">Selected Projects</h2>
            <p className="text-sm opacity-40 text-white hidden md:block">Case Studies 2025—2026</p>
          </div>

          <motion.div 
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid gap-6"
          >
            {experiences.map((exp, index) => (
              <motion.div 
                key={index}
                variants={fadeIn}
                className="glass p-8 rounded-3xl glass-card flex flex-col md:flex-row items-center gap-8 group relative overflow-hidden"
              >
                <div className={`w-full md:w-48 h-32 rounded-2xl flex-shrink-0 flex items-center justify-center border border-white/10 relative overflow-hidden bg-white/3`}>
                   <div className="absolute inset-0 opacity-20 pointer-events-none">
                      <exp.icon className="w-full h-full p-4 transform translate-x-4 translate-y-4" />
                   </div>
                   <exp.icon className={`w-12 h-12 ${exp.color} relative z-10 font-bold`} />
                </div>
                
                <div className="flex-grow">
                  <div className="flex flex-wrap items-center gap-4 mb-2">
                    <h3 className="text-2xl font-bold text-white">{exp.title}</h3>
                    <span className="text-[10px] px-3 py-1 glass rounded-full opacity-60 text-white">{exp.period}</span>
                  </div>
                  <p className="text-sm font-medium text-white/50 mb-4">{exp.role}</p>
                  <p className="text-base opacity-60 leading-relaxed text-white max-w-2xl">{exp.description}</p>
                </div>

                <div className="ml-auto text-3xl opacity-20 group-hover:opacity-100 group-hover:translate-x-2 transition-all text-white">
                  →
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Skills Grid */}
        <section id="skills" className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-40">
          <div className="lg:col-span-4 self-center">
            <h2 className="text-6xl font-bold tracking-tighter mb-6 text-white leading-tight">Diverse<br/>Skillset<span className="text-indigo-400">.</span></h2>
            <p className="opacity-50 text-white max-w-xs leading-relaxed">
              Bridging the gap between creative visual storytelling and functional technology.
            </p>
          </div>
          
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            {skills.map((skillGroup, idx) => (
              <div key={idx} className="glass p-8 rounded-3xl">
                <p className="text-[10px] uppercase tracking-[0.2em] opacity-40 mb-6 font-bold text-white">{skillGroup.category}</p>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.tags.map((tag, i) => (
                    <span 
                      key={i} 
                      className="px-4 py-1.5 rounded-full glass text-xs opacity-70 hover:opacity-100 hover:bg-white/10 transition-all text-white"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact/Connect */}
        <section id="contact" className="glass p-16 rounded-[3rem] text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 text-[8vw] font-bold opacity-5 pointer-events-none select-none text-white">
            HIRE ME
          </div>
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-white mb-8">Let's work together</h2>
          <p className="opacity-60 text-white max-w-xl mx-auto mb-12 text-lg">
            Whether it's an AI design project, software solution, or event branding, I'm ready to bring your vision to life.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
             <a 
                href="https://instagram.com/hafizabidullahnaseem" 
                target="_blank" 
                className="px-8 py-3 glass rounded-full text-sm font-semibold hover:bg-white/10 transition-all flex items-center gap-2 text-white"
              >
                <Instagram className="w-4 h-4 text-pink-400" /> Instagram
              </a>
              <a 
                href="https://facebook.com/AbidUllahNaseem" 
                target="_blank" 
                className="px-8 py-3 glass rounded-full text-sm font-semibold hover:bg-white/10 transition-all flex items-center gap-2 text-white"
              >
                <Facebook className="w-4 h-4 text-blue-400" /> Facebook
              </a>
          </div>
        </section>
      </main>

      <footer className="max-w-7xl mx-auto px-12 py-16 flex flex-col md:flex-row justify-between items-end border-t border-white/10 relative z-10">
        <div className="flex gap-12 text-[10px] uppercase tracking-[0.2em] opacity-40 text-white">
          <div>Based In<br/><span className="text-white opacity-100">Dera Ismail Khan, PK</span></div>
          <div>Status<br/><span className="text-white opacity-100">Available for hire</span></div>
        </div>
        <div className="flex gap-8 opacity-40 text-sm text-white mt-12 md:mt-0">
          <a href="https://tiktok.com/@naseemumarwat" target="_blank" className="hover:opacity-100">TikTok</a>
          <span>© {new Date().getFullYear()}</span>
        </div>
      </footer>
    </div>
  );
}
