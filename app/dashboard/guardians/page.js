"use client";
import { useState } from 'react';
import { Sidebar } from '../../components/dashboard/Sidebar';
import { DashboardHeader } from '../../components/dashboard/DashboardHeader';
import ProtectedRoute from '../../components/protectedRoute';
import { useAuth } from '../../context/AuthContext';
import { useCollection } from '../../hooks/useFirestore';
import { LoadingSpinner, EmptyState, ErrorState } from '../../components/common/LoadingSpinner';
import { UserCheck, Search, Plus, Shield, ShieldCheck } from 'lucide-react';
import { where } from 'firebase/firestore';

export default function GuardiansPage() {
    const { user } = useAuth();
    const [searchQuery, setSearchQuery] = useState('');

    const { data: guardians, loading, error, refetch } = useCollection(
        user ? 'guardians' : null,
        user ? [where('parentId', '==', user.uid)] : []
    );

    const filtered = guardians.filter(g =>
        !searchQuery || g.name?.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <ProtectedRoute>
            <div className="flex h-screen bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 font-display">
                <Sidebar />
                <div className="flex-1 flex flex-col overflow-hidden">
                    <DashboardHeader />
                    <main className="flex-1 overflow-y-auto p-6 lg:p-10 space-y-6">
                        <div className="flex items-center justify-between">
                            <h2 className="text-2xl font-black">Authorized Guardians</h2>
                            <button className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-primary/90">
                                <Plus className="w-4 h-4" /> Add Guardian
                            </button>
                        </div>
                        <div className="relative max-w-md">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                            <input
                                type="text"
                                placeholder="Search guardians..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-10 pr-4 py-2.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg text-sm"
                            />
                        </div>

                        {loading ? (
                            <LoadingSpinner message="Loading guardians..." />
                        ) : error ? (
                            <ErrorState message={error} onRetry={refetch} />
                        ) : !filtered.length ? (
                            <EmptyState icon={UserCheck} title="No Guardians Found" description="Add authorized guardians who can pick up your children." />
                        ) : (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {filtered.map((guardian) => {
                                    const initials = guardian.name ? guardian.name.split(' ').map(n => n[0]).join('').toUpperCase() : '?';
                                    return (
                                        <div key={guardian.id} className="bg-white dark:bg-slate-900 p-5 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm flex gap-4">
                                            <div className="size-14 rounded-full bg-primary/10 flex items-center justify-center text-primary text-lg font-bold">{initials}</div>
                                            <div className="flex-1">
                                                <div className="flex items-start justify-between">
                                                    <div>
                                                        <h4 className="font-bold">{guardian.name}</h4>
                                                        <p className="text-sm text-slate-500">{guardian.relation || 'Guardian'}</p>
                                                    </div>
                                                    <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded text-xs font-bold ${guardian.verified
                                                        ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400'
                                                        : 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400'}`}>
                                                        {guardian.verified ? <ShieldCheck className="w-3 h-3" /> : <Shield className="w-3 h-3" />}
                                                        {guardian.verified ? 'Verified' : 'Pending'}
                                                    </span>
                                                </div>
                                                <div className="mt-2 text-sm text-slate-500 space-y-1">
                                                    {guardian.phone && <p>{guardian.phone}</p>}
                                                    {guardian.permissions && <p className="text-xs">Permissions: {guardian.permissions.join(', ')}</p>}
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        )}
                    </main>
                </div>
            </div>
        </ProtectedRoute>
    );
}
