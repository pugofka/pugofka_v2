'use client';

import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-zinc-950 border-t border-border py-20 text-white">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    {/* 1. Brand */}
                    <div className="flex flex-col justify-between">
                        <div>
                            <Link href="/" className="text-2xl font-bold uppercase tracking-tighter mb-6 block">
                                Pugofka
                            </Link>
                            <p className="text-muted-foreground max-w-sm font-mono text-sm mb-8">
                                // ARCHITECTING DIGITAL GROWTH<br />
                                SINCE 2011. ST. PETERSBURG.
                            </p>
                        </div>
                        <div className="font-mono text-xs text-muted-foreground">
                            © {new Date().getFullYear()} PUGOFKA.<br />
                            ALL SYSTEMS OPERATIONAL.
                        </div>
                    </div>

                    {/* 2. Services */}
                    <div>
                        <h4 className="font-mono text-xs text-muted-foreground uppercase tracking-widest mb-6">
                            Услуги
                        </h4>
                        <ul className="space-y-4 font-mono text-sm">
                            <li><Link href="/services/ecommerce" className="hover:text-primary transition-colors">E-COMMERCE</Link></li>
                            <li><Link href="/services/startups" className="hover:text-primary transition-colors">СТАРТАПЫ / MVP</Link></li>
                            <li><Link href="/services/custom" className="hover:text-primary transition-colors">CUSTOM DEV</Link></li>
                            <li><Link href="/services/bitrix24" className="hover:text-primary transition-colors">БИТРИКС24</Link></li>
                            <li><Link href="/services/support" className="hover:text-primary transition-colors">ПОДДЕРЖКА</Link></li>
                        </ul>
                    </div>

                    {/* 3. Company */}
                    <div>
                        <h4 className="font-mono text-xs text-muted-foreground uppercase tracking-widest mb-6">
                            Компания
                        </h4>
                        <ul className="space-y-4 font-mono text-sm">
                            <li><Link href="/portfolio" className="hover:text-primary transition-colors">ПРОЕКТЫ</Link></li>
                            <li><Link href="/company" className="hover:text-primary transition-colors">МАНИФЕСТ</Link></li>
                            <li className="pt-4"><Link href="/privacy" className="text-muted-foreground hover:text-white transition-colors text-xs">ПОЛИТИКА КОНФИДЕНЦИАЛЬНОСТИ</Link></li>
                            <li><Link href="/terms" className="text-muted-foreground hover:text-white transition-colors text-xs">УСЛОВИЯ ИСПОЛЬЗОВАНИЯ</Link></li>
                        </ul>
                    </div>

                    {/* 4. Connect */}
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
            </div>
        </footer>
    );
}
