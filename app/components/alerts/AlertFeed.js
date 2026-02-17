"use client";
import { AlertOctagon, CheckCircle, LogIn, MoreVertical, ChevronDown, ShieldAlert, Info } from 'lucide-react';
import { useRealtimeCollection } from '../../hooks/useFirestore';
import { LoadingSpinner, EmptyState, ErrorState } from '../common/LoadingSpinner';
import { orderBy, limit } from 'firebase/firestore';

export const AlertFeed = () => {
    const { data: alerts, loading, error } = useRealtimeCollection(
        'auditLogs',
        [orderBy('timestamp', 'desc'), limit(20)]
    );

    const getIcon = (type, severity) => {
        if (severity === 'danger') return AlertOctagon;
        if (type === 'verification') return CheckCircle;
        if (type === 'check-in') return LogIn;
        return Info;
    };

    const getStyles = (type, severity) => {
        if (severity === 'danger') return {
            bg: 'bg-red-50 dark:bg-red-950/30',
            border: 'border-red-600',
            iconBg: 'bg-red-600',
            text: 'text-red-900 dark:text-red-100',
            badge: 'bg-red-600 text-white'
        };
        if (type === 'verification') return {
            bg: 'bg-white dark:bg-slate-900',
            border: 'border-green-500',
            iconBg: 'bg-green-500',
            text: 'text-slate-900 dark:text-white',
            badge: 'bg-green-100 text-green-700'
        };
        return {
            bg: 'bg-white dark:bg-slate-900',
            border: 'border-primary',
            iconBg: 'bg-primary',
            text: 'text-slate-900 dark:text-white',
            badge: 'bg-primary/10 text-primary'
        };
    };

    const formatTime = (timestamp) => {
        if (!timestamp) return '';
        const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp);
        return date.toLocaleTimeString('en-US', { hour12: false });
    };

    if (loading) return <LoadingSpinner message="Loading live alerts..." />;
    if (error) return <ErrorState message={error} />;
    if (!alerts.length) return <EmptyState icon={ShieldAlert} title="No Recent Alerts" description="System is quiet." />;

    return (
        <div className="flex flex-col gap-4">
            {alerts.map(alert => {
                const styles = getStyles(alert.type, alert.severity);
                const Icon = getIcon(alert.type, alert.severity);

                return (
                    <div key={alert.id} className={`flex flex-col md:flex-row items-start md:items-center gap-4 p-5 rounded-xl border-l-4 shadow-sm transition-all hover:shadow-md ${styles.bg} ${styles.border} border border-slate-200 dark:border-slate-800`}>
                        <div className={`flex-shrink-0 flex items-center justify-center rounded-xl text-white size-14 shadow-sm ${styles.iconBg}`}>
                            <Icon className="w-8 h-8" />
                        </div>
                        <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 mb-1">
                                <span className={`text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded ${styles.badge}`}>
                                    {alert.type || 'System'}
                                </span>
                                <span className="text-slate-500 dark:text-slate-400 text-xs">
                                    {formatTime(alert.timestamp)} • {alert.location || 'Main Campus'}
                                </span>
                            </div>
                            <h3 className={`text-lg font-bold leading-none mb-1 ${styles.text}`}>
                                {alert.title || alert.type}
                            </h3>
                            <p className="text-slate-600 dark:text-slate-400 text-sm">
                                {alert.description || alert.detail}
                            </p>
                        </div>
                        <div className="w-full md:w-auto mt-4 md:mt-0">
                            <button className="w-full md:w-auto px-5 py-2.5 bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white rounded-lg text-sm font-bold hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
                                View Details
                            </button>
                        </div>
                    </div>
                );
            })}

            <div className="py-8 flex justify-center">
                <button className="flex items-center gap-2 px-8 py-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl text-sm font-bold text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all shadow-sm">
                    <ChevronDown className="w-5 h-5" /> Load Previous Notifications
                </button>
            </div>
        </div>
    );
};
