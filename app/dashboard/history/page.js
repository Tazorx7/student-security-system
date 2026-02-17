"use client";
import { useState } from 'react';
import { Sidebar } from '../../components/dashboard/Sidebar';
import { DashboardHeader } from '../../components/dashboard/DashboardHeader';
import ProtectedRoute from '../../components/protectedRoute';
import { useAuth } from '../../context/AuthContext';
import { useCollection } from '../../hooks/useFirestore';
import { LoadingSpinner, EmptyState, ErrorState } from '../../components/common/LoadingSpinner';
import { History, Search, Filter, Download, ChevronDown, Car, User, Bus } from 'lucide-react';
import { where, orderBy, limit } from 'firebase/firestore';

export default function HistoryPage() {
    const { user } = useAuth();
    const [searchQuery, setSearchQuery] = useState('');
    const [filterType, setFilterType] = useState('all');

    const { data: events, loading, error, refetch } = useCollection(
        user ? 'pickupEvents' : null,
        user ? [where('parentId', '==', user.uid), orderBy('timestamp', 'desc'), limit(50)] : []
    );

    const filtered = events.filter(ev => {
        const matchesSearch = !searchQuery || (ev.studentName?.toLowerCase().includes(searchQuery.toLowerCase()) || ev.pickedUpBy?.toLowerCase().includes(searchQuery.toLowerCase()));
        const matchesType = filterType === 'all' || ev.type === filterType;
        return matchesSearch && matchesType;
    });

    const getIcon = (type) => {
        switch (type) {
            case 'pickup': return Car;
            case 'bus': return Bus;
            default: return User;
        }
    };

    const formatDate = (timestamp) => {
        if (!timestamp) return '';
        const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp);
        return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
    };

    const formatTime = (timestamp) => {
        if (!timestamp) return '';
        const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp);
        return date.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' });
    };

    return (
        <ProtectedRoute>
            <div className="flex h-screen bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 font-display">
                <Sidebar />
                <div className="flex-1 flex flex-col overflow-hidden">
                    <DashboardHeader />
                    <main className="flex-1 overflow-y-auto p-6 lg:p-10 space-y-6">
                        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                            <h2 className="text-2xl font-black">Pickup History</h2>
                            <button className="flex items-center gap-2 text-sm font-bold text-primary hover:underline">
                                <Download className="w-4 h-4" /> Export Log
                            </button>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-3">
                            <div className="relative flex-1">
                                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                                <input
                                    type="text"
                                    aria-label="Search pickup history"
                                    placeholder="Search by student or guardian..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="w-full pl-10 pr-4 py-2.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg text-sm"
                                />
                            </div>
                            <select
                                value={filterType}
                                onChange={(e) => setFilterType(e.target.value)}
                                className="px-4 py-2.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg text-sm font-medium"
                            >
                                <option value="all">All Types</option>
                                <option value="pickup">Pickup</option>
                                <option value="bus">Bus</option>
                                <option value="dismissal">Dismissal</option>
                            </select>
                        </div>

                        {loading ? (
                            <LoadingSpinner message="Loading history..." />
                        ) : error ? (
                            <ErrorState message={error} onRetry={refetch} />
                        ) : !filtered.length ? (
                            <EmptyState icon={History} title="No History Found" description="No pickup events match your search." />
                        ) : (
                            <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
                                <table className="w-full text-left">
                                    <thead className="bg-slate-50 dark:bg-slate-800/50 text-[11px] uppercase tracking-wider text-slate-500">
                                        <tr>
                                            <th className="px-6 py-3 font-bold">Event</th>
                                            <th className="px-6 py-3 font-bold">Student</th>
                                            <th className="px-6 py-3 font-bold">By</th>
                                            <th className="px-6 py-3 font-bold">Location</th>
                                            <th className="px-6 py-3 font-bold">Date</th>
                                            <th className="px-6 py-3 font-bold">Time</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                                        {filtered.map((ev) => {
                                            const Icon = getIcon(ev.type);
                                            return (
                                                <tr key={ev.id} className="text-sm hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                                                    <td className="px-6 py-4">
                                                        <div className="flex items-center gap-2">
                                                            <Icon className="w-4 h-4 text-primary" />
                                                            <span className="font-medium capitalize">{ev.type || 'event'}</span>
                                                        </div>
                                                    </td>
                                                    <td className="px-6 py-4 font-semibold">{ev.studentName}</td>
                                                    <td className="px-6 py-4 text-slate-500">{ev.pickedUpBy}</td>
                                                    <td className="px-6 py-4 text-slate-500">{ev.location}</td>
                                                    <td className="px-6 py-4 text-slate-500">{formatDate(ev.timestamp)}</td>
                                                    <td className="px-6 py-4 text-slate-500">{formatTime(ev.timestamp)}</td>
                                                </tr>
                                            );
                                        })}
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
