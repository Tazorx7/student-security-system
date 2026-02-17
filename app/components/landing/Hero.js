"use client";
import Link from 'next/link';

export const Hero = () => {
    return (
        <section className="py-16 md:py-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="flex flex-col gap-8">
                        <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1 rounded-full w-fit">
                            <span className="text-xs font-bold uppercase tracking-wider">✓ Trusted by 500+ Schools</span>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-black leading-[1.1] tracking-tight text-slate-900 dark:text-white">
                            Security You Can Trust, <br />
                            <span className="text-primary">Safety They Deserve.</span>
                        </h1>
                        <p className="text-lg text-slate-600 dark:text-slate-400 max-w-xl leading-relaxed">
                            Real-time parent-child verification to eliminate pickup errors and streamline school dismissals. Protect your students with industry-leading encryption and live audit trails.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Link href="/login" className="bg-primary text-white px-8 py-4 rounded-xl font-bold text-lg shadow-xl shadow-primary/30 hover:scale-[1.02] active:scale-95 transition-all text-center">
                                Request a Demo
                            </Link>
                            <button className="flex items-center gap-2 border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-8 py-4 rounded-xl font-bold text-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-all">
                                ▶ See How It Works
                            </button>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="absolute -inset-4 bg-primary/20 blur-3xl rounded-full"></div>
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800">
                            <img
                                alt="School identification terminal"
                                className="w-full h-auto object-cover aspect-[4/3]"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCRiqlm6AFILqdEwB6agMR3VxjLQ9hrLGcoypDp_iX0B0OlKj9jrBCX22FXCaEJ86fFufr6rKRJQUecJolA-fyd9QfFB9aSyUDx8mNyuvt5HuSwKMrltt7fkbkePYtBL7qgQlD4SGRxd4sqzp68nrXZqiCn_ZqIfc3KFEF8jAjpTHvS_pzZDg8lI35cUtW5a4N3nRqHP8iT2SURLW6cqXgPbH-FZmcyZRG9IGjrTlH0A5qHWywWuHeHoURlOm2XQtLVhCxsUmhlKx8"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
