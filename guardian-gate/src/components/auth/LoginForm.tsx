import React, { useState } from 'react';
import { AtSign, Lock, Eye, EyeOff, UserCheck } from 'lucide-react';

interface LoginFormProps {
    onLogin: () => void;
}

export const LoginForm = ({ onLogin }: LoginFormProps) => {
    const [showPassword, setShowPassword] = useState(false);
    const [role, setRole] = useState<'parent' | 'staff' | 'admin'>('parent');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onLogin();
    };

    return (
        <div className="w-full max-w-[480px] bg-white dark:bg-slate-900 rounded-xl shadow-xl shadow-gray-200/50 dark:shadow-black/20 border border-gray-100 dark:border-gray-800 p-8">
            <div className="mb-8 text-center">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Welcome Back</h2>
                <p className="text-gray-500 dark:text-gray-400">Access the Parent-Child Recognition System</p>
            </div>

            {/* Role Selection */}
            <div className="bg-gray-100 dark:bg-gray-800 p-1 rounded-lg flex gap-1 mb-8">
                {(['parent', 'staff', 'admin'] as const).map((r) => (
                    <button
                        key={r}
                        onClick={() => setRole(r)}
                        className={`flex-1 py-2 text-sm font-semibold rounded-md capitalize transition-all ${role === r
                                ? 'bg-white dark:bg-slate-700 text-primary shadow-sm ring-1 ring-black/5 dark:ring-white/10'
                                : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200'
                            }`}
                    >
                        {r}
                    </button>
                ))}
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Email Address</label>
                    <div className="relative group">
                        <AtSign className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-primary transition-colors w-5 h-5" />
                        <input
                            className="w-full pl-10 pr-4 py-3 bg-gray-50 dark:bg-slate-800 border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all dark:text-white"
                            placeholder="e.g., parent@school.edu"
                            type="email"
                            required
                        />
                    </div>
                </div>
                <div>
                    <div className="flex justify-between items-center mb-2">
                        <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">Password</label>
                        <a className="text-xs font-semibold text-primary hover:underline" href="#">Forgot password?</a>
                    </div>
                    <div className="relative group">
                        <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-primary transition-colors w-5 h-5" />
                        <input
                            className="w-full pl-10 pr-12 py-3 bg-gray-50 dark:bg-slate-800 border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all dark:text-white"
                            placeholder="••••••••"
                            type={showPassword ? "text" : "password"}
                            required
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                        >
                            {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                        </button>
                    </div>
                </div>
                <div className="flex items-center gap-2 pt-2">
                    <input className="w-4 h-4 rounded text-primary border-gray-300 dark:border-gray-700 focus:ring-primary" id="remember" type="checkbox" />
                    <label className="text-sm text-gray-600 dark:text-gray-400" htmlFor="remember">Trust this device for 30 days</label>
                </div>
                <button
                    className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-3.5 rounded-lg shadow-lg shadow-primary/20 transform transition-all active:scale-[0.98]"
                    type="submit"
                >
                    Sign In
                </button>
            </form>

            <div className="mt-10 pt-6 border-t border-gray-100 dark:border-gray-800 flex items-center justify-center gap-2">
                <UserCheck className="text-green-500 w-5 h-5" />
                <span className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-widest">Secure Encryption Active</span>
            </div>
        </div>
    );
};
