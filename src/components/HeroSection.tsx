'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Code2, Cpu, Rocket } from 'lucide-react';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-20 border-b border-border">
      {/* Industrial Grid Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      <div className="container mx-auto px-4 z-10 relative h-full flex flex-col justify-center">
        {/* Top Bar with Logo */}
        <div className="absolute top-0 left-0 w-full border-b border-border bg-background/80 backdrop-blur-sm">
          <div className="container mx-auto px-4 py-6 flex justify-between items-center">
            <div className="w-40 md:w-48 relative h-12">
              <Image
                src="/logo.svg"
                alt="Pugofka Logo"
                fill
                className="object-contain object-left"
                priority
              />
            </div>
            <div className="hidden md:flex gap-8 font-mono text-sm text-gray-400">
              <span>EST. 2011</span>
              <span>ST. PETERSBURG</span>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto mt-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-4 mb-8"
          >
            <div className="h-[1px] w-12 bg-primary" />
            <span className="font-mono text-primary tracking-widest uppercase text-sm">Web Development & Integration</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-6xl md:text-9xl font-bold tracking-tighter leading-[0.9] mb-12 uppercase"
          >
            Digital <br />
            <span className="text-stroke">Growth</span> <br />
            <span className="text-primary">Architects</span>
          </motion.h1>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 border-t border-border pt-12">
            <div className="md:col-span-5">
              <p className="text-xl text-gray-400 leading-relaxed font-light">
                Строим <span className="text-white font-medium">Highload системы</span>, масштабируем <span className="text-white font-medium">E-commerce</span> и запускаем стартапы.
                Технологический партнер с бутиковым подходом.
              </p>
            </div>

            <div className="md:col-span-7 flex flex-col md:flex-row gap-6 items-start md:items-center justify-end">
              <button className="group relative px-8 py-6 bg-primary text-white font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-colors w-full md:w-auto">
                <span className="flex items-center justify-between gap-8">
                  Обсудить проект <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>

              <button className="group px-8 py-6 border border-border text-white font-bold uppercase tracking-wider hover:border-white transition-colors w-full md:w-auto">
                Портфолио
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Ticker */}
      <div className="absolute bottom-0 left-0 w-full border-t border-border bg-surface py-4 overflow-hidden">
        <div className="flex gap-12 whitespace-nowrap animate-marquee">
          {/* We will reuse TechStack component logic here or keep it simple */}
          <div className="flex gap-8 font-mono text-xs text-gray-500 uppercase tracking-widest">
            <span>Highload Systems</span>
            <span>•</span>
            <span>E-commerce Solutions</span>
            <span>•</span>
            <span>Startup MVP</span>
            <span>•</span>
            <span>Bitrix Integration</span>
            <span>•</span>
            <span>Laravel / Go</span>
          </div>
        </div>
      </div>
    </section>
  );
}
