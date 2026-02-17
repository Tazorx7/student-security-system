"use client";
import { Shield } from 'lucide-react';

export const Footer = () => {
    return (
        <footer className="bg-background-light dark:bg-background-dark py-12 border-t border-slate-200 dark:border-slate-800">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
                    <div className="col-span-2 md:col-span-1">
                        <div className="flex items-center gap-2 mb-6">
                            <Shield className="text-primary w-6 h-6" />
                            <span className="font-bold text-slate-900 dark:text-white">GuardianGate</span>
                        </div>
                        <p className="text-sm text-slate-500 leading-relaxed mb-6">
                            Industry leading parent-child recognition system. Making school dismissals faster, safer, and smarter.
                        </p>
                    </div>
                    <div>
                        <h5 className="font-bold text-slate-900 dark:text-white mb-4">Product</h5>
                        <ul className="space-y-2 text-sm text-slate-500">
                            <li><a className="hover:text-primary transition-colors" href="#">Features</a></li>
                            <li><a className="hover:text-primary transition-colors" href="#">Security</a></li>
                            <li><a className="hover:text-primary transition-colors" href="#">Roadmap</a></li>
                            <li><a className="hover:text-primary transition-colors" href="#">Pricing</a></li>
                        </ul>
                    </div>
                    <div>
                        <h5 className="font-bold text-slate-900 dark:text-white mb-4">Company</h5>
                        <ul className="space-y-2 text-sm text-slate-500">
                            <li><a className="hover:text-primary transition-colors" href="#">About Us</a></li>
                            <li><a className="hover:text-primary transition-colors" href="#">Careers</a></li>
                            <li><a className="hover:text-primary transition-colors" href="#">Blog</a></li>
                            <li><a className="hover:text-primary transition-colors" href="#">Contact</a></li>
                        </ul>
                    </div>
                    <div>
                        <h5 className="font-bold text-slate-900 dark:text-white mb-4">Legal</h5>
                        <ul className="space-y-2 text-sm text-slate-500">
                            <li><a className="hover:text-primary transition-colors" href="#">Privacy Policy</a></li>
                            <li><a className="hover:text-primary transition-colors" href="#">Security Terms</a></li>
                            <li><a className="hover:text-primary transition-colors" href="#">Cookie Policy</a></li>
                        </ul>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-slate-200 dark:border-slate-800 text-xs text-slate-400">
                    <p>© 2026 GuardianGate Security Solutions. All rights reserved.</p>
                    <div className="flex gap-6 mt-4 md:mt-0">
                        <a className="hover:text-primary transition-colors" href="#">X (formerly Twitter)</a>
                        <a className="hover:text-primary transition-colors" href="#">LinkedIn</a>
                        <a className="hover:text-primary transition-colors" href="#">Instagram</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};
