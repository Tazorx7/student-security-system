"use client";
import { useState } from 'react';
import { StaffHeader } from '../../components/staff/StaffHeader';
import { Search, Users, ShieldAlert, CheckCircle, Clock, ChevronRight, Phone } from 'lucide-react';
import ProtectedRoute from '../../components/protectedRoute';
import { useCollection } from '../../hooks/useFirestore';
import { LoadingSpinner, EmptyState, ErrorState } from '../../components/common/LoadingSpinner';

export default function StudentRosterPage() {
    const [searchQuery, setSearchQuery] = useState('');
    const { data: students, loading, error, refetch } = useCollection('students');

    const filtered = students.filter(s =>
        !searchQuery || s.name?.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const totalStudents = students.length;
    const presentStudents = students.filter(s => s.status === 'at_school').length;

    const formatTime = (timestamp) => {
        if (!timestamp) return 'N/A';
        const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp);
        return date.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' });
    };

    return (
        <ProtectedRoute allowedRoles={['staff', 'admin']}>
            <div className="bg-background-light dark:bg-background-dark min-h-screen text-slate-900 dark:text-slate-100 font-display flex flex-col">
                <StaffHeader />
                <main className="p-4 lg:p-10 max-w-7xl mx-auto w-full space-y-8">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div>
                            <h1 className="text-3xl font-black tracking-tight flex items-center gap-3">
                                Student Roster
                                <span className="bg-primary/10 text-primary text-[10px] px-2 py-1 rounded-full uppercase tracking-widest font-black">All Students</span>
                            </h1>
                            <p className="text-slate-500 dark:text-slate-400">Live attendance and dismissal tracking.</p>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="text-right">
                                <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Students Today</p>
                                <p className="text-lg font-black">{presentStudents} / {totalStudents} <span className="text-xs font-medium text-slate-500">Present</span></p>
                            </div>
                            <div className="h-10 w-px bg-slate-200 dark:bg-slate-700"></div>
                            <button className="size-10 flex items-center justify-center rounded-xl bg-primary text-white shadow-lg shadow-primary/20">
                                <Users className="w-5 h-5" />
                            </button>
                        </div>
                    </div>
                    <div className="bg-white dark:bg-slate-900 p-2 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm flex items-center">
                        <div className="flex-1 relative">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                            <input
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full bg-transparent border-none rounded-xl pl-12 pr-4 py-4 focus:ring-0 text-lg"
                                placeholder="Quick search by student name..."
                            />
                        </div>
                    </div>

                    {loading ? (
                        <LoadingSpinner message="Loading roster..." />
                    ) : error ? (
                        <ErrorState message={error} onRetry={refetch} />
                    ) : !filtered.length ? (
                        <EmptyState icon={Users} title="No Students Found" description="Try a different search query." />
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
                            {filtered.map((student) => {
                                const atSchool = student.status === 'at_school';
                                return (
                                    <div key={student.id} className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm flex items-center gap-6 group hover:border-primary/50 transition-all">
                                        <div className="relative shrink-0">
                                            <div className="size-20 rounded-2xl bg-slate-100 dark:bg-slate-800 bg-center bg-cover border-2 border-white dark:border-slate-700 shadow-sm flex items-center justify-center text-xl font-bold text-slate-400">
                                                {student.name ? student.name.split(' ').map(n => n[0]).join('') : '?'}
                                            </div>
                                            {student.flag && (
                                                <div className="absolute -top-2 -right-2 size-6 bg-red-500 rounded-full flex items-center justify-center text-white ring-4 ring-white dark:ring-slate-900">
                                                    <ShieldAlert className="w-4 h-4" />
                                                </div>
                                            )}
                                        </div>
                                        <div className="flex-1 space-y-2">
                                            <div className="flex items-start justify-between">
                                                <div>
                                                    <h3 className="text-xl font-black group-hover:text-primary transition-colors">{student.name}</h3>
                                                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">{student.grade} &bull; {student.room}</p>
                                                </div>
                                                <span className={`inline-flex px-2 py-0.5 rounded text-[10px] font-black uppercase tracking-widest ${atSchool ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30' : 'bg-green-100 text-green-700 dark:bg-green-900/30'}`}>
                                                    {atSchool ? 'At School' : 'Picked Up'}
                                                </span>
                                            </div>
                                            <div className="flex items-center justify-between pt-2 border-t border-slate-50 dark:border-slate-800">
                                                <div className="flex items-center gap-4">
                                                    <div className="flex items-center gap-1 text-[11px] font-medium text-slate-400">
                                                        <Clock className="w-3 h-3" /> Last: {formatTime(student.lastEvent)}
                                                    </div>
                                                    <div className="flex items-center gap-1 text-[11px] font-medium text-slate-400">
                                                        <CheckCircle className="w-3 h-3" /> {student.verified ? 'Verified' : 'Pending'}
                                                    </div>
                                                </div>
                                                <div className="flex gap-2">
                                                    <button className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg text-slate-400 transition-colors"><Phone className="w-4 h-4" /></button>
                                                    <button className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg text-slate-400 transition-colors"><ChevronRight className="w-4 h-4" /></button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    )}
                </main>
            </div>
        </ProtectedRoute>
    );
}
