"use client";
import { useState } from 'react';
import { KeyRound, Eye, EyeOff, ArrowRight, Shield, Loader2 } from 'lucide-react';

export const LoginForm = ({ onLogin }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const getErrorMessage = (code) => {
        switch (code) {
            case 'auth/user-not-found': return 'No account found with this email address.';
            case 'auth/wrong-password': return 'Incorrect password. Please try again.';
            case 'auth/invalid-credential': return 'Invalid email or password.';
            case 'auth/too-many-requests': return 'Too many attempts. Please try again later.';
            case 'auth/invalid-email': return 'Please enter a valid email address.';
            case 'auth/user-disabled': return 'This account has been disabled.';
            default: return 'Login failed. Please check your credentials.';
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!email || !password) {
            setError('Please enter both email and password.');
            return;
        }
        setError('');
        setLoading(true);
        try {
            await onLogin(email, password);
        } catch (err) {
            setError(getErrorMessage(err.code));
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="w-full max-w-[480px] relative group">
            <div className="absolute inset-0 bg-primary/5 dark:bg-primary/10 rounded-xl blur-3xl group-hover:bg-primary/10 transition-all"></div>
            <div className="relative bg-white dark:bg-slate-900 rounded-xl shadow-xl border border-gray-200 dark:border-gray-800 p-8 overflow-hidden">
                <Shield className="absolute -top-8 -right-8 w-32 h-32 text-gray-50 dark:text-gray-800 select-none pointer-events-none opacity-20" />

                <div className="mb-8 relative z-10">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                        <KeyRound className="text-primary w-8 h-8" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Secure Sign In</h2>
                    <p className="text-gray-500 dark:text-gray-400">Enter your credentials to access the portal</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5 relative z-10">
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5">Email Address</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="you@school.edu"
                            className="w-full px-4 py-3 bg-gray-50 dark:bg-slate-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-sm"
                            disabled={loading}
                            autoComplete="email"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5">Password</label>
                        <div className="relative">
                            <input
                                type={showPassword ? 'text' : 'password'}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="••••••••"
                                className="w-full px-4 py-3 bg-gray-50 dark:bg-slate-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-sm pr-12"
                                disabled={loading}
                                autoComplete="current-password"
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                            >
                                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                            </button>
                        </div>
                    </div>

                    {error && (
                        <div className="bg-red-50 dark:bg-red-950/50 border border-red-200 dark:border-red-800 text-red-700 dark:text-red-300 text-sm rounded-lg px-4 py-3 font-medium">
                            {error}
                        </div>
                    )}

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-slate-900 dark:bg-primary text-white font-bold py-3.5 rounded-lg transition-all active:scale-[0.98] flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                        {loading ? (
                            <>
                                <Loader2 className="w-5 h-5 animate-spin" />
                                Signing in...
                            </>
                        ) : (
                            <>
                                Sign In
                                <ArrowRight className="w-5 h-5" />
                            </>
                        )}
                    </button>

                    <div className="text-center">
                        <a href="/forgot-password" className="text-sm text-primary font-semibold hover:underline decoration-2">
                            Forgot password?
                        </a>
                    </div>
                </form>
            </div>
        </div>
    );
};
