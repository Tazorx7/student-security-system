import React from 'react';
import { Lock, Phone, MessageSquare, Info, Clock, ShieldCheck } from 'lucide-react';

export const PermissionsManager = () => {
    return (
        <section className="col-span-12 lg:col-span-5 flex flex-col gap-6">
            <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm min-h-full">
                <div className="flex items-center justify-between mb-8">
                    <h2 className="text-xl font-bold text-slate-900 dark:text-white">Authorized Pickups</h2>
                    <button className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-primary/90 transition-colors shadow-sm">
                        <Lock className="w-4 h-4" />
                        Edit Permissions
                    </button>
                </div>

                {/* Primary Parents Section */}
                <div className="mb-10">
                    <div className="flex items-center gap-2 mb-4">
                        <div className="h-1 w-8 bg-primary rounded-full"></div>
                        <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400">Primary Parents</h3>
                    </div>
                    <div className="grid grid-cols-1 gap-4">
                        {/* Parent 1 */}
                        <div className="flex items-center justify-between p-4 rounded-xl border border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/30">
                            <div className="flex items-center gap-4">
                                <div
                                    className="size-12 rounded-full bg-center bg-cover border-2 border-white dark:border-slate-700 shadow-sm"
                                    style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuD5N8kC3bAnrvkcIyz1KCM7RGwo_g1tKcjgBPEnfb74khR8_rWOQq-tMmMzy68XK_xY0cKu20LxXGvPNmNMXhgnIv0hAmSujpjLdVvFQgB-JtpmMKC1psgukpmpII6Zdohv9yfNeDzHu-MRe29c7kQsdolg0rtTifPGVtny6OTsPbFPQ1rBD5pMEpttXK94y7hsA9YrGDKhWNtZ7FtqX29wrBeuchXUe1UKWkwiS_u5SHpPUaMG5z-EKnwGs0K_Elro910rfYJabng")' }}
                                ></div>
                                <div>
                                    <p className="font-bold text-slate-900 dark:text-white">Sarah Johnson</p>
                                    <p className="text-xs text-primary font-medium">Mother • Always Authorized</p>
                                    <p className="text-xs text-slate-500 mt-1 font-mono">1-555-***-0123</p>
                                </div>
                            </div>
                            <div className="flex gap-2">
                                <button className="p-2 rounded-full bg-white dark:bg-slate-700 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-600 hover:text-primary transition-colors">
                                    <Phone className="w-5 h-5" />
                                </button>
                                <button className="p-2 rounded-full bg-white dark:bg-slate-700 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-600 hover:text-primary transition-colors">
                                    <MessageSquare className="w-5 h-5" />
                                </button>
                            </div>
                        </div>
                        {/* Parent 2 */}
                        <div className="flex items-center justify-between p-4 rounded-xl border border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/30">
                            <div className="flex items-center gap-4">
                                <div
                                    className="size-12 rounded-full bg-center bg-cover border-2 border-white dark:border-slate-700 shadow-sm"
                                    style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCeT2bvNhCy6MydaWY2XWjyLhBcIub9iHmPn29o96xWArylsPvq4cbJl8dx_0e-gkeFyXDdVNyesnspar4t9aq_x6dnFzgHuxwwPjTFN6lQUKfHipad1ELM7nvvirT9vVjbAFUuy4gG6M8f4IU2RgbtjZ5LMuHfaEANAzHOvCLAl3x6mjlTedww7E18MOeFn5bsUQ7jNS0FCUMCBdOr6kT0x0mIiE9QCtCnZrymf6jN2nOOxRNTD-TaloDD_lVmv2EPw-Qrd29aDP8")' }}
                                ></div>
                                <div>
                                    <p className="font-bold text-slate-900 dark:text-white">Mark Johnson</p>
                                    <p className="text-xs text-primary font-medium">Father • Always Authorized</p>
                                    <p className="text-xs text-slate-500 mt-1 font-mono">1-555-***-0124</p>
                                </div>
                            </div>
                            <div className="flex gap-2">
                                <button className="p-2 rounded-full bg-white dark:bg-slate-700 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-600 hover:text-primary transition-colors">
                                    <Phone className="w-5 h-5" />
                                </button>
                                <button className="p-2 rounded-full bg-white dark:bg-slate-700 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-600 hover:text-primary transition-colors">
                                    <MessageSquare className="w-5 h-5" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Trusted Guardians Section */}
                <div>
                    <div className="flex items-center gap-2 mb-4">
                        <div className="h-1 w-8 bg-slate-300 dark:bg-slate-600 rounded-full"></div>
                        <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400">Trusted Guardians</h3>
                    </div>
                    <div className="grid grid-cols-1 gap-4">
                        {/* Guardian 1 */}
                        <div className="flex items-center justify-between p-4 rounded-xl border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm">
                            <div className="flex items-center gap-4">
                                <div
                                    className="size-12 rounded-full bg-center bg-cover border-2 border-slate-50 dark:border-slate-800 shadow-sm"
                                    style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCYMWupHURa2KevBinYnUwi8SFGRiHhxYY5ABJdkAbqwEB_LuXIfnzQ26fW0h5xdqat_sAPb8EfGanmrs7H2xew69xLlU2x8wPmWt5lhzqV8imlNeIiCsTjpfaGfbKdw-GZ3DsfO3dVVGp-TcmRajQ004xLr790jmur3SKOKNXt35tNA6-w56DNVtGnIJ6h2RTB0iOp3lE_x8lL0ohzL6P4wvFvTfYyz82qZd1VAKKy3ZSWZrCKLbn3TbSsHBE5GDCcmykN6qUKFRU")' }}
                                ></div>
                                <div>
                                    <p className="font-bold text-slate-900 dark:text-white">Elena Smith</p>
                                    <p className="text-xs text-slate-500 font-medium">Aunt • Guardian</p>
                                    <p className="text-[10px] mt-1 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 px-2 py-0.5 rounded inline-block">Authorized Pickup</p>
                                </div>
                            </div>
                            <button className="p-2 rounded-full text-slate-400 hover:text-slate-600">
                                <Info className="w-5 h-5" />
                            </button>
                        </div>
                        {/* Guardian 2 */}
                        <div className="flex items-center justify-between p-4 rounded-xl border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm">
                            <div className="flex items-center gap-4">
                                <div
                                    className="size-12 rounded-full bg-center bg-cover border-2 border-slate-50 dark:border-slate-800 shadow-sm"
                                    style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBfAANjGWbULzA8bWj0cN-K5n2GGVxwrUQM2XaUlSnsWRz3NngtfgJW5Kww4Emp8loBq8vG8VwWGbsDlPrnuC33Wa-vuQkgENfeZIKqj9g5rwHdj6buSbHGhCGquqTCHbixlal_C618_KV5Y0ibx0UR5G9WdfOOPv50vixljwniz5Evy69IvV0mhURk2M-EUdbLP10cvV5vXlVXpzFS3_AzbbNdGDFCcqSAss2MgvPcp6bTqWLxpnwt6SQUwUPDWqRe8m2-qobZWB8")' }}
                                ></div>
                                <div>
                                    <p className="font-bold text-slate-900 dark:text-white">David Chen</p>
                                    <p className="text-xs text-slate-500 font-medium">Nanny • Guardian</p>
                                    <div className="flex items-center gap-1 mt-1">
                                        <Clock className="w-3 h-3 text-amber-500" />
                                        <p className="text-[10px] text-amber-600 dark:text-amber-400 font-bold uppercase">Exp: 12/2024</p>
                                    </div>
                                </div>
                            </div>
                            <button className="p-2 rounded-full text-slate-400 hover:text-slate-600">
                                <Info className="w-5 h-5" />
                            </button>
                        </div>
                    </div>
                </div>

                {/* 2FA Edit Lock Overlay Hint */}
                <div className="mt-8 p-4 rounded-lg bg-slate-50 dark:bg-slate-800/50 border border-dashed border-slate-200 dark:border-slate-700 flex items-start gap-4">
                    <ShieldCheck className="text-primary w-6 h-6" />
                    <div>
                        <p className="text-xs font-bold text-slate-700 dark:text-slate-300">Security Verification Enabled</p>
                        <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">Permission changes require 2-Factor Authentication from a lead administrator or verified parent account.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};
