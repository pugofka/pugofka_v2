'use client';

import { motion } from 'framer-motion';
import { useUI } from '@/context/UIContext';
import Header from '@/components/Header';
import { ArrowRight, Terminal, Cpu, Database, Layers, Code2, GitBranch } from 'lucide-react';
import Link from 'next/link';

export default function CustomDevPage() {
    const { openContact } = useUI();
    return (
        <main className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-white overflow-x-hidden">
            <Header />

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 px-6 border-b border-border">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20 pointer-events-none" />

                <div className="max-w-7xl mx-auto relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface border border-border mb-8">
                            <Terminal className="w-4 h-4 text-primary" />
                            <span className="text-xs font-mono text-gray-400 uppercase tracking-wider">
                                Custom Development
                            </span>
                        </div>

                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold uppercase tracking-tighter mb-8 leading-[0.9]">
                            High-Load <br />
                            <span className="text-stroke text-transparent">Systems</span>
                        </h1>

                        <p className="text-xl text-gray-400 max-w-2xl leading-relaxed mb-12">
                            Разрабатываем сложные бэкенд-системы, API и микросервисы.
                            Решаем нетривиальные задачи, где коробочные решения не справляются.
                            Проектируем архитектуру под высокие нагрузки.
                        </p>

                        <div className="flex flex-wrap gap-4">
                            <button onClick={openContact} className="bg-primary text-white px-8 py-4 font-bold uppercase tracking-wider hover:bg-red-600 transition-colors flex items-center gap-2">
                                Обсудить проект <ArrowRight className="w-5 h-5" />
                            </button>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Tech Stack Grid */}
            <section className="py-20 border-b border-border bg-surface/30">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border border border-border">
                        {[
                            {
                                icon: Cpu,
                                title: "Go (Golang)",
                                desc: "Для микросервисов и высоконагруженных узлов. Максимальная производительность и параллелизм."
                            },
                            {
                                icon: Layers,
                                title: "Laravel (PHP)",
                                desc: "Для сложной бизнес-логики и быстрых MVP. Экосистема, проверенная временем."
                            },
                            {
                                icon: Code2,
                                title: "Python",
                                desc: "Для ML-моделей, обработки данных и скриптинга. Интеграция с AI-сервисами."
                            }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-background p-10 group hover:bg-surface transition-colors"
                            >
                                <item.icon className="w-10 h-10 text-primary mb-6" />
                                <h3 className="text-2xl font-bold uppercase mb-4">{item.title}</h3>
                                <p className="text-gray-400 leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Engineering Culture */}
            <section className="py-24 px-6 border-b border-border">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-4xl md:text-6xl font-bold uppercase mb-8 leading-none">
                            Инженерная <br />
                            <span className="text-primary">Культура</span>
                        </h2>
                        <div className="space-y-8">
                            {[
                                {
                                    title: "Code Review",
                                    text: "Каждая строчка кода проходит проверку. Мы не мержим 'мусор' в мастер."
                                },
                                {
                                    title: "CI/CD Pipelines",
                                    text: "Автоматическая сборка и деплой. Тесты запускаются при каждом коммите."
                                },
                                {
                                    title: "Observability",
                                    text: "Логирование, метрики и трейсинг. Мы узнаем о проблеме раньше пользователей."
                                }
                            ].map((item, i) => (
                                <div key={i} className="flex gap-6">
                                    <div className="w-12 h-12 border border-border flex items-center justify-center shrink-0 bg-surface">
                                        <GitBranch className="w-5 h-5 text-gray-400" />
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold uppercase mb-2">{item.title}</h4>
                                        <p className="text-gray-400">{item.text}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Visual Abstract Representation of Code/Architecture */}
                    <div className="relative border border-border bg-surface p-8 font-mono text-sm overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-1 bg-primary" />
                        <div className="space-y-2 text-gray-500">
                            <div className="flex gap-4 text-gray-600 border-b border-border pb-4 mb-4">
                                <span>main.go</span>
                                <span>worker.go</span>
                                <span className="text-primary">server.go</span>
                            </div>
                            <p><span className="text-purple-400">func</span> <span className="text-blue-400">main</span>() {`{`}</p>
                            <p>&nbsp;&nbsp;<span className="text-green-400">// 1. Structured Logging (JSON)</span></p>
                            <p>&nbsp;&nbsp;logger := slog.New(slog.NewJSONHandler(os.Stdout, nil))</p>
                            <p>&nbsp;</p>
                            <p>&nbsp;&nbsp;<span className="text-green-400">// 2. Graceful Shutdown Context</span></p>
                            <p>&nbsp;&nbsp;ctx, stop := signal.NotifyContext(context.Background(), syscall.SIGINT)</p>
                            <p>&nbsp;&nbsp;<span className="text-purple-400">defer</span> stop()</p>
                            <p>&nbsp;</p>
                            <p>&nbsp;&nbsp;<span className="text-green-400">// 3. Production Server with Timeouts</span></p>
                            <p>&nbsp;&nbsp;srv := &http.Server{`{`}</p>
                            <p>&nbsp;&nbsp;&nbsp;&nbsp;Addr: <span className="text-yellow-300">":8080"</span>,</p>
                            <p>&nbsp;&nbsp;&nbsp;&nbsp;ReadTimeout: 5 * time.Second,</p>
                            <p>&nbsp;&nbsp;&nbsp;&nbsp;WriteTimeout: 10 * time.Second,</p>
                            <p>&nbsp;&nbsp;{`}`}</p>
                            <p>&nbsp;</p>
                            <p>&nbsp;&nbsp;<span className="text-purple-400">go</span> <span className="text-purple-400">func</span>() {`{`}</p>
                            <p>&nbsp;&nbsp;&nbsp;&nbsp;logger.Info(<span className="text-yellow-300">"starting high-load node"</span>, <span className="text-yellow-300">"port"</span>, 8080)</p>
                            <p>&nbsp;&nbsp;&nbsp;&nbsp;srv.ListenAndServe()</p>
                            <p>&nbsp;&nbsp;{`}`}()</p>
                            <p>&nbsp;</p>
                            <p>&nbsp;&nbsp;&lt;-ctx.Done() <span className="text-green-400">// Wait for signal</span></p>
                            <p>{`}`}</p>
                        </div>

                        {/* Overlay Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent" />
                    </div>
                </div>
            </section>

            {/* Database & Infrastructure */}
            <section className="py-24 bg-surface/20 border-b border-border">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <h2 className="text-3xl font-bold uppercase mb-16">Инфраструктура данных</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                        {[
                            { name: "Postgres / MySQL", label: "Relational DB" },
                            { name: "ClickHouse", label: "Analytics" },
                            { name: "Redis", label: "Cache / Queues" },
                            { name: "Apache Kafka", label: "Message Broker" },
                            { name: "Cassandra", label: "NoSQL" },
                            { name: "Docker", label: "Containerization" }
                        ].map((tech, i) => (
                            <div key={i} className="flex flex-col items-center justify-center p-6 border border-border hover:border-primary transition-colors bg-background">
                                <Database className="w-8 h-8 text-gray-500 mb-4" />
                                <span className="text-xl font-bold uppercase">{tech.name}</span>
                                <span className="text-xs text-gray-500 mt-2 uppercase tracking-wider">{tech.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
