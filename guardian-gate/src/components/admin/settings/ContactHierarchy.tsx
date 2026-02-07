import React from 'react';
import { Plus, GripVertical, Edit } from 'lucide-react';

export const ContactHierarchy = () => {
    return (
        <section className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
            <div className="p-6 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center">
                <div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">Contact Hierarchy (Priority Order)</h3>
                    <p className="text-xs text-slate-500 mt-1">Drag and drop to set the order of notification for pickup events.</p>
                </div>
                <button className="bg-primary/10 text-primary px-4 py-2 rounded-lg text-sm font-bold hover:bg-primary/20 transition-all flex items-center gap-2">
                    <Plus className="w-4 h-4" />
                    Add Guardian
                </button>
            </div>
            <div className="p-6 flex flex-col gap-3">
                {/* Drag Item 1 */}
                <div className="flex items-center gap-4 p-4 rounded-xl border border-primary/20 bg-primary/5 group cursor-grab active:cursor-grabbing">
                    <GripVertical className="text-slate-400 w-5 h-5" />
                    <div className="size-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">1</div>
                    <div className="flex-1">
                        <h4 className="text-sm font-bold text-slate-900 dark:text-white">Sarah Jenkins (Mother)</h4>
                        <p className="text-xs text-slate-500">Primary Contact • Verified</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="px-2 py-1 rounded-md bg-green-100 text-green-700 text-[10px] font-bold uppercase">Online</span>
                        <button className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200">
                            <Edit className="w-4 h-4" />
                        </button>
                    </div>
                </div>
                {/* Drag Item 2 */}
                <div className="flex items-center gap-4 p-4 rounded-xl border border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50 group cursor-grab">
                    <GripVertical className="text-slate-400 w-5 h-5" />
                    <div className="size-10 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center text-slate-600 dark:text-slate-400 font-bold">2</div>
                    <div className="flex-1">
                        <h4 className="text-sm font-bold text-slate-900 dark:text-white">Mark Jenkins (Father)</h4>
                        <p className="text-xs text-slate-500">Secondary Contact • SMS Priority</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <button className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200">
                            <Edit className="w-4 h-4" />
                        </button>
                    </div>
                </div>
                {/* Drag Item 3 */}
                <div className="flex items-center gap-4 p-4 rounded-xl border border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50 group cursor-grab">
                    <GripVertical className="text-slate-400 w-5 h-5" />
                    <div className="size-10 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center text-slate-600 dark:text-slate-400 font-bold">3</div>
                    <div className="flex-1">
                        <h4 className="text-sm font-bold text-slate-900 dark:text-white">Elena Rodriguez (Grandmother)</h4>
                        <p className="text-xs text-slate-500">Emergency Authorization</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <button className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200">
                            <Edit className="w-4 h-4" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};
