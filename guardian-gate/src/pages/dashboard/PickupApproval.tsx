import React, { useState } from 'react';
import { Shield, ShieldAlert, ShieldCheck, CheckCircle, AlertTriangle, AlertCircle, HelpCircle, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const PickupApproval = () => {
    const [reason, setReason] = useState('');

    return (
        <div className="bg-background-light dark:bg-background-dark min-h-screen text-slate-900 dark:text-slate-100 font-display flex flex-col antialiased">
            {/* Navigation Header */}
            <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-slate-200 dark:border-slate-800 bg-white dark:bg-background-dark px-6 md:px-10 py-3 sticky top-0 z-50">
                <div className="flex items-center gap-3">
                    <div className="size-8 text-primary flex items-center justify-center">
                        <Shield className="w-8 h-8 fill-current" />
                    </div>
                    <h2 className="text-slate-900 dark:text-white text-lg font-bold leading-tight tracking-tight">GuardianLink</h2>
                </div>
                <div className="flex flex-1 justify-end gap-6 items-center">
                    <nav className="hidden md:flex items-center gap-8">
                        <Link className="text-slate-600 dark:text-slate-400 text-sm font-medium hover:text-primary transition-colors" to="/dashboard">Dashboard</Link>
                        <Link className="text-slate-600 dark:text-slate-400 text-sm font-medium hover:text-primary transition-colors" to="/dashboard/history">History</Link>
                        <Link className="text-slate-600 dark:text-slate-400 text-sm font-medium hover:text-primary transition-colors" to="/admin/settings">Settings</Link>
                    </nav>
                    <div className="h-10 w-10 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center overflow-hidden border border-slate-200 dark:border-slate-800">
                        <img
                            alt="User profile photo"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuD5Xq1WIjtEy_lIb6nXoqEe0iIZPe9NHKZUuvT0bOJrUsSn5_n5paIO63XnUguI-YK-p4nxz3S27cVcx-u90tBaOfYYG1xfFGxLaZhFTBI6KKViilmkQ2MQ6PEvFvnmN1ZSPmekjQZeAMrmVZp0KpK7z0jvniCHiiCe-wlYqFfjv9T1p5ruclZlemq9Ksd4WgKD7l8ys_1bRU0y29JtZnxEBNMMnzWhusfC9SO3nVk2rI7AONjtqS9lovRulibWCOD5CsD9zLDik9Y"
                        />
                    </div>
                </div>
            </header>

            <main className="flex-1 flex flex-col items-center py-8 px-4 md:px-10">
                <div className="max-w-5xl w-full">
                    {/* Title Section */}
                    <div className="mb-8">
                        <h1 className="text-slate-900 dark:text-white text-3xl md:text-4xl font-black leading-tight tracking-tight mb-2">Verification Request: Pickup Authorization</h1>
                        <p className="text-slate-500 dark:text-slate-400 text-lg">A request has been initiated for a non-guardian pickup. Please verify the identities below.</p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Left & Middle: Split Verification Panel */}
                        <div className="lg:col-span-2 space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {/* Child Photo */}
                                <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm">
                                    <div className="p-4 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center">
                                        <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Your Child</span>
                                        <span className="text-primary"><AlertCircle className="w-5 h-5" /></span>
                                    </div>
                                    <div className="relative aspect-[3/4]">
                                        <img
                                            alt="Official school photo of Leo Smith"
                                            className="w-full h-full object-cover"
                                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuA91QlZKM0eDtzm6yVlhIQPkQDFlFRMPhv0_6S8zwvBNnX7qgIHLDm4vSeDNW13XSZMXo_yx2iKK154NpiK3iKQIML24zQTX3-pcL4TD8KYwgTFri2Fw6BZxEhjuleJPltcelO3p2vQ8cNovLicWrtB48qKLUOidMZ-4lA7R-4OdbXeAoqOwSF0fh4gJNX4Gq-ZnAjUshVZRfvDhDTjzCG_KNVAUinuxoijvGQ2XRUiEqy6wPBIr-5vlqVGmXhqcrfWT-Dp1TTB1Dc"
                                        />
                                        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent text-white">
                                            <p className="text-xl font-bold">Leo Smith</p>
                                            <p className="text-sm opacity-90">Grade 2 • Room 104</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Pickup Person Photo */}
                                <div className="bg-white dark:bg-slate-900 rounded-xl border-2 border-primary overflow-hidden shadow-lg shadow-primary/10">
                                    <div className="p-4 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center bg-primary/5">
                                        <span className="text-xs font-bold uppercase tracking-wider text-primary">Authorized Person</span>
                                        <ShieldCheck className="text-primary w-5 h-5" />
                                    </div>
                                    <div className="relative aspect-[3/4]">
                                        <img
                                            alt="Sarah Jenkins identification photo"
                                            className="w-full h-full object-cover"
                                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAPQkDD4Bp66O8VANr4L_VGYKi9ACfeFRGk_WanxeiMpEHQUmj9uF0G4gGrdaPxbORxBOZjBR_YFPfAPzD7ru1pNtcIRL2x5F7ykDZZsEsjFOVexysnma0aY-JearuoMc8BKqSLuOy2jZXpamjrFRbXPC91fdyyCYtAcuU2TiQ2FAL71Q6-INrogeMJwnfjpdyLBwPo4f_jJ_KdI1cO2yJBQ_6y0SCzTSDarWSPn5bfW2JTVXFKSusGZcQyvkUbyuTGLeZFgvFQV7k"
                                        />
                                        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent text-white">
                                            <p className="text-xl font-bold">Sarah Jenkins</p>
                                            <p className="text-sm opacity-90">Verified via Government ID • Aunt</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Legal Disclaimer Banner */}
                            <div className="bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900 rounded-xl p-5 flex gap-4">
                                <AlertTriangle className="text-amber-600 dark:text-amber-400 flex-shrink-0 w-6 h-6" />
                                <div>
                                    <p className="text-amber-800 dark:text-amber-200 font-bold mb-1">Legal Notice</p>
                                    <p className="text-amber-700 dark:text-amber-300 text-sm leading-relaxed">
                                        By clicking "Approve Pickup", you acknowledge that you are authorizing this individual to take custody of your child. You transfer full responsibility for your child's safety to the authorized person for the duration of this pickup session.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Right: Action Sidebar */}
                        <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm h-fit">
                            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-6">Authorization Details</h3>
                            <form className="space-y-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-slate-700 dark:text-slate-300 block">
                                        Why are you authorizing this person today?
                                    </label>
                                    <div className="relative">
                                        <select
                                            value={reason}
                                            onChange={(e) => setReason(e.target.value)}
                                            className="block w-full rounded-lg border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:border-primary focus:ring-primary h-12 px-4 appearance-none"
                                        >
                                            <option disabled value="">Select a reason...</option>
                                            <option value="scheduled">Scheduled Pickup (Work Conflict)</option>
                                            <option value="emergency">Emergency Situation</option>
                                            <option value="activity">Extracurricular Activity</option>
                                            <option value="family">Family Friend / Relative Visit</option>
                                            <option value="other">Other (Please specify)</option>
                                        </select>
                                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-slate-500">
                                            <ChevronDown className="w-5 h-5" />
                                        </div>
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-slate-700 dark:text-slate-300 block">
                                        Additional Notes (Optional)
                                    </label>
                                    <textarea
                                        className="block w-full rounded-lg border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:border-primary focus:ring-primary p-4"
                                        placeholder="e.g. She will be bringing him back by 6PM..."
                                        rows={3}
                                    />
                                </div>
                                <div className="pt-4 space-y-3">
                                    <button
                                        className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-4 rounded-lg shadow-md shadow-primary/20 flex items-center justify-center gap-2 transition-all active:scale-95"
                                        type="button"
                                    >
                                        <CheckCircle className="w-5 h-5" />
                                        Approve Pickup
                                    </button>
                                    <button
                                        className="w-full bg-white dark:bg-slate-900 border border-red-200 dark:border-red-900 text-red-600 hover:bg-red-50 dark:hover:bg-red-950/20 font-bold py-4 rounded-lg flex items-center justify-center gap-2 transition-all active:scale-95"
                                        type="button"
                                    >
                                        <AlertCircle className="w-5 h-5" />
                                        Deny & Notify School
                                    </button>
                                </div>
                            </form>
                            <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800">
                                <div className="flex items-start gap-3">
                                    <HelpCircle className="text-slate-400 w-5 h-5 mt-1" />
                                    <div>
                                        <p className="text-xs font-semibold text-slate-500 uppercase">Need help?</p>
                                        <a className="text-sm text-primary font-medium hover:underline" href="#">Call GuardianLink Support</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            {/* Status Footer */}
            <footer className="bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 py-4 px-10 shrink-0">
                <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="flex items-center gap-2 text-slate-500 text-xs">
                        <span className="inline-block w-2 h-2 rounded-full bg-green-500"></span>
                        Encrypted Connection Secured by GuardianLink SSL
                    </div>
                    <p className="text-slate-400 text-xs">© 2024 GuardianLink Schools. All security protocols active.</p>
                </div>
            </footer>
        </div>
    );
};

export default PickupApproval;
