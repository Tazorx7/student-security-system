import React from 'react';
import { ShieldCheck, Plus, UserCheck, Smartphone, Shield, QrCode, Trash2, Edit } from 'lucide-react';

const AuthorizedGuardians = () => {
    const guardians = [
        { id: 1, name: 'David Smith', relation: 'Uncle', status: 'verified', permissions: ['Pickup', 'Emergency'], identity: 'Confirmed via DMV' },
        { id: 2, name: 'Alice Smith', relation: 'Grandmother', status: 'verified', permissions: ['Pickup'], identity: 'Confirmed via Passport' },
        { id: 3, name: 'Michael Jenkins', relation: 'Family Friend', status: 'pending', permissions: ['Pickup'], identity: 'Identity Pending' },
    ];

    return (
        <div className="flex-1 overflow-y-auto p-8 space-y-8 bg-background-light dark:bg-background-dark">
            <div className="max-w-6xl mx-auto space-y-8">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                        <h1 className="text-3xl font-black tracking-tight text-slate-900 dark:text-white">Authorized Guardians</h1>
                        <p className="text-slate-500 dark:text-slate-400">People authorized to pick up your children from school.</p>
                    </div>
                    <button className="flex items-center gap-2 bg-primary text-white px-5 py-3 rounded-xl font-bold text-sm shadow-xl shadow-primary/30 hover:scale-[1.02] active:scale-95 transition-all">
                        <Plus className="w-4 h-4" />
                        Authorize New Guardian
                    </button>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Guardian List */}
                    <div className="lg:col-span-2 space-y-4">
                        {guardians.map((guardian) => (
                            <div key={guardian.id} className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 flex flex-col md:flex-row gap-6 hover:shadow-md transition-all">
                                <div className="size-20 bg-slate-100 dark:bg-slate-800 rounded-xl flex items-center justify-center flex-shrink-0">
                                    <UserCheck className={`w-10 h-10 ${guardian.status === 'verified' ? 'text-green-500' : 'text-slate-400'}`} />
                                </div>
                                <div className="flex-1 space-y-4">
                                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                                        <div>
                                            <h3 className="text-xl font-black">{guardian.name}</h3>
                                            <div className="flex items-center gap-2 mt-1">
                                                <span className="text-xs font-bold text-primary uppercase tracking-wider">{guardian.relation}</span>
                                                <span className="text-slate-300">•</span>
                                                <span className={`text-[10px] font-black uppercase tracking-widest px-1.5 py-0.5 rounded ${guardian.status === 'verified' ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' : 'bg-slate-100 text-slate-500 dark:bg-slate-800 dark:text-slate-400'}`}>
                                                    {guardian.status}
                                                </span>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <button className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg text-slate-400 transition-colors"><QrCode className="w-5 h-5" /></button>
                                            <button className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg text-slate-400 transition-colors"><Edit className="w-5 h-5" /></button>
                                            <button className="p-2 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg text-red-400 transition-colors"><Trash2 className="w-5 h-5" /></button>
                                        </div>
                                    </div>

                                    <div className="flex flex-wrap gap-4">
                                        <div className="flex items-center gap-2 text-sm text-slate-500">
                                            <Shield className="w-4 h-4" />
                                            {guardian.permissions.join(', ')}
                                        </div>
                                        <div className="flex items-center gap-2 text-sm text-slate-500">
                                            <ShieldCheck className="w-4 h-4" />
                                            {guardian.identity}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Security Info Panel */}
                    <div className="space-y-6">
                        <div className="bg-primary rounded-2xl p-6 text-white shadow-xl">
                            <h3 className="text-xl font-black mb-4">Security Notice</h3>
                            <p className="text-blue-100 text-sm leading-relaxed mb-6">
                                All new guardians must undergo a one-time identity verification process via government-issued ID before being approved for physical pickups.
                            </p>
                            <ul className="space-y-3">
                                <li className="flex items-center gap-3 text-xs font-bold uppercase tracking-wider">
                                    <Smartphone className="w-4 h-4" />
                                    Requires GuardianLink App
                                </li>
                                <li className="flex items-center gap-3 text-xs font-bold uppercase tracking-wider">
                                    <ShieldCheck className="w-4 h-4" />
                                    Face Match Required
                                </li>
                                <li className="flex items-center gap-3 text-xs font-bold uppercase tracking-wider">
                                    <Shield className="w-4 h-4" />
                                    Legal Custody Check
                                </li>
                            </ul>
                        </div>

                        <div className="bg-slate-100 dark:bg-slate-800/50 rounded-2xl p-6 border border-slate-200 dark:border-slate-800">
                            <h4 className="font-bold text-sm mb-4">Revocation Policy</h4>
                            <p className="text-xs text-slate-500 leading-relaxed">
                                You can revoke pickup permissions at any time. Revocations are immediate across all school gate terminals.
                            </p>
                            <button className="text-primary text-xs font-bold mt-4 hover:underline">View Policy Details</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AuthorizedGuardians;
