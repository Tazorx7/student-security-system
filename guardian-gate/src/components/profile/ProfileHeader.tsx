import React from 'react';
import { Search, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

export const ProfileHeader = () => {
    return (
        <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-slate-200 dark:border-slate-800 bg-white dark:bg-background-dark px-10 py-3 sticky top-0 z-50">
            <div className="flex items-center gap-8">
                <div className="flex items-center gap-4 text-primary">
                    <div className="size-8">
                        <Shield className="w-8 h-8 fill-current" />
                    </div>
                    <h2 className="text-slate-900 dark:text-white text-lg font-bold leading-tight tracking-tight">SafeGate</h2>
                </div>
                <label className="flex flex-col min-w-40 !h-10 max-w-64">
                    <div className="flex w-full flex-1 items-stretch rounded-lg h-full bg-slate-100 dark:bg-slate-800">
                        <div className="text-slate-500 dark:text-slate-400 flex items-center justify-center pl-4">
                            <Search className="w-5 h-5" />
                        </div>
                        <input
                            className="w-full bg-transparent border-none focus:ring-0 text-slate-900 dark:text-white h-full px-4 placeholder:text-slate-500"
                            placeholder="Quick Student/ID Search"
                        />
                    </div>
                </label>
            </div>
            <div className="flex flex-1 justify-end gap-8">
                <nav className="flex items-center gap-9">
                    <Link className="text-slate-900 dark:text-slate-300 text-sm font-medium leading-normal hover:text-primary transition-colors" to="/admin">Dashboard</Link>
                    <Link className="text-primary text-sm font-bold leading-normal" to="/admin/students/profile">Students</Link>
                    <Link className="text-slate-900 dark:text-slate-300 text-sm font-medium leading-normal hover:text-primary transition-colors" to="/admin/guardians">Guardians</Link>
                    <Link className="text-slate-900 dark:text-slate-300 text-sm font-medium leading-normal hover:text-primary transition-colors" to="/admin/reports">Reports</Link>
                </nav>
                <div
                    className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 border border-slate-200 dark:border-slate-700"
                    style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBODf23MxmyNU593OXmOjxWwKNTQlQI9C3xhSr-8zWPboOhYFZ_vEhlCjktoMADW6e8sdrkzBjsmdPdD5btoWflzVj88XneAadXhDoic3WjqPKwQf7gR60YNqG3s8AOFSbrGajYGDZHUSeqL3NtVcjQE_9ll3609Gsk2ShZmKQFrt4ijo7q5qoFjon6w-_DHuYaYJmLYPZd_CEG_5UdbGcxmcfPQ37LMVn9QWRs0N8sARJxZgFoxfA-c_B2rJ2ph1Cp1RZkCH3yE8A")' }}
                ></div>
            </div>
        </header>
    );
};
