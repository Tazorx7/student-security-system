"use client";
import Link from 'next/link';

export const CTA = () => {
    return (
        <section id="cta" className="py-12 bg-primary">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8 text-white">
                    <div className="text-center md:text-left">
                        <h3 className="text-2xl md:text-3xl font-bold mb-2">Ready to secure your school&apos;s future?</h3>
                        <p className="opacity-90">Join hundreds of schools already improving their safety protocols.</p>
                    </div>
                    <div className="flex gap-4">
                        <Link href="/login" className="bg-white text-primary px-8 py-3 rounded-lg font-bold hover:bg-slate-100 transition-colors">Get Started Free</Link>
                        <a href="mailto:sales@guardiangate.com" className="border border-white/30 bg-white/10 px-8 py-3 rounded-lg font-bold hover:bg-white/20 transition-colors">Contact Sales</a>
                    </div>
                </div>
            </div>
        </section>
    );
};
