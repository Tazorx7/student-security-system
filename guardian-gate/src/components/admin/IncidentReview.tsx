import React from 'react';
import { AlertCircle, UserX, CameraOff } from 'lucide-react';
import { Link } from 'react-router-dom';

export const IncidentReview = () => {
    return (
        <section className="bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden">
            <div className="p-5 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
                <h3 className="font-bold flex items-center gap-2">
                    <AlertCircle className="text-red-500 w-5 h-5" />
                    Active Incident Review
                </h3>
                <Link to="/admin/alerts" className="text-primary text-sm font-semibold hover:underline">View All Alerts</Link>
            </div>
            <div className="divide-y divide-slate-100 dark:divide-slate-800">
                {/* Incident Item 1 */}
                <div className="p-5 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                    <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-lg bg-red-100 dark:bg-red-900/30 flex items-center justify-center flex-shrink-0">
                            <UserX className="text-red-600 w-6 h-6" />
                        </div>
                        <div className="flex-1">
                            <div className="flex items-center justify-between">
                                <h4 className="font-bold text-slate-800 dark:text-slate-100">Unauthorized Guardian Attempt</h4>
                                <span className="text-xs text-slate-500">03:38 PM</span>
                            </div>
                            <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">Guardian <strong>Marcus Thorne</strong> attempted pickup for <strong>Emily Thorne (Grade 2)</strong>. Guardian flag: Restricted Custody Order.</p>
                            <div className="mt-4 flex items-center gap-3">
                                <button className="bg-primary text-white text-xs px-4 py-1.5 rounded-lg font-bold shadow-sm">Review Protocol</button>
                                <button className="border border-slate-200 dark:border-slate-700 text-xs px-4 py-1.5 rounded-lg font-bold">Contact Security</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Incident Item 2 */}
                <div className="p-5 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                    <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-lg bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center flex-shrink-0">
                            <CameraOff className="text-amber-600 w-6 h-6" />
                        </div>
                        <div className="flex-1">
                            <div className="flex items-center justify-between">
                                <h4 className="font-bold text-slate-800 dark:text-slate-100">Facial Recognition Mismatch</h4>
                                <span className="text-xs text-slate-500">03:41 PM</span>
                            </div>
                            <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">Gate B scanner reported &lt; 60% match confidence for <strong>Sarah Jenkins</strong>. Manual verification required at Lane 4.</p>
                            <div className="mt-4 flex items-center gap-3">
                                <button className="bg-primary text-white text-xs px-4 py-1.5 rounded-lg font-bold shadow-sm">Review Photos</button>
                                <button className="border border-slate-200 dark:border-slate-700 text-xs px-4 py-1.5 rounded-lg font-bold">Clear Match</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
