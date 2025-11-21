'use client';

import { useRef } from 'react';
import { motion, useScroll } from 'framer-motion';
import { FileText, ExternalLink, Quote, ArrowRight, ArrowLeft } from 'lucide-react';

const testimonials = [
    {
        company: "АльфаСтрахование",
        person: "Арсен Даллакян",
        role: "Руководитель управления маркетинга и развития",
        quote: "Клиентоориентированный подход к работе, выполнение работ в оперативные сроки, профессионализм - это то, на чем строится вся работа в данной веб-студии. По мере поступления новых задач сотрудниками студии предлагались грамотные и интересные решения.",
        file: "/reviews/alpha.png",
        type: "image"
    },
    {
        company: "НИУ ВШЭ",
        person: "Светлана Смельцова",
        role: "Заместитель директора",
        quote: "Выражаем искреннюю благодарность и признательность за длительное сотрудничество, высокий профессиональный уровень и гибкий подход к решению наших задач",
        file: "/reviews/hse_review.png",
        type: "image"
    },
    {
        company: "Европа Уно Трейд Спб",
        person: "Гусева А.В.",
        role: "Директор по развитию и маркетингу",
        quote: "По рекомендации обратились в компанию Пугофка. Ребята молодцы. Реализовали все что было задумано и проявили инициативу, в результате которой ряд функционала был оптимизирован, что положительно повлияло на юзабилити и скорость работы сайта. Конверсия выросла, мы вошли во вкус. Будем продолжать совершенствоваться.",
        file: "/reviews/sharik_review.pdf",
        type: "pdf"
    },
    {
        company: "Spadream",
        person: "Виктор Лупейко",
        role: "Генеральный директор",
        quote: "В студии «Pugofka» работает опытная команда, которая понимает как реализовывать сложные задачи. Проект Spadream.ru - это не просто интернет-магазин - это целый комплекс оnlinе услуг в премиальном сегменте. Поставленные задачи для студии были весьма непросты и требовали понимания сферы деятельности нашей компании. Как результат нашей работы‚ мы получили стильный, современный, удобный и в тоже время простой интернет-магазин. Спустя две недели работы обновленного сайта мы получили рост конверсии на 2%!",
        file: null,
        type: null
    },
    {
        company: "Velomart",
        person: "Белоусов",
        role: "Руководитель",
        quote: "Только положительные впечатления! До этого работал с рядом фирм, из которых результат приходилось выбивать, и постоянно напоминать о договоренностях. С этими ребятами история разительно отличается! Все сроки, договоренности и пожелания соблюдены, результатом работы очень доволен. По сравнению со старым сайтом конверсия резко увеличилась, продажи пошли, а заказы обрабатывать стало намного удобнее. Спасибо руководству и сотрудникам компании «Pugofka»!",
        file: null,
        type: null
    },
    {
        company: "Clover Group",
        person: "Наринэ Фатыхова",
        role: "Директор по маркетингу",
        quote: "Работы были выполнены качественно и строго в заявленные сроки. Мы довольны результатом, но, что не менее важно, в процессе у нас не возникало никаких нареканий к действиям менеджеров и технических специалистов компании. Хотим поблагодарить коллектив за отличную работу.",
        file: "/reviews/clover_review.pdf",
        type: "pdf"
    },
    {
        company: "Бегемот-Бегемот",
        person: "Андраш Густи",
        role: "Руководитель студии",
        quote: "Студии Пугофка я хочу дать самый говорящий для руководителя любой компании отзыв: проект сдан, и я решительным образом не заметил, когда и как это произошло. Оценка проекта была зафиксирована заранее и не менялась аж до самого завершения работы. Менеджеры ни разу не жаловались на срыв сроков или качества.  С полной уверенностью и радостью готов рекомендовать студию Пугофка для веб-разработки",
        file: "/reviews/begemot_review.pdf",
        type: "pdf"
    },
    {
        company: "Электронное издательство",
        person: "В.П. Петров",
        role: "Управляющий партнер",
        quote: "Вот уже второй год мы сотрудничаем с ООО Пугофка. При работе над сайтом, иногда наше мнение не совпадало, но всегда четко и грамотно обосновывали предложенные технические решения, и именно эта принципиальность позволила избежать многих ошибок. Спасибо за вашу отзывчивость и оптимизм",
        file: "/reviews/electronic_publishing_review.pdf",
        type: "pdf"
    },
    {
        company: "Агентсво недвижимости Стронто",
        person: "Макаров С.Г.",
        role: "Генеральный директор",
        quote: "В результате работы появился сайт, соответствующий всем ожиданиям и договоренностям. И сроки, и стоимость все было соблюдено. А после сдачи проекта, продолжительное время обсуждали дальнейшее его развитие. Мною были получены ряд очень ценных рекомендаций и советов по развитию сайта. Студию Пугофка можно смело рекомендовать друзьям. Никогда за работу этих ребят не придется краснеть",
        file: "/reviews/stronto_review.pdf",
        type: "pdf"
    }
];

