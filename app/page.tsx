'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <Header isScrolled={isScrolled} />
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </div>
  );
}

function Header({ isScrolled }: { isScrolled: boolean }) {
  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-black/80 backdrop-blur-md border-b border-amber-500/20'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
          LarryWind
        </div>
        <div className="hidden md:flex gap-8">
          <NavLink href="#services">Services</NavLink>
          <NavLink href="#about">About</NavLink>
          <NavLink href="#contact">Contact</NavLink>
        </div>
        <button className="bg-amber-500 text-black px-6 py-2 rounded-lg font-semibold hover:bg-amber-400 transition-all duration-300 hover:scale-105">
          Book Now
        </button>
      </nav>
    </header>
  );
}

function NavLink({ href, children }: { href: string; children: string }) {
  return (
    <a
      href={href}
      className="text-gray-300 hover:text-amber-400 transition-colors duration-300"
    >
      {children}
    </a>
  );
}

function HeroSection() {
  return (
    <section className="pt-32 pb-20 px-6 relative overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-amber-500 rounded-full mix-blend-screen filter blur-3xl animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-amber-600 rounded-full mix-blend-screen filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-amber-700 rounded-full mix-blend-screen filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center space-y-8">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight animate-fade-in">
            Master Music With
            <span className="block bg-gradient-to-r from-amber-300 via-amber-400 to-amber-600 bg-clip-text text-transparent mt-3">
              A Professional Musician
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto animate-fade-in-delay opacity-0">
            Elite music instructor in Lagos. Specialize in Saxophone, Piano, Drums,
            Violin & Music Theory.
          </p>

          <div className="flex gap-4 justify-center pt-8 animate-fade-in-delay-2 opacity-0">
            <button className="bg-amber-500 text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-amber-400 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-amber-500/50">
              Start Learning Today
            </button>
            <button className="border-2 border-amber-500 text-amber-400 px-8 py-4 rounded-lg font-bold text-lg hover:bg-amber-500/10 transition-all duration-300">
              Learn More
            </button>
          </div>

          <div className="pt-12 grid grid-cols-3 gap-6 max-w-md mx-auto text-sm">
            <Stat number="500+" label="Students Trained" />
            <Stat number="15+" label="Years Experience" />
            <Stat number="100%" label="Success Rate" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ number, label }: { number: string; label: string }) {
  return (
    <div className="p-4 bg-white/5 rounded-lg border border-amber-500/30 hover:border-amber-500 transition-all duration-300">
      <p className="text-2xl font-bold text-amber-400">{number}</p>
      <p className="text-xs text-gray-400 mt-2">{label}</p>
    </div>
  );
}

