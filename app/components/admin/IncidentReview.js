"use client";
import { AlertCircle, UserX, CameraOff, ShieldAlert } from 'lucide-react';
import Link from 'next/link';
import { useRealtimeCollection } from '../../hooks/useFirestore';
import { LoadingSpinner, EmptyState } from '../common/LoadingSpinner';
import { where, orderBy } from 'firebase/firestore';

export const IncidentReview = () => {
    const { data: incidents, loading } = useRealtimeCollection(
        'incidents',
        [where('status', '==', 'pending'), orderBy('timestamp', 'desc')]
    );

    const getIcon = (type) => {
        switch (type) {
            case 'unauthorized': return UserX;
            case 'mismatch': return CameraOff;
            default: return ShieldAlert;
        }
    };

    const getIconBg = (type) => {
        switch (type) {
            case 'unauthorized': return 'bg-red-100 dark:bg-red-900/30';
            case 'mismatch': return 'bg-amber-100 dark:bg-amber-900/30';
            default: return 'bg-slate-100 dark:bg-slate-800';
        }
    };

    const getIconColor = (type) => {
        switch (type) {
            case 'unauthorized': return 'text-red-600';
            case 'mismatch': return 'text-amber-600';
            default: return 'text-slate-600';
        }
    };

    const formatTime = (timestamp) => {
        if (!timestamp) return '';
        const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp);
        return date.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' });
    };

    return (
        <section className="bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden">
            <div className="p-5 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
                <h3 className="font-bold flex items-center gap-2">
                    <AlertCircle className="text-red-500 w-5 h-5" />
                    Active Incident Review
                    {incidents.length > 0 && (
                        <span className="bg-red-500 text-white text-[10px] px-1.5 py-0.5 rounded-full font-bold">{incidents.length}</span>
                    )}
                </h3>
                <Link href="/admin/alerts" className="text-primary text-sm font-semibold hover:underline">View All Alerts</Link>
            </div>

            {loading ? (
                <div className="p-8"><LoadingSpinner size="sm" message="Loading incidents..." /></div>
            ) : !incidents.length ? (
                <EmptyState icon={AlertCircle} title="No Active Incidents" description="All clear — no pending incidents to review." />
            ) : (
                <div className="divide-y divide-slate-100 dark:divide-slate-800">
                    {incidents.map((incident) => {
                        const Icon = getIcon(incident.type);
                        return (
                            <div key={incident.id} className="p-5 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                                <div className="flex items-start gap-4">
                                    <div className={`w-12 h-12 rounded-lg ${getIconBg(incident.type)} flex items-center justify-center flex-shrink-0`}>
                                        <Icon className={`${getIconColor(incident.type)} w-6 h-6`} />
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex items-center justify-between">
                                            <h4 className="font-bold text-slate-800 dark:text-slate-100">{incident.title}</h4>
                                            <span className="text-xs text-slate-500">{formatTime(incident.timestamp)}</span>
                                        </div>
                                        <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">{incident.description}</p>
                                        <div className="mt-4 flex items-center gap-3">
                                            <button className="bg-primary text-white text-xs px-4 py-1.5 rounded-lg font-bold shadow-sm">Review Protocol</button>
                                            <button className="border border-slate-200 dark:border-slate-700 text-xs px-4 py-1.5 rounded-lg font-bold">Contact Security</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            )}
        </section>
    );
};
