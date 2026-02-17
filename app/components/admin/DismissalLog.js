"use client";
import { List } from 'lucide-react';
import { useRealtimeCollection } from '../../hooks/useFirestore';
import { LoadingSpinner, EmptyState, ErrorState } from '../common/LoadingSpinner';
import { orderBy, limit } from 'firebase/firestore';

export const DismissalLog = () => {
    const { data: logs, loading, error, } = useRealtimeCollection(
        'dismissalLog',
        [orderBy('timestamp', 'desc'), limit(10)]
    );

    const formatTime = (timestamp) => {
        if (!timestamp) return '';
        const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp);
        return date.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' });
    };

    const statusBadge = (status) => {
        const styles = {
            verified: 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400',
            pending: 'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400',
            flagged: 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400',
        };
        return styles[status] || styles.pending;
    };

    return (
        <section className="bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800">
            <div className="p-5 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
                <h3 className="font-bold flex items-center gap-2">
                    <List className="text-slate-400 w-5 h-5" />
                    Real-Time Dismissal Log
                </h3>
                <div className="flex items-center gap-2">
                    <span className="size-2 rounded-full bg-green-500 animate-pulse"></span>
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-tighter">Live</span>
                </div>
            </div>

            {loading ? (
                <div className="p-8"><LoadingSpinner size="sm" message="Loading dismissal log..." /></div>
            ) : error ? (
                <div className="p-4"><ErrorState message={error} /></div>
            ) : !logs.length ? (
                <EmptyState icon={List} title="No Dismissals Yet" description="Dismissal events will appear here in real-time." />
            ) : (
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead className="bg-slate-50 dark:bg-slate-800/50 text-slate-500 text-[11px] uppercase tracking-wider">
                            <tr>
                                <th className="px-6 py-3 font-bold">Student</th>
                                <th className="px-6 py-3 font-bold">Guardian</th>
                                <th className="px-6 py-3 font-bold">Status</th>
                                <th className="px-6 py-3 font-bold">Location</th>
                                <th className="px-6 py-3 font-bold">Time</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                            {logs.map((log) => (
                                <tr key={log.id} className="text-sm">
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center text-xs font-bold text-slate-500">
                                                {log.studentName ? log.studentName.split(' ').map(n => n[0]).join('') : '?'}
                                            </div>
                                            <span className="font-semibold">{log.studentName}</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">{log.guardianName}</td>
                                    <td className="px-6 py-4">
                                        <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${statusBadge(log.status)}`}>
                                            {log.status ? log.status.charAt(0).toUpperCase() + log.status.slice(1) : 'Pending'}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-slate-500">{log.location}</td>
                                    <td className="px-6 py-4 text-slate-500">{formatTime(log.timestamp)}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </section>
    );
};
