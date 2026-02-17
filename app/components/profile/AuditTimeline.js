"use client";
import { ShieldCheck, LogIn, UserCheck, FileText } from 'lucide-react';
import { useCollection } from '../../hooks/useFirestore';
import { where, orderBy, limit } from 'firebase/firestore';

export const AuditTimeline = ({ studentId }) => {
    // Fetch logs related to this student
    const { data: events, loading } = useCollection(
        studentId ? 'auditLogs' : null,
        studentId ? [where('studentId', '==', studentId), orderBy('timestamp', 'desc'), limit(10)] : []
    );

    const getIcon = (type) => {
        if (type === 'verification') return ShieldCheck;
        if (type === 'check-in') return LogIn;
        if (type === 'pickup') return UserCheck;
        return FileText;
    };

    return (
        <section className="col-span-12 lg:col-span-4">
            <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm">
                <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-6">Audit Trail</h2>
                <div className="relative">
                    <div className="absolute left-5 top-0 bottom-0 w-px bg-slate-200 dark:bg-slate-700"></div>
                    <div className="space-y-6">
                        {loading && <p className="text-sm text-slate-400 pl-8">Loading events...</p>}
                        {!loading && events.length === 0 && <p className="text-sm text-slate-400 pl-8">No recent activity.</p>}
                        {events.map((event, i) => {
                            const Icon = getIcon(event.type);
                            return (
                                <div key={i} className="relative flex gap-4 pl-2">
                                    <div className="z-10 size-8 rounded-full flex items-center justify-center flex-shrink-0 bg-slate-100 dark:bg-slate-800 text-slate-600 ring-4 ring-white dark:ring-slate-900">
                                        <Icon className="w-4 h-4" />
                                    </div>
                                    <div className="flex-1 pb-6">
                                        <div className="flex items-center justify-between mb-1">
                                            <h4 className="text-sm font-bold text-slate-800 dark:text-slate-100">{event.title || event.type}</h4>
                                            <span className="text-[10px] text-slate-400 font-mono">
                                                {event.timestamp?.toDate ? event.timestamp.toDate().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : ''}
                                            </span>
                                        </div>
                                        <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">{event.description || event.detail}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};
