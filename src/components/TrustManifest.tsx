'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function TrustManifest() {
    return (
        <section className="py-32 border-b border-border bg-surface relative overflow-hidden">
            {/* Decorative huge text */}
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 pointer-events-none select-none">
                <span className="text-[20rem] font-bold text-white/[0.02] leading-none">CODE</span>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                    <div className="lg:col-span-5">
                        <Link href="/company" className="inline-block px-3 py-1 border border-primary text-primary font-mono text-xs uppercase tracking-widest mb-8 hover:bg-primary hover:text-white transition-colors cursor-pointer">
                            Manifesto
                        </Link>
                        <h2 className="text-5xl md:text-6xl font-bold leading-tight uppercase mb-8">
                            Мы не просто <br />
                            <span className="text-gray-600">пишем код.</span>
                        </h2>
                    </div>

                    <div className="lg:col-span-7 flex flex-col justify-center">
                        <p className="text-2xl md:text-3xl font-light leading-snug mb-12">
                            <span className="text-primary">Мы проектируем рост.</span> С 2011 года мы — тихий двигатель успешных E-commerce проектов.
                            Без лишнего шума. Без фотосессий. Только результат.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-border pt-8">
                            <div>
                                <h4 className="font-mono text-sm text-gray-500 uppercase mb-4">01. Архитектура</h4>
                                <p className="text-gray-300">
                                    Строим фундамент, который выдерживает нагрузки Черной пятницы и масштабируется вместе с бизнесом.
                                </p>
                            </div>
                            <div>
                                <h4 className="font-mono text-sm text-gray-500 uppercase mb-4">02. Процессы</h4>
                                <p className="text-gray-300">
                                    Прозрачный CI/CD, строгий Code Review и прямой доступ к инженерам. Мы работаем как ваш внутренний отдел.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
