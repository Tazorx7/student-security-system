"use client";
import { useState } from 'react';
import { AdminSidebar } from '../../components/admin/AdminSidebar';
import { PrincipalHeader } from '../../components/admin/PrincipalHeader';
import { Search, Filter, ChevronRight, Shield, ShieldCheck } from 'lucide-react';
import ProtectedRoute from '../../components/protectedRoute';
import { useCollection } from '../../hooks/useFirestore';
import { LoadingSpinner, EmptyState, ErrorState } from '../../components/common/LoadingSpinner';

export default function GuardianDatabasePage() {
    const [searchQuery, setSearchQuery] = useState('');
    const { data: guardians, loading, error, refetch } = useCollection('guardians');

    const filtered = guardians.filter(g =>
        !searchQuery ||
        g.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        g.students?.some(s => s.toLowerCase().includes(searchQuery.toLowerCase()))
    );

    return (
        <ProtectedRoute allowedRoles={['admin']}>
            <div className="flex h-screen bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 font-display">
                <AdminSidebar />
                <div className="flex-1 flex flex-col overflow-hidden">
                    <PrincipalHeader />
                    <main className="flex-1 overflow-y-auto p-8 space-y-8">
                        <div className="flex items-center justify-between">
                            <div>
                                <h1 className="text-2xl font-bold">Guardian Database</h1>
                                <p className="text-sm text-slate-500">Manage and verify all guardians across enrollment.</p>
                            </div>
                            <button className="bg-primary text-white px-4 py-2 rounded-lg text-sm font-bold flex items-center gap-2">
                                <Shield className="w-4 h-4" /> Add Guardian
                            </button>
                        </div>
                        <div className="flex gap-4">
                            <div className="relative flex-1">
                                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
                                <input
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl pl-10 pr-4 py-3"
                                    placeholder="Search guardians..."
                                />
                            </div>
                            <button className="flex items-center gap-2 px-4 py-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl text-sm font-bold">
                                <Filter className="w-4 h-4" /> Filter
                            </button>
                        </div>

                        {loading ? (
                            <LoadingSpinner message="Loading guardian database..." />
                        ) : error ? (
                            <ErrorState message={error} onRetry={refetch} />
                        ) : !filtered.length ? (
                            <EmptyState icon={Shield} title="No Guardians Found" description="No guardians match your search." />
                        ) : (
                            <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
                                <table className="w-full text-left">
                                    <thead className="bg-slate-50 dark:bg-slate-800/50 text-slate-500 text-[11px] uppercase tracking-wider">
                                        <tr>
                                            <th className="px-6 py-3 font-bold">Guardian</th>
                                            <th className="px-6 py-3 font-bold">Relation</th>
                                            <th className="px-6 py-3 font-bold">Student(s)</th>
                                            <th className="px-6 py-3 font-bold">Status</th>
                                            <th className="px-6 py-3 font-bold">Last Visit</th>
                                            <th className="px-6 py-3 font-bold"></th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                                        {filtered.map((g) => (
                                            <tr key={g.id} className="text-sm hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
                                                <td className="px-6 py-4 font-semibold">{g.name}</td>
                                                <td className="px-6 py-4 text-slate-500">{g.relation}</td>
                                                <td className="px-6 py-4">
                                                    {Array.isArray(g.students) ? g.students.join(', ') : g.studentName || '-'}
                                                </td>
                                                <td className="px-6 py-4">
                                                    <span className={`inline-flex px-2 py-0.5 rounded text-[10px] font-black uppercase ${g.verified ? 'bg-green-100 text-green-700 dark:bg-green-900/30' : 'bg-amber-100 text-amber-700 dark:bg-amber-900/30'}`}>
                                                        {g.verified ? 'Verified' : 'Pending'}
                                                    </span>
                                                </td>
                                                <td className="px-6 py-4 text-slate-500 text-xs">
                                                    {g.lastVisit ? new Date(g.lastVisit.seconds * 1000).toLocaleDateString() : 'Never'}
                                                </td>
                                                <td className="px-6 py-4"><button className="text-slate-400 hover:text-primary"><ChevronRight className="w-4 h-4" /></button></td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        )}
                    </main>
                </div>
            </div>
        </ProtectedRoute>
    );
}
