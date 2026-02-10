import React from 'react';
import { History } from 'lucide-react';

export const RecentApprovals = () => {
    return (
        <div className="mt-8">
            <h3 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-4 flex items-center gap-2">
                <History className="w-4 h-4" /> Recent Approvals
            </h3>
            <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm bg-white dark:bg-slate-900">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="bg-slate-50 dark:bg-slate-800/50">
                            <th className="px-6 py-3 text-xs font-black text-slate-500 uppercase">Student</th>
                            <th className="px-6 py-3 text-xs font-black text-slate-500 uppercase">Guardian</th>
                            <th className="px-6 py-3 text-xs font-black text-slate-500 uppercase">Time</th>
                            <th className="px-6 py-3 text-xs font-black text-slate-500 uppercase text-right">Status</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                        <tr>
                            <td className="px-6 py-4">
                                <div className="flex items-center gap-3">
                                    <div
                                        className="h-8 w-8 rounded-full bg-slate-200 bg-cover"
                                        style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCz340Axo_w1nPMejYHqLr4Q2UGVtb6Wnu2iLIuPhRyxNXRz-2IspS-UAYLP6x05c2sY_VxJaSz0Rc4Nr348pIITbRr82dr0WkinH_Tl1NMOW3HeKxmbOYQfiMIrmjicYCt6BOhBIQj8S6m1KijzVJ0L6_V9tyt8BtMnS_yXjORZ3iKmeTU1n2nWSsW05uRLQGZJpRCUxZOlArkjbJiWsS31PQmIdx3HgHpFKkayy1-_7w4YXEm-Ql2bvRAno833wvcYVXuxxk9aow')" }}
                                    ></div>
                                    <span className="text-sm font-bold text-slate-800 dark:text-slate-100">Leo Garcia</span>
                                </div>
                            </td>
                            <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400">Robert Garcia (Father)</td>
                            <td className="px-6 py-4 text-sm text-slate-500">3:12 PM</td>
                            <td className="px-6 py-4 text-right">
                                <span className="inline-flex px-2 py-1 rounded text-[10px] font-black bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400">APPROVED</span>
                            </td>
                        </tr>
                        <tr>
                            <td className="px-6 py-4">
                                <div className="flex items-center gap-3">
                                    <div
                                        className="h-8 w-8 rounded-full bg-slate-200 bg-cover"
                                        style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBEjMCw9vlLPLoGxCXpz2WUmsprzPEAakuiUEgIj4su8nXy1Q4Yf2NsRnsSHjteqLrnhYpgUvfZFJ_A64RtkZqIcBZE6lutLL8ty3sPUW4lSWFRrfWTOTmmBlLpib1sdVju1khSaRFCYJnFbkKZw726Mw-l9dGAPcP9hVcmWjflU9BOTHkJu9yKuSvGPlYjWBU6m4RupcrkPPP6sewyu2pr2moEz20MI7Zz9-UxohPTYJbR4yLXti_GoqSLRodvYxiebj6ic8OBACA')" }}
                                    ></div>
                                    <span className="text-sm font-bold text-slate-800 dark:text-slate-100">Emma Watson</span>
                                </div>
                            </td>
                            <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400">Jane Watson (Nanny)</td>
                            <td className="px-6 py-4 text-sm text-slate-500">3:08 PM</td>
                            <td className="px-6 py-4 text-right">
                                <span className="inline-flex px-2 py-1 rounded text-[10px] font-black bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400">APPROVED</span>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};
