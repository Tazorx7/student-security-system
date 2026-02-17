"use client";
import { Users, CheckCircle, Hourglass, AlertTriangle } from 'lucide-react';
import { useCollection } from '../../hooks/useFirestore';
import { useRealtimeCollection } from '../../hooks/useFirestore';
import { SkeletonBlock } from '../common/LoadingSpinner';
import { where } from 'firebase/firestore';

export const QuickStats = () => {
    const { data: students, loading: loadingStudents } = useCollection('students');
    const { data: incidents } = useRealtimeCollection('incidents', [where('status', '==', 'pending')]);
    const { data: pickedUp } = useCollection('pickupEvents');

    const totalStudents = students.length || 0;
    const pickedUpCount = pickedUp.length || 0;
    const pickedUpPct = totalStudents > 0 ? Math.round((pickedUpCount / totalStudents) * 100) : 0;
    const pendingRelease = totalStudents - pickedUpCount;

    const stats = [
        {
            label: 'Total Students', value: totalStudents.toLocaleString(), sub: 'Enrollment',
            icon: Users, iconColor: 'text-primary', border: false
        },
        {
            label: 'Picked Up', value: `${pickedUpPct}%`, sub: pickedUpPct > 80 ? '+▲ above avg' : '',
            icon: CheckCircle, iconColor: 'text-green-500', border: false, valueColor: 'text-green-600 dark:text-green-500',
            bar: pickedUpPct
        },
        {
            label: 'Pending Release', value: pendingRelease.toLocaleString(), sub: 'In Classrooms',
            icon: Hourglass, iconColor: 'text-amber-500', border: false, valueColor: 'text-amber-600 dark:text-amber-500'
        },
        {
            label: 'Flagged Incidents', value: incidents.length.toString(), sub: 'Needs Review',
            icon: AlertTriangle, iconColor: 'text-red-500', border: true, valueColor: 'text-red-600',
            subColor: 'text-red-500'
        },
    ];

    if (loadingStudents) {
        return (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[1, 2, 3, 4].map(i => (
                    <div key={i} className="bg-white dark:bg-slate-900 p-6 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 space-y-4">
                        <SkeletonBlock className="h-4 w-2/3" />
                        <SkeletonBlock className="h-8 w-1/2" />
                    </div>
                ))}
            </div>
        );
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, i) => {
                const Icon = stat.icon;
                return (
                    <div key={i} className={`bg-white dark:bg-slate-900 p-6 rounded-xl shadow-sm border ${stat.border
                        ? 'border-red-200 dark:border-red-900/30 ring-4 ring-red-50 dark:ring-red-900/10'
                        : 'border-slate-200 dark:border-slate-800'}`}>
                        <div className="flex items-center justify-between mb-4">
                            <span className="text-slate-500 text-sm font-medium uppercase tracking-wider">{stat.label}</span>
                            <Icon className={`${stat.iconColor} w-6 h-6`} />
                        </div>
                        <div className="flex items-baseline gap-2">
                            <span className={`text-3xl font-bold ${stat.valueColor || ''}`}>{stat.value}</span>
                            {stat.sub && <span className={`text-xs font-medium ${stat.subColor || 'text-slate-400'}`}>{stat.sub}</span>}
                        </div>
                        {stat.bar !== undefined && (
                            <div className="mt-3 w-full bg-slate-100 dark:bg-slate-800 rounded-full h-1.5">
                                <div className="bg-green-500 h-1.5 rounded-full transition-all" style={{ width: `${stat.bar}%` }}></div>
                            </div>
                        )}
                    </div>
                );
            })}
        </div>
    );
};
