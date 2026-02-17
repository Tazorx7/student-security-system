"use client";
import { History, CheckCircle } from 'lucide-react';
import Link from 'next/link';
import { useCollection } from '../../hooks/useFirestore';
import { LoadingSpinner, EmptyState, ErrorState } from '../common/LoadingSpinner';
import { where, orderBy, limit } from 'firebase/firestore';

export const RecentApprovals = () => {
    const { data: approvals, loading, error, refetch } = useCollection(
        'verifications',
        [where('status', '==', 'approved'), orderBy('verifiedAt', 'desc'), limit(10)]
    );

    const formatTime = (timestamp) => {
        if (!timestamp) return '';
        const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp);
        return date.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' });
    };

    return (
        <div className="mt-8">
            <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-bold text-slate-500 uppercase tracking-widest flex items-center gap-2">
                    <History className="w-4 h-4" /> Recent Approvals
                </h3>
                <Link href="/staff/history" className="text-primary text-xs font-bold hover:underline">View All</Link>
            </div>

            {loading ? (
                <div className="p-6"><LoadingSpinner size="sm" message="Loading approvals..." /></div>
            ) : error ? (
                <ErrorState message={error} onRetry={refetch} />
            ) : !approvals.length ? (
                <EmptyState icon={CheckCircle} title="No Approvals Yet" description="Approved verifications will appear here." />
            ) : (
                <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm bg-white dark:bg-slate-900">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-slate-50 dark:bg-slate-800/50">
                                <th className="px-6 py-3 text-xs font-black text-slate-500 uppercase">Student</th>
                                <th className="px-6 py-3 text-xs font-black text-slate-500 uppercase">Guardian</th>
                                <th className="px-6 py-3 text-xs font-black text-slate-500 uppercase">Time</th>
                                <th className="px-6 py-3 text-xs font-black text-slate-500 uppercase text-right">Status</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                            {approvals.map((approval) => {
                                const initials = approval.studentName
                                    ? approval.studentName.split(' ').map(n => n[0]).join('').toUpperCase()
                                    : '?';
                                return (
                                    <tr key={approval.id}>
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-3">
                                                <div className="h-8 w-8 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center text-xs font-bold text-slate-500">{initials}</div>
                                                <span className="text-sm font-bold text-slate-800 dark:text-slate-100">{approval.studentName}</span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400">
                                            {approval.guardianName}{approval.guardianRelation ? ` (${approval.guardianRelation})` : ''}
                                        </td>
                                        <td className="px-6 py-4 text-sm text-slate-500">{formatTime(approval.verifiedAt)}</td>
                                        <td className="px-6 py-4 text-right">
                                            <span className="inline-flex px-2 py-1 rounded text-[10px] font-black bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400">APPROVED</span>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};
