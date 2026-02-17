"use client";
import { Clock, UserCheck, Users } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { useCollection } from '../../hooks/useFirestore';
import { LoadingSpinner, EmptyState, ErrorState } from '../common/LoadingSpinner';
import { where } from 'firebase/firestore';

export const ChildrenGrid = () => {
    const { user } = useAuth();
    const { data: children, loading, error, refetch } = useCollection(
        user ? 'students' : null,
        user ? [where('parentIds', 'array-contains', user.uid)] : []
    );

    if (loading) return <LoadingSpinner message="Loading children..." />;
    if (error) return <ErrorState message={error} onRetry={refetch} />;
    if (!children.length) return (
        <EmptyState
            icon={Users}
            title="No Children Linked"
            description="Your children will appear here once they are registered in the system."
        />
    );

    return (
        <section className="max-w-5xl mx-auto">
            <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold">Your Children</h3>
                <button className="text-primary text-sm font-semibold hover:underline">Manage All</button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {children.map((child) => {
                    const initials = child.name
                        ? child.name.split(' ').map(n => n[0]).join('').toUpperCase()
                        : '??';
                    const atSchool = child.status === 'at_school';

                    return (
                        <div key={child.id} className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm flex gap-6">
                            <div className="relative shrink-0">
                                <div className="size-24 rounded-full bg-slate-200 flex items-center justify-center text-slate-400 text-2xl font-bold">{initials}</div>
                                <span className={`absolute bottom-1 right-1 size-5 ${atSchool ? 'bg-blue-500' : 'bg-slate-400'} border-4 border-white dark:border-slate-900 rounded-full`}></span>
                            </div>
                            <div className="flex-1 flex flex-col justify-between">
                                <div>
                                    <h4 className="text-lg font-bold">{child.name}</h4>
                                    <div className="mt-1 flex items-center gap-2">
                                        <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-bold ${atSchool
                                            ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400'
                                            : 'bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400'
                                            }`}>
                                            {atSchool ? 'AT SCHOOL' : 'PICKED UP'}
                                        </span>
                                        <span className="text-[11px] text-slate-400 font-medium italic">
                                            {child.room || ''} • {child.grade || ''}
                                        </span>
                                    </div>
                                </div>
                                <div className="mt-4 flex items-center justify-between text-xs text-slate-500">
                                    <div className="flex items-center gap-1">
                                        {atSchool ? <Clock className="w-4 h-4" /> : <UserCheck className="w-4 h-4" />}
                                        {child.lastEvent || 'No recent activity'}
                                    </div>
                                    <button className="text-primary font-bold hover:underline">Details</button>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};
