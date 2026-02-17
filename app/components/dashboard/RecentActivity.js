"use client";
import { MoreHorizontal, Car, User, Bus, History } from 'lucide-react';
import Link from 'next/link';
import { useAuth } from '../../context/AuthContext';
import { useCollection } from '../../hooks/useFirestore';
import { LoadingSpinner, EmptyState, ErrorState } from '../common/LoadingSpinner';
import { where, orderBy, limit } from 'firebase/firestore';

export const RecentActivity = () => {
    const { user } = useAuth();
    const { data: events, loading, error, refetch } = useCollection(
        user ? 'pickupEvents' : null,
        user ? [where('parentId', '==', user.uid), orderBy('timestamp', 'desc'), limit(10)] : []
    );

    const getIcon = (type) => {
        switch (type) {
            case 'pickup': return Car;
            case 'bus': return Bus;
            default: return User;
        }
    };

    const formatTime = (timestamp) => {
        if (!timestamp) return '';
        const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp);
        return date.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' });
    };

    const formatDate = (timestamp) => {
        if (!timestamp) return '';
        const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp);
        const now = new Date();
        const diff = Math.floor((now - date) / (1000 * 60 * 60 * 24));
        if (diff === 0) return 'Today';
        if (diff === 1) return 'Yesterday';
        return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
    };

    return (
        <div className="lg:col-span-2 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
            <div className="px-6 py-4 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
                <h3 className="font-bold">Recent Pickup Events</h3>
                <MoreHorizontal className="text-slate-400 w-5 h-5 cursor-pointer" />
            </div>

            {loading ? (
                <div className="p-8"><LoadingSpinner size="sm" message="Loading activity..." /></div>
            ) : error ? (
                <div className="p-4"><ErrorState message={error} onRetry={refetch} /></div>
            ) : !events.length ? (
                <EmptyState icon={History} title="No Activity Yet" description="Pickup events will appear here." />
            ) : (
                <div className="divide-y divide-slate-100 dark:divide-slate-800">
                    {events.map((event) => {
                        const Icon = getIcon(event.type);
                        return (
                            <div key={event.id} className="px-6 py-4 flex items-center justify-between hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                                <div className="flex items-center gap-4">
                                    <div className="size-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                        <Icon className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-bold">{event.description || event.studentName}</p>
                                        <p className="text-xs text-slate-500">{event.location || ''} • {event.pickedUpBy || ''}</p>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <p className="text-sm font-medium">{formatTime(event.timestamp)}</p>
                                    <p className="text-[10px] text-slate-400 uppercase tracking-tighter">{formatDate(event.timestamp)}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            )}

            <Link href="/dashboard/history" className="block w-full py-3 bg-slate-50 dark:bg-slate-800/50 text-xs font-bold text-primary hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors uppercase text-center">
                View All History
            </Link>
        </div>
    );
};
