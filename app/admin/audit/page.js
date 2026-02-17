"use client";
import Link from 'next/link';
import { useState } from 'react';
import { ArrowLeft, Shield, Search, Download, Filter, Calendar, ChevronDown, Eye, Loader2 } from 'lucide-react';
import ProtectedRoute from '../../components/protectedRoute';
import { useRealtimeCollection } from '../../hooks/useFirestore';
import { LoadingSpinner, EmptyState, ErrorState } from '../../components/common/LoadingSpinner';
import { orderBy, limit } from 'firebase/firestore';

export default function AuditLogsPage() {
    const [searchQuery, setSearchQuery] = useState('');
    const { data: logs, loading, error } = useRealtimeCollection(
        'auditLogs',
        [orderBy('timestamp', 'desc'), limit(100)]
    );

    const filtered = logs.filter(log =>
        !searchQuery ||
        log.user?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        log.type?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        log.detail?.toLowerCase().includes(searchQuery.toLowerCase())
    );

    // Calculate stats from the last 100 logs
    const totalLogs = logs.length;
    const securityEvents = logs.filter(l => l.severity === 'danger').length;
    const verifications = logs.filter(l => l.type === 'verification').length;
    const systemEvents = logs.filter(l => l.type === 'system').length;

    const formatTime = (timestamp) => {
        if (!timestamp) return '';
        const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp);
        return date.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' });
    };

    const getSeverityStyles = (severity) => {
        switch (severity) {
            case 'success': return 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400';
            case 'danger': return 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400';
            case 'warning': return 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400';
            default: return 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400';
        }
    };

    return (
        <ProtectedRoute allowedRoles={['admin']}>
            <div className="bg-background-light dark:bg-background-dark min-h-screen text-slate-900 dark:text-slate-100 font-display">
                <header className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-6 py-3 lg:px-10 sticky top-0 z-10">
                    <div className="flex items-center gap-6">
                        <Link href="/admin" className="text-slate-500 hover:text-primary transition-colors"><ArrowLeft className="w-5 h-5" /></Link>
                        <div className="flex items-center gap-3 text-primary">
                            <Shield className="w-7 h-7 fill-current" />
                            <h2 className="text-lg font-bold">Audit Trails</h2>
                        </div>
                    </div>
                    <div className="flex items-center gap-3">
                        <button className="flex items-center gap-2 px-4 py-2 bg-slate-100 dark:bg-slate-800 rounded-lg text-sm font-bold"><Filter className="w-4 h-4" /> Filter</button>
                        <button className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg text-sm font-bold"><Download className="w-4 h-4" /> Export</button>
                    </div>
                </header>
                <main className="p-4 lg:p-10 max-w-7xl mx-auto space-y-8">
                    {/* Log Stats */}
                    <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
                        <div className="bg-white dark:bg-slate-900 p-5 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
                            <p className="text-xs font-bold text-slate-400 uppercase">Total Logs (Last 100)</p>
                            <p className="text-2xl font-black mt-1">{totalLogs}</p>
                        </div>
                        <div className="bg-white dark:bg-slate-900 p-5 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
                            <p className="text-xs font-bold text-slate-400 uppercase">Security Events</p>
                            <p className="text-2xl font-black mt-1 text-red-600">{securityEvents}</p>
                        </div>
                        <div className="bg-white dark:bg-slate-900 p-5 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
                            <p className="text-xs font-bold text-slate-400 uppercase">Verifications</p>
                            <p className="text-2xl font-black mt-1 text-green-600">{verifications}</p>
                        </div>
                        <div className="bg-white dark:bg-slate-900 p-5 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
                            <p className="text-xs font-bold text-slate-400 uppercase">System Events</p>
                            <p className="text-2xl font-black mt-1">{systemEvents}</p>
                        </div>
                    </div>
                    {/* Log Filters */}
                    <div className="flex gap-4 items-center">
                        <div className="relative flex-1">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
                            <input
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl pl-10 pr-4 py-3"
                                placeholder="Search logs..."
                            />
                        </div>
                        <button className="flex items-center gap-2 px-4 py-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl text-sm font-bold">
                            <Calendar className="w-4 h-4" /> Date Range <ChevronDown className="w-4 h-4" />
                        </button>
                    </div>
                    {/* Log Table */}
                    {loading ? (
                        <LoadingSpinner message="Loading audit logs..." />
                    ) : error ? (
                        <ErrorState message={error} />
                    ) : !filtered.length ? (
                        <EmptyState icon={Shield} title="No Logs Found" description="No audit logs match your search criteria." />
                    ) : (
                        <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
                            <table className="w-full text-left">
                                <thead className="bg-slate-50 dark:bg-slate-800/50 text-slate-500 text-[11px] uppercase tracking-wider">
                                    <tr>
                                        <th className="px-6 py-3 font-bold">Timestamp</th>
                                        <th className="px-6 py-3 font-bold">Event Type</th>
                                        <th className="px-6 py-3 font-bold">User</th>
                                        <th className="px-6 py-3 font-bold">Details</th>
                                        <th className="px-6 py-3 font-bold"></th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                                    {filtered.map((log) => (
                                        <tr key={log.id} className="text-sm hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
                                            <td className="px-6 py-4 font-mono text-xs">{formatTime(log.timestamp)}</td>
                                            <td className="px-6 py-4">
                                                <span className={`inline-flex px-2 py-0.5 rounded text-[10px] font-black uppercase ${getSeverityStyles(log.severity)}`}>
                                                    {log.type}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 text-slate-600 dark:text-slate-400">{log.user || 'System'}</td>
                                            <td className="px-6 py-4 text-slate-500">{log.detail || log.reason || log.description}</td>
                                            <td className="px-6 py-4"><button className="text-slate-400 hover:text-primary"><Eye className="w-4 h-4" /></button></td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}
                </main>
            </div>
        </ProtectedRoute>
    );
}
