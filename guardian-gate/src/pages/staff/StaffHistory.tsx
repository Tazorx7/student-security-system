import React from 'react';
import { StaffHeader } from '../../components/staff/StaffHeader';
import { History, Search, ArrowRight, UserCheck, ShieldAlert, Clock, Filter } from 'lucide-react';

const StaffHistory = () => {
    const logs = [
        { id: 1, student: 'Leo Garcia', guardian: 'Robert Garcia (Father)', time: '03:12 PM', gate: 'Gate 4', status: 'approved' },
        { id: 2, student: 'Emma Watson', guardian: 'Jane Watson (Nanny)', time: '03:08 PM', gate: 'Gate 4', status: 'approved' },
        { id: 3, student: 'Emily Thorne', guardian: 'Marcus Thorne', time: '02:55 PM', gate: 'Gate 4', status: 'denied', reason: 'Restricted Custody' },
        { id: 4, student: 'Noah Williams', guardian: 'Sarah Williams', time: '02:45 PM', gate: 'Gate 4', status: 'approved' },
    ];

    return (
        <div className="bg-background-light dark:bg-background-dark min-h-screen text-slate-900 dark:text-slate-100 font-display flex flex-col">
            <StaffHeader />
            <main className="p-4 lg:p-10 max-w-7xl mx-auto w-full space-y-8">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                        <h1 className="text-3xl font-black tracking-tight">Gate Activity Log</h1>
                        <p className="text-slate-500 dark:text-slate-400">Review all recent verifications and security events for Gate 4 South.</p>
                    </div>
                    <div className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg text-sm font-bold">
                        <Clock className="w-4 h-4 text-slate-400" />
                        Live Feed: Active
                    </div>
                </div>

                <div className="flex gap-4 mb-6">
                    <div className="relative flex-1">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
                        <input
                            className="w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl pl-10 pr-4 py-3 focus:ring-2 focus:ring-primary shadow-sm"
                            placeholder="Filter by student or guardian name..."
                        />
                    </div>
                    <button className="px-5 py-3 bg-slate-100 dark:bg-slate-800 rounded-xl font-bold flex items-center gap-2">
                        <Filter className="w-4 h-4" />
                        Filters
                    </button>
                </div>

                <div className="grid grid-cols-1 gap-4">
                    {logs.map((log) => (
                        <div key={log.id} className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm flex items-center justify-between hover:border-primary/30 transition-all group">
                            <div className="flex items-center gap-6">
                                <div className={`size-12 rounded-xl flex items-center justify-center ${log.status === 'approved' ? 'bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400' : 'bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400'}`}>
                                    {log.status === 'approved' ? <UserCheck className="w-6 h-6" /> : <ShieldAlert className="w-6 h-6" />}
                                </div>
                                <div className="space-y-1">
                                    <h3 className="font-bold text-lg leading-none">{log.student}</h3>
                                    <p className="text-sm text-slate-500">{log.guardian}</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-8 text-right">
                                <div className="hidden md:block">
                                    <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest mb-1">Time & Location</p>
                                    <p className="text-sm font-bold">{log.time} • {log.gate}</p>
                                </div>
                                <div className="min-w-[120px]">
                                    <span className={`inline-flex px-3 py-1 rounded-full text-xs font-black uppercase tracking-widest border-2 ${log.status === 'approved' ? 'bg-green-50 border-green-100 text-green-600 dark:bg-green-900/20 dark:border-green-800' : 'bg-red-50 border-red-100 text-red-600 dark:bg-red-900/20 dark:border-red-800'}`}>
                                        {log.status}
                                    </span>
                                    {log.reason && <p className="text-[10px] text-red-500 font-bold mt-1 uppercase tracking-tight">{log.reason}</p>}
                                </div>
                                <ArrowRight className="w-5 h-5 text-slate-300 group-hover:text-primary transition-colors" />
                            </div>
                        </div>
                    ))}
                </div>

                <div className="flex justify-center pt-4">
                    <button className="px-8 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl font-black text-xs uppercase tracking-widest text-slate-500 hover:text-primary transition-colors">
                        View Full Archive
                    </button>
                </div>
            </main>
        </div>
    );
};

export default StaffHistory;
