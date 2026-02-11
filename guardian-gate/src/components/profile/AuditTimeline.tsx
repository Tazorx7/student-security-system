import React from 'react';
import { BadgeCheck, LogIn, CheckCircle } from 'lucide-react';

export const AuditTimeline = () => {
    return (
        <section className="col-span-12 lg:col-span-4 flex flex-col gap-6">
            <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm flex flex-col h-full">
                <div className="flex items-center justify-between mb-8">
                    <h2 className="text-xl font-bold text-slate-900 dark:text-white">Audit Trail</h2>
                    <span className="text-[10px] font-bold bg-slate-100 dark:bg-slate-800 text-slate-500 px-2 py-1 rounded">Last 30 Days</span>
                </div>
                {/* Timeline Scroll Area */}
                <div className="flex-1 space-y-8 relative before:content-[''] before:absolute before:left-[23px] before:top-2 before:bottom-2 before:w-[2px] before:bg-slate-100 dark:before:bg-slate-800">
                    {/* Timeline Item 1 */}
                    <div className="relative pl-14">
                        <div className="absolute left-0 top-0 size-12 rounded-full border-4 border-white dark:border-slate-900 bg-slate-100 dark:bg-slate-800 overflow-hidden shadow-sm z-10">
                            <div className="w-full h-full bg-center bg-cover" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuB5HHy9NLF5lZA6N2pR_3GS_ltbA2xf8TsMbRii9bOhh0m8_NekXhL9iHLTLGWPVrH6apk9fmF8ygamglA85sPh366cbZAuvQvwkpiC2aUe-bvvLV7P4zaWU8l18TSec-tp_egLczk06EPqpk6HQpERkQ5ELCvclr2wTbBGv7xKFdsSOjg-ysP19Am6xqte3tg2J9c56uL9OubFYqii4Esk-FYUnxuhwnUfdvLPc8xwYGxYD4RJh8dOE2WkhUg3wNahAhJSh1doEEE")' }}></div>
                        </div>
                        <div className="flex flex-col">
                            <div className="flex items-center justify-between">
                                <span className="text-sm font-bold text-slate-900 dark:text-white">Sarah Johnson</span>
                                <span className="text-[10px] font-mono text-slate-400">TODAY, 3:15 PM</span>
                            </div>
                            <p className="text-xs text-slate-500 font-medium">Primary Parent • Exit Gate A</p>
                            <div className="mt-2 flex items-center gap-1 text-[10px] font-bold text-green-600 bg-green-50 dark:bg-green-900/20 px-2 py-0.5 rounded w-fit uppercase">
                                <BadgeCheck className="w-3 h-3" />
                                Verified Identity
                            </div>
                        </div>
                    </div>
                    {/* Timeline Item 2 */}
                    <div className="relative pl-14">
                        <div className="absolute left-0 top-0 size-12 rounded-full border-4 border-white dark:border-slate-900 bg-slate-100 dark:bg-slate-800 overflow-hidden shadow-sm z-10">
                            <div className="w-full h-full bg-center bg-cover" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBSxRJnEzRaiuaNpi5WXWkSlYML7USxWMW9O0-Z0QoK5vHKcXlfIf5sJG__sIsx7lTQyCSYkQjR7IiB2eno4SJYqK_9iP1XFc5gku-Lpj08JHFYO0If8RGeDvQZhfwp97xweeyJq-85S6wav5m0dtRkxriL3PcEo5ffIbfljwLnoF3e0lGmloC3PPxAaeW0k89rXQJW47A1aJdZs7GB5JuoGE7gQqjO3o5zHKWoN6M_7_Wr0xP-plXK-y-FkoAxQz556cHtBFhCAFA")' }}></div>
                        </div>
                        <div className="flex flex-col">
                            <div className="flex items-center justify-between">
                                <span className="text-sm font-bold text-slate-900 dark:text-white">Mark Johnson</span>
                                <span className="text-[10px] font-mono text-slate-400">OCT 24, 8:05 AM</span>
                            </div>
                            <p className="text-xs text-slate-500 font-medium">Primary Parent • Drop-off Zone</p>
                            <div className="mt-2 flex items-center gap-1 text-[10px] font-bold text-primary bg-primary/10 px-2 py-0.5 rounded w-fit uppercase">
                                <LogIn className="w-3 h-3" />
                                Secure Entry
                            </div>
                        </div>
                    </div>
                    {/* Timeline Item 3 */}
                    <div className="relative pl-14 opacity-70">
                        <div className="absolute left-0 top-0 size-12 rounded-full border-4 border-white dark:border-slate-900 bg-slate-100 dark:bg-slate-800 overflow-hidden shadow-sm z-10">
                            <div className="w-full h-full bg-center bg-cover" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDjjcneFstf70LNIiGo4EwG4Qiraqg_lng9k_0RJoWHrkAMO0Gf3hKaR-xXUdo9x_EOaeaX3GWXApgRBMnpMvw3W4DtP3CXhGDkV3-S6G7n5AIF3dZrup6wPznJw1YVY7s2hCtmWQCSTNn0N0yOOwklPs8sOux483SUi1lSi7l5Ri_2tuu88E5NTttyThFeudzdeTBbSqSEJqRKqgnQUzEOmG0V-oAz4BvGPkzBIK2QrekLfGVN5G6w4q_hZAU673mYGonJAya0jQQ")' }}></div>
                        </div>
                        <div className="flex flex-col">
                            <div className="flex items-center justify-between">
                                <span className="text-sm font-bold text-slate-900 dark:text-white">Elena Smith</span>
                                <span className="text-[10px] font-mono text-slate-400">OCT 23, 3:30 PM</span>
                            </div>
                            <p className="text-xs text-slate-500 font-medium">Guardian • Exit Gate B</p>
                            <div className="mt-2 flex items-center gap-1 text-[10px] font-bold text-slate-600 bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded w-fit uppercase">
                                <CheckCircle className="w-3 h-3" />
                                Approved Pickup
                            </div>
                        </div>
                    </div>
                    {/* Timeline Item 4 */}
                    <div className="relative pl-14 opacity-50">
                        <div className="absolute left-0 top-0 size-12 rounded-full border-4 border-white dark:border-slate-900 bg-slate-100 dark:bg-slate-800 overflow-hidden shadow-sm z-10">
                            <div className="w-full h-full bg-center bg-cover" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuA7IZE04PRpV-xWpcjlpnZxRnR8vc94G2Zv2FezXgxwbiFNKZ1tRdcB9rTXESgHn1mQgjL-X7AmGaQlAFXL7FCGwNKAzVkCIjihSE6-CH-434Bt7ZwVCYab_sb23ouNa71LK_u-vU1XVfXrewQfyZu2-8-d-M0HBf32hZBtVk3iTVBK2uq-V1Tw5p1musAgtgsItQrFZfZqzKa35nMA-lMPGvug5wIpJFdQKsElWtO_MnBFqdF95b0FOju9hVp7ShGucewBCnvlaHM")' }}></div>
                        </div>
                        <div className="flex flex-col">
                            <div className="flex items-center justify-between">
                                <span className="text-sm font-bold text-slate-900 dark:text-white">David Chen</span>
                                <span className="text-[10px] font-mono text-slate-400">OCT 22, 3:20 PM</span>
                            </div>
                            <p className="text-xs text-slate-500 font-medium">Nanny • Exit Gate A</p>
                            <div className="mt-2 flex items-center gap-1 text-[10px] font-bold text-slate-600 bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded w-fit uppercase">
                                <CheckCircle className="w-3 h-3" />
                                Approved Pickup
                            </div>
                        </div>
                    </div>
                </div>
                {/* Footer View More */}
                <button className="mt-8 py-3 text-xs font-bold text-primary hover:text-primary/80 transition-colors border-t border-slate-100 dark:border-slate-800">
                    LOAD OLDER RECORDS
                </button>
            </div>
        </section>
    );
};
