import React from 'react';
import { History, Search, Filter, Download, MoreHorizontal, CheckCircle, Clock, Car, UserCheck, Bus } from 'lucide-react';

const PickupHistory = () => {
    const events = [
        { id: 1, type: 'pickup', student: 'Jamie Johnson', by: 'Sarah Johnson', location: 'Loop B', time: '02:30 PM', date: 'Today', status: 'verified', method: 'car' },
        { id: 2, type: 'checkin', student: 'Jamie Johnson', by: 'Sarah Johnson', location: 'Main Gate', time: '07:45 AM', date: 'Today', status: 'verified', method: 'walk' },
        { id: 3, type: 'pickup', student: 'Maya Johnson', by: 'Sarah Johnson', location: 'Loop B', time: '02:30 PM', date: 'Yesterday', status: 'verified', method: 'car' },
        { id: 4, type: 'dismissal', student: 'Jamie Johnson', by: 'Coach Miller', location: 'Club Room', time: '03:45 PM', date: 'Yesterday', status: 'verified', method: 'walk' },
        { id: 5, type: 'bus', student: 'Jamie Johnson', by: 'System', location: 'Gate 4', time: '03:15 PM', date: 'Oct 24', status: 'verified', method: 'bus' },
    ];

    const getIcon = (method: string) => {
        switch (method) {
            case 'car': return <Car className="w-5 h-5" />;
            case 'walk': return <UserCheck className="w-5 h-5" />;
            case 'bus': return <Bus className="w-5 h-5" />;
            default: return <Clock className="w-5 h-5" />;
        }
    };

    return (
        <div className="flex-1 overflow-y-auto p-8 space-y-8 bg-background-light dark:bg-background-dark">
            <div className="max-w-6xl mx-auto space-y-8">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                        <h1 className="text-3xl font-black tracking-tight text-slate-900 dark:text-white">Pickup History</h1>
                        <p className="text-slate-500 dark:text-slate-400">View and audit all past student movements and pickup logs.</p>
                    </div>
                    <button className="flex items-center gap-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 px-4 py-2 rounded-lg font-bold text-sm shadow-sm hover:bg-slate-50 dark:hover:bg-slate-800 transition-all">
                        <Download className="w-4 h-4" />
                        Export Log
                    </button>
                </div>

                {/* Filters */}
                <div className="bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-800 flex flex-wrap gap-4 items-center">
                    <div className="relative flex-1 min-w-[240px]">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
                        <input
                            className="w-full bg-slate-50 dark:bg-slate-800 border-none rounded-lg pl-10 pr-4 py-2 text-sm focus:ring-2 focus:ring-primary"
                            placeholder="Search by student or person..."
                        />
                    </div>
                    <button className="flex items-center gap-2 px-4 py-2 bg-slate-100 dark:bg-slate-800 rounded-lg text-sm font-bold text-slate-600 dark:text-slate-300">
                        <Filter className="w-4 h-4" />
                        Filter
                    </button>
                    <select className="bg-slate-100 dark:bg-slate-800 border-none rounded-lg px-4 py-2 text-sm font-bold text-slate-600 dark:text-slate-300">
                        <option>Last 7 Days</option>
                        <option>Last 30 Days</option>
                        <option>This Semester</option>
                    </select>
                </div>

                {/* History Table */}
                <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead className="bg-slate-50 dark:bg-slate-800/50 text-slate-500 text-[11px] uppercase tracking-wider">
                                <tr>
                                    <th className="px-6 py-4 font-bold">Event Type</th>
                                    <th className="px-6 py-4 font-bold">Student</th>
                                    <th className="px-6 py-4 font-bold">Authorized Person</th>
                                    <th className="px-6 py-4 font-bold">Location</th>
                                    <th className="px-6 py-4 font-bold">Time & Date</th>
                                    <th className="px-6 py-4 font-bold">Status</th>
                                    <th className="px-6 py-4 font-bold"></th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                                {events.map((event) => (
                                    <tr key={event.id} className="text-sm hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-3">
                                                <div className="size-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                                    {getIcon(event.method)}
                                                </div>
                                                <span className="font-bold capitalize">{event.type}</span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 font-semibold">{event.student}</td>
                                        <td className="px-6 py-4 text-slate-600 dark:text-slate-400">{event.by}</td>
                                        <td className="px-6 py-4 text-slate-500">{event.location}</td>
                                        <td className="px-6 py-4">
                                            <div className="flex flex-col">
                                                <span className="font-medium text-slate-900 dark:text-slate-100">{event.time}</span>
                                                <span className="text-xs text-slate-400">{event.date}</span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400">
                                                <CheckCircle className="w-3 h-3" />
                                                Verified
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 text-right">
                                            <button className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg text-slate-400 transition-colors">
                                                <MoreHorizontal className="w-5 h-5" />
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className="p-6 border-t border-slate-100 dark:border-slate-800 flex justify-center">
                        <button className="text-primary font-bold text-sm hover:underline">Load More History</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PickupHistory;
