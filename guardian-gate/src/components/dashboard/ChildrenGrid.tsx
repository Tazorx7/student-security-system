import React from 'react';
import { Clock, UserCheck } from 'lucide-react';

export const ChildrenGrid = () => {
    return (
        <section className="max-w-5xl mx-auto">
            <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold">Your Children</h3>
                <button className="text-primary text-sm font-semibold hover:underline">Manage All</button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Child Card 1 */}
                <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm flex gap-6">
                    <div className="relative shrink-0">
                        <div className="size-24 rounded-full bg-slate-100 bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCFjd-4b66fQVWGG3j79a3Zjl38Iz8TWPfYJTNl962bFPkdAv6U9sw1hpnjAnxU3i9_TZywum46SM2jhJY2y-14fqrEcyYN3Eo7_GuwK_psyqqd4xobQvOvuzD1ce92_SONH435RmT_JG-MdsL4dpnP1SbJZTAtwxprTo6kJIOJUsZ1u4iJBI2G4HivTiVAhB7pUXMHjC7og6MO-tMys1GG9WHp6A2HrbHRakuhgCbULTqueAswcmdEFyFRnHgKu3T98_P2TArB5_U')" }}></div>
                        <span className="absolute bottom-1 right-1 size-5 bg-blue-500 border-4 border-white dark:border-slate-900 rounded-full"></span>
                    </div>
                    <div className="flex-1 flex flex-col justify-between">
                        <div>
                            <h4 className="text-lg font-bold">Jamie Johnson</h4>
                            <div className="mt-1 flex items-center gap-2">
                                <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-bold bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400">
                                    AT SCHOOL
                                </span>
                                <span className="text-[11px] text-slate-400 font-medium italic">Room 302 • 3rd Grade</span>
                            </div>
                        </div>
                        <div className="mt-4 flex items-center justify-between text-xs text-slate-500">
                            <div className="flex items-center gap-1">
                                <Clock className="w-4 h-4" />
                                Checked in at 07:45 AM
                            </div>
                            <button className="text-primary font-bold hover:underline">Details</button>
                        </div>
                    </div>
                </div>
                {/* Child Card 2 */}
                <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm flex gap-6">
                    <div className="relative shrink-0">
                        <div className="size-24 rounded-full bg-slate-100 bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuA3764V1IyQBtm8xKjK-CIUA0Re73K9xQZVQx_upswPY9_eUhiJiPSdWmqw3BqQkf8ZJkAa-qNOich1eOGAU3kcqB1diClCxVehBMDj_aETQ-LjIK3n5HVkjl_1FoqfMQbCqjkyLAZ1F3oQLlEaDG1VwGXJXsPGOdr4_gipTS7sdmTvG9EUwa1syOlBlcB5Tq58J4CTZdfCvF5UDD6H0wPbh0G7wkZiBlXRVgnZaVsM0JvkEK9uvHEIxHmVUDyZCwZEmNAbx3WkLcs')" }}></div>
                        <span className="absolute bottom-1 right-1 size-5 bg-slate-400 border-4 border-white dark:border-slate-900 rounded-full"></span>
                    </div>
                    <div className="flex-1 flex flex-col justify-between">
                        <div>
                            <h4 className="text-lg font-bold">Maya Johnson</h4>
                            <div className="mt-1 flex items-center gap-2">
                                <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-bold bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400">
                                    PICKED UP
                                </span>
                                <span className="text-[11px] text-slate-400 font-medium italic">Dismissal Loop B</span>
                            </div>
                        </div>
                        <div className="mt-4 flex items-center justify-between text-xs text-slate-500">
                            <div className="flex items-center gap-1">
                                <UserCheck className="w-4 h-4" />
                                By Sarah (You) at 02:30 PM
                            </div>
                            <button className="text-primary font-bold hover:underline">History</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
