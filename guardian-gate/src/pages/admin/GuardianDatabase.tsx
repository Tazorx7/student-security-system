import React from 'react';
import { AdminSidebar } from '../../components/admin/AdminSidebar';
import { PrincipalHeader } from '../../components/admin/PrincipalHeader';
import { Search, Filter, UserCheck, Shield, Phone, Mail, MoreVertical, Plus } from 'lucide-react';

const GuardianDatabase = () => {
    const guardians = [
        { id: 1, name: 'David Smith', relation: 'Uncle', students: ['Jamie Johnson'], phone: '+1 (555) 012-3499', email: 'david.s@example.com', status: 'verified', verification: 'DMV ID' },
        { id: 2, name: 'Robert Garcia', relation: 'Father', students: ['Leo Garcia'], phone: '+1 (555) 012-7788', email: 'robert.g@example.com', status: 'verified', verification: 'Passport' },
        { id: 3, name: 'Sarah Williams', relation: 'Mother', students: ['Noah Williams'], phone: '+1 (555) 012-1122', email: 'sarah.w@example.com', status: 'verified', verification: 'State ID' },
        { id: 4, name: 'Jane Watson', relation: 'Nanny', students: ['Emma Watson'], phone: '+1 (555) 012-3344', email: 'jane.w@example.com', status: 'verified', verification: 'Employer Confirmed' },
    ];

    return (
        <div className="flex h-screen overflow-hidden bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 font-display">
            <AdminSidebar />
            <main className="flex-1 overflow-y-auto bg-background-light dark:bg-background-dark flex flex-col">
                <PrincipalHeader />
                <div className="p-8 space-y-8">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div>
                            <h1 className="text-3xl font-black tracking-tight">Guardian Database</h1>
                            <p className="text-slate-500 dark:text-slate-400">Manage and verify all authorized pickup personnel across the campus.</p>
                        </div>
                        <button className="flex items-center gap-2 bg-primary text-white px-5 py-2.5 rounded-lg font-bold text-sm shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all">
                            <Plus className="w-4 h-4" />
                            Direct Registration
                        </button>
                    </div>

                    <div className="bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-800 flex flex-wrap gap-4 items-center">
                        <div className="relative flex-1 min-w-[300px]">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
                            <input
                                className="w-full bg-slate-50 dark:bg-slate-800 border-none rounded-lg pl-10 pr-4 py-2 text-sm focus:ring-2 focus:ring-primary"
                                placeholder="Search by name, student, or ID..."
                            />
                        </div>
                        <button className="flex items-center gap-2 px-4 py-2 bg-slate-100 dark:bg-slate-800 rounded-lg text-sm font-bold text-slate-600 dark:text-slate-300">
                            <Filter className="w-4 h-4" />
                            Advanced Filters
                        </button>
                    </div>

                    <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm">
                        <table className="w-full text-left">
                            <thead className="bg-slate-50 dark:bg-slate-800/50 text-slate-500 text-[11px] uppercase tracking-wider">
                                <tr>
                                    <th className="px-6 py-4 font-bold">Guardian Name</th>
                                    <th className="px-6 py-4 font-bold">Relation</th>
                                    <th className="px-6 py-4 font-bold">Students</th>
                                    <th className="px-6 py-4 font-bold">Contact Info</th>
                                    <th className="px-6 py-4 font-bold">Verification</th>
                                    <th className="px-6 py-4 font-bold">Status</th>
                                    <th className="px-6 py-4 font-bold"></th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                                {guardians.map((guardian) => (
                                    <tr key={guardian.id} className="text-sm hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-3">
                                                <div className="size-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                                                    {guardian.name.charAt(0)}
                                                </div>
                                                <span className="font-bold">{guardian.name}</span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 text-slate-500 font-medium">{guardian.relation}</td>
                                        <td className="px-6 py-4 text-slate-500">
                                            {guardian.students.map((s, idx) => (
                                                <span key={idx} className="inline-block bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded text-[10px] font-bold text-slate-600 dark:text-slate-400 mr-1">{s}</span>
                                            ))}
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="flex flex-col gap-1">
                                                <div className="flex items-center gap-1.5 text-xs text-slate-500">
                                                    <Phone className="w-3 h-3" /> {guardian.phone}
                                                </div>
                                                <div className="flex items-center gap-1.5 text-xs text-slate-500">
                                                    <Mail className="w-3 h-3" /> {guardian.email}
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-1.5 text-xs font-medium text-slate-600 dark:text-slate-300">
                                                <Shield className="w-3.5 h-3.5 text-primary" />
                                                {guardian.verification}
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-[10px] font-black uppercase tracking-widest bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400">
                                                <UserCheck className="w-3 h-3" />
                                                Verified
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 text-right">
                                            <button className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg text-slate-400">
                                                <MoreVertical className="w-5 h-5" />
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default GuardianDatabase;
