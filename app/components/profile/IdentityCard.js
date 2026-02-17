"use client";
import { AlertTriangle, UserCheck, PhoneCall, BadgeCheck } from 'lucide-react';

export const IdentityCard = ({ student }) => {
    if (!student) return null;

    const initials = student.name ? student.name.split(' ').map(n => n[0]).join('') : '??';

    return (
        <aside className="col-span-12 lg:col-span-3 flex flex-col gap-6">
            <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm overflow-hidden">
                <div className="relative mb-6">
                    <div className="aspect-square w-full rounded-lg bg-slate-200 dark:bg-slate-700 flex items-center justify-center text-4xl font-bold text-slate-400 border-4 border-slate-50 dark:border-slate-800 shadow-md">
                        {initials}
                    </div>
                    {student.status === 'at_school' && (
                        <div className="absolute bottom-2 right-2 bg-green-500 text-white text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider">Checked In</div>
                    )}
                </div>
                <div className="space-y-4">
                    <div>
                        <h1 className="text-2xl font-bold text-slate-900 dark:text-white leading-none">{student.name}</h1>
                        <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">Student ID: #{student.studentId || 'N/A'}</p>
                    </div>
                    <div className="grid grid-cols-2 gap-4 py-4 border-y border-slate-100 dark:border-slate-800">
                        <div>
                            <p className="text-xs text-slate-400 uppercase font-semibold">Grade</p>
                            <p className="text-sm font-medium">{student.grade || 'N/A'}</p>
                        </div>
                        <div>
                            <p className="text-xs text-slate-400 uppercase font-semibold">DOB</p>
                            <p className="text-sm font-medium">{student.dob || 'N/A'}</p>
                        </div>
                        <div>
                            <p className="text-xs text-slate-400 uppercase font-semibold">Classroom</p>
                            <p className="text-sm font-medium">{student.room || 'N/A'}</p>
                        </div>
                        <div>
                            <p className="text-xs text-slate-400 uppercase font-semibold">Teacher</p>
                            <p className="text-sm font-medium">{student.teacher || 'N/A'}</p>
                        </div>
                    </div>
                    {student.allergies && (
                        <div className="bg-red-50 dark:bg-red-900/20 border border-red-100 dark:border-red-900/30 rounded-lg p-3">
                            <div className="flex items-center gap-2 text-red-600 dark:text-red-400 mb-1">
                                <AlertTriangle className="w-4 h-4" />
                                <span className="text-xs font-bold uppercase">Medical Alert</span>
                            </div>
                            <p className="text-sm font-semibold text-red-800 dark:text-red-300">Allergies: {student.allergies}</p>
                        </div>
                    )}
                    <div className="pt-4">
                        <button className="w-full flex items-center justify-center gap-2 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 py-2 rounded-lg font-semibold text-sm transition-colors">
                            <BadgeCheck className="w-5 h-5" />
                            View Full Digital ID
                        </button>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-2">
                <button className="flex items-center gap-3 px-4 py-3 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all">
                    <UserCheck className="w-5 h-5" />
                    <span className="text-sm font-medium">Verify Identity</span>
                </button>
                <button className="flex items-center gap-3 px-4 py-3 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all">
                    <PhoneCall className="w-5 h-5" />
                    <span className="text-sm font-medium">Contact Parent Directly</span>
                </button>
            </div>
        </aside>
    );
};