function ServicesSection() {
  const services = [
    {
      icon: '🎷',
      title: 'Saxophone',
      description:
        'From beginner fundamentals to advanced jazz improvisation. Master technique and musical expression.',
    },
    {
      icon: '🎹',
      title: 'Piano',
      description:
        'Classical, contemporary, and jazz piano. Build strong foundational skills and music literacy.',
    },
    {
      icon: '🥁',
      title: 'Drums',
      description:
        'Rhythm mastery, coordination, and advanced drumming techniques across multiple genres.',
    },
    {
      icon: '🎻',
      title: 'Violin',
      description:
        'Classical elegance and proper technique. Develop bow control and melodic sensitivity.',
    },
    {
      icon: '📚',
      title: 'Music Theory',
      description:
        'Complete music education from basics to advanced harmony, composition, and analysis.',
    },
    {
      icon: '🎵',
      title: 'Ensemble Playing',
      description: 'Learn to perform with others, collaboration skills, and group dynamics.',
    },
  ];

  return (
    <section id="services" className="py-24 px-6 bg-white/5">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Specialized Instruction
        </h2>
        <p className="text-gray-400 text-center mb-16 max-w-2xl mx-auto">
          Comprehensive music education tailored to your goals and skill level
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <ServiceCard key={idx} {...service} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({
  icon,
  title,
  description,
  index,
}: {
  icon: string;
  title: string;
  description: string;
  index: number;
}) {
  return (
    <div
      className="group p-8 bg-white/5 border border-amber-500/30 rounded-xl hover:bg-white/10 hover:border-amber-500/60 transition-all duration-500 hover:shadow-lg hover:shadow-amber-500/20 hover:-translate-y-2"
      style={{
        animationDelay: `${index * 100}ms`,
      }}
    >
      <div className="text-5xl mb-4 group-hover:scale-125 transition-transform duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-400 leading-relaxed">{description}</p>
      <div className="mt-4 flex items-center gap-2 text-amber-400 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
        Learn More <span>→</span>
      </div>
    </div>
  );
}

function AboutSection() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold">
              Professional Excellence
              <span className="block text-amber-400 mt-2">In Every Note</span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              LarryWind is a passionate saxophonist and dedicated music educator based in Lagos,
              Nigeria. With over 15 years of professional experience, she combines technical
              expertise with inspiring teaching methodology.
            </p>
            <ul className="space-y-4">
              <ListItem text="Certified music instructor with advanced degrees" />
              <ListItem text="Performed at major venues and festivals across Nigeria and beyond" />
              <ListItem text="Personalized lesson plans adapted to each student's goals" />
              <ListItem text="Patient, encouraging approach that builds confidence" />
              <ListItem text="Flexible scheduling for working professionals and students" />
            </ul>
          </div>

          <div className="relative h-96 bg-gradient-to-br from-amber-500/20 to-amber-600/20 rounded-2xl border border-amber-500/30 flex items-center justify-center">
            <div className="text-center">
              <div className="text-7xl mb-4">🎷</div>
              <p className="text-gray-300">
                Professional saxophonist & music educator
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ListItem({ text }: { text: string }) {
  return (
    <li className="flex gap-3 items-start">
      <span className="text-amber-400 font-bold text-xl mt-1">✓</span>
      <span className="text-gray-300">{text}</span>
    </li>
  );
}

function TestimonialsSection() {
  const testimonials = [
    {
      name: 'Chioma A.',
      role: 'Piano Student',
      text: 'LarryWind transformed my piano journey. Patient, knowledgeable, and genuinely passionate about teaching.',
      rating: 5,
    },
    {
      name: 'Tunde O.',
      role: 'Saxophone Student',
      text: 'Best music teacher I could ask for. Her jazz improvisation lessons changed everything for me.',
      rating: 5,
    },
    {
      name: 'Zainab M.',
      role: 'Music Theory Student',
      text: 'Made music theory actually fun and understandable. Highly recommend for serious learners.',
      rating: 5,
    },
  ];

  return (
    <section className="py-24 px-6 bg-white/5">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          What Students Say
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <TestimonialCard key={idx} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({
  name,
  role,
  text,
  rating,
}: {
  name: string;
  role: string;
  text: string;
  rating: number;
}) {
  return (
    <div className="p-8 bg-white/10 border border-amber-500/30 rounded-xl hover:border-amber-500/60 transition-all duration-300">
      <div className="flex gap-1 mb-4">
        {Array(rating)
          .fill(0)
          .map((_, i) => (
            <span key={i} className="text-amber-400">
              ⭐
            </span>
          ))}
      </div>
      <p className="text-gray-300 mb-6 leading-relaxed italic">"{text}"</p>
      <div>
        <p className="font-bold text-white">{name}</p>
        <p className="text-sm text-amber-400">{role}</p>
      </div>
    </div>
  );
}

function CTASection() {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-3xl mx-auto text-center space-y-8 bg-gradient-to-r from-amber-600/20 to-amber-700/20 p-12 rounded-2xl border border-amber-500/30">
        <h2 className="text-4xl md:text-5xl font-bold">Ready to Begin?</h2>
        <p className="text-xl text-gray-300">
          Take the first step toward musical excellence. Contact LarryWind today to discuss
          your learning goals.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <button className="bg-amber-500 text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-amber-400 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-amber-500/50">
            Book Free Consultation
          </button>
          <a
            href="mailto:contact@larrywind.com"
            className="border-2 border-amber-500 text-amber-400 px-8 py-4 rounded-lg font-bold text-lg hover:bg-amber-500/10 transition-all duration-300"
          >
            Email Me
          </a>
        </div>

        <div className="grid grid-cols-2 gap-6 pt-8 text-left">
          <div>
            <p className="text-sm text-gray-400">Email</p>
            <p className="text-amber-400 font-semibold">contact@larrywind.com</p>
          </div>
          <div>
            <p className="text-sm text-gray-400">Location</p>
            <p className="text-amber-400 font-semibold">Lagos, Nigeria</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/10 py-8 px-6">
      <div className="max-w-7xl mx-auto text-center text-gray-500 text-sm">
        <p>
          © 2025 LarryWind Music Instruction. All rights reserved. | Crafted with
          dedication to musical excellence.
        </p>
      </div>
    </footer>
  );
}