export default function Testimonials() {
    const containerRef = useRef<HTMLDivElement>(null);

    return (
        <section className="py-24 border-b border-border bg-background overflow-hidden">
            <div className="container mx-auto px-6 mb-12 flex flex-col md:flex-row justify-between items-end">
                <div>
                    <h2 className="text-4xl md:text-6xl font-bold uppercase mb-4">
                        Доверие <br />
                        <span className="text-primary">Клиентов</span>
                    </h2>
                    <p className="text-gray-400 max-w-lg">
                        Отзывы и благодарственные письма по итогам выполненных проектов.
                    </p>
                </div>
                <div className="flex gap-4">
                    <button
                        onClick={() => containerRef.current?.scrollBy({ left: -400, behavior: 'smooth' })}
                        className="p-4 border border-border hover:bg-primary hover:text-white transition-colors"
                    >
                        <ArrowLeft className="w-6 h-6" />
                    </button>
                    <button
                        onClick={() => containerRef.current?.scrollBy({ left: 400, behavior: 'smooth' })}
                        className="p-4 border border-border hover:bg-primary hover:text-white transition-colors"
                    >
                        <ArrowRight className="w-6 h-6" />
                    </button>
                </div>
            </div>

            <div
                ref={containerRef}
                className="flex overflow-x-auto gap-6 px-6 pb-12 snap-x snap-mandatory scrollbar-hide"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
                {testimonials.map((item, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="min-w-[350px] md:min-w-[500px] h-[450px] snap-center bg-surface/30 border border-border p-8 flex flex-col group hover:border-primary transition-colors relative"
                    >
                        <div className="mb-6 flex-shrink-0">
                            <Quote className="w-8 h-8 text-primary/50 mb-4" />
                            <div className="font-bold uppercase text-xl mb-1">{item.company}</div>
                            <div className="text-sm text-gray-400">{item.person}</div>
                            <div className="text-xs text-gray-500 font-mono mt-1">{item.role}</div>
                        </div>

                        <div className="flex-grow overflow-y-auto pr-2 mb-6 scrollbar-thin scrollbar-thumb-primary/20 scrollbar-track-transparent hover:scrollbar-thumb-primary/50">
                            <p className="text-lg leading-relaxed text-gray-300">
                                "{item.quote}"
                            </p>
                        </div>

                        {item.file && (
                            <div className="flex-shrink-0 pt-6 border-t border-border mt-auto">
                                <a
                                    href={item.file}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-3 text-xs font-mono uppercase tracking-wider text-gray-500 hover:text-primary transition-colors"
                                >
                                    <FileText className="w-4 h-4" />
                                    <span>Смотреть оригинал</span>
                                    <ExternalLink className="w-3 h-3 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                                </a>
                            </div>
                        )}
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
