import Link from 'next/link';
import { ArrowLeft, AlertTriangle } from 'lucide-react';

export default function NotFound() {
    return (
        <div className="min-h-screen bg-background text-foreground flex flex-col items-center justify-center p-4">
            <div className="max-w-md w-full text-center space-y-8">
                {/* Glitch Effect Header */}
                <div className="relative">
                    <h1 className="text-9xl font-bold text-white/5 font-mono select-none">
                        404
                    </h1>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <AlertTriangle className="w-16 h-16 text-primary animate-pulse" />
                    </div>
                </div>

                <div className="space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-wide">
                        Страница не найдена
                    </h2>
                    <p className="text-gray-400 font-mono text-sm leading-relaxed">
                        Запрошенный ресурс недоступен или был перемещен.
                        <br />
                        System error: LOCATION_NOT_FOUND
                    </p>
                </div>

                <Link
                    href="/"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black font-mono text-sm uppercase tracking-widest hover:bg-gray-200 transition-colors"
                >
                    <ArrowLeft className="w-4 h-4" />
                    Вернуться на главную
                </Link>

                <div className="pt-12 border-t border-white/5">
                    <div className="font-mono text-xs text-primary/50 uppercase tracking-[0.2em]">
                        Status: Fatal_Error
                    </div>
                </div>
            </div>
        </div>
    );
}
