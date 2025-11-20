'use client';

import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-zinc-950 border-t border-border py-20 text-white">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    {/* Brand */}
                    <div className="md:col-span-2">
                        <Link href="/" className="text-2xl font-bold uppercase tracking-tighter mb-6 block">
                            Pugofka
                        </Link>
                        <p className="text-muted-foreground max-w-sm font-mono text-sm">
                            // ARCHITECTING DIGITAL GROWTH<br />
                            SINCE 2011. ST. PETERSBURG.
                        </p>
                    </div>

                    {/* Navigation */}
                    <div>
                        <h4 className="font-mono text-xs text-muted-foreground uppercase tracking-widest mb-6">
                            Навигация
                        </h4>
                        <ul className="space-y-4 font-mono text-sm">
                            <li>
                                <Link href="/portfolio" className="hover:text-primary transition-colors">
                                    ПРОЕКТЫ
                                </Link>
                            </li>
                            <li>
                                <Link href="/company" className="hover:text-primary transition-colors">
                                    МАНИФЕСТ
                                </Link>
                            </li>
                            <li>
                                <Link href="/services/custom" className="hover:text-primary transition-colors">
                                    УСЛУГИ
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Socials */}
                    <div>
                        <h4 className="font-mono text-xs text-muted-foreground uppercase tracking-widest mb-6">
                            Связь
                        </h4>
                        <ul className="space-y-4 font-mono text-sm">
                            <li>
                                <a href="https://t.me/pugofka_dev" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors flex items-center gap-2">
                                    TELEGRAM <ArrowUpRight className="w-3 h-3" />
                                </a>
                            </li>
                            <li>
                                <a href="mailto:hello@pugofka.com" className="hover:text-primary transition-colors flex items-center gap-2">
                                    EMAIL <ArrowUpRight className="w-3 h-3" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 font-mono text-xs text-muted-foreground">
                    <div>
                        © {new Date().getFullYear()} PUGOFKA. ALL SYSTEMS OPERATIONAL.
                    </div>
                    <div className="flex gap-8">
                        <Link href="/privacy" className="hover:text-white transition-colors">
                            ПОЛИТИКА КОНФИДЕНЦИАЛЬНОСТИ
                        </Link>
                        <Link href="/terms" className="hover:text-white transition-colors">
                            УСЛОВИЯ ИСПОЛЬЗОВАНИЯ
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
