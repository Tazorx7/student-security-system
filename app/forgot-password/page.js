"use client";
import { useState } from 'react';
import Link from 'next/link';
import { AuthHeader, AuthFooter } from '../components/auth/AuthShell';
import { useAuth } from '../context/AuthContext';
import { useToast } from '../context/ToastContext';
import { Mail, ArrowLeft, Loader2, CheckCircle } from 'lucide-react';

export default function ForgotPasswordPage() {
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);
    const [sent, setSent] = useState(false);
    const { resetPassword } = useAuth();
    const { showToast } = useToast();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!email) {
            showToast('Please enter your email address.', 'warning');
            return;
        }
        setLoading(true);
        try {
            await resetPassword(email);
            setSent(true);
            showToast('Reset link sent! Check your inbox.', 'success');
        } catch (err) {
            const msg = err.code === 'auth/user-not-found'
                ? 'No account found with this email.'
                : 'Failed to send reset link. Please try again.';
            showToast(msg, 'error');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="bg-gradient-to-br from-slate-50 via-slate-100 to-white dark:from-background-dark dark:via-slate-900 dark:to-slate-950 min-h-screen flex flex-col">
            <AuthHeader />
            <main className="flex-1 flex items-center justify-center p-4">
                <div className="w-full max-w-[480px] bg-white dark:bg-slate-900 rounded-xl shadow-xl border border-gray-200 dark:border-gray-800 p-8">
                    {sent ? (
                        <div className="text-center space-y-4">
                            <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto">
                                <CheckCircle className="w-8 h-8 text-green-600 dark:text-green-400" />
                            </div>
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Check Your Email</h2>
                            <p className="text-gray-500 dark:text-gray-400">
                                We&apos;ve sent a password reset link to <strong className="text-gray-700 dark:text-gray-200">{email}</strong>
                            </p>
                            <Link
                                href="/login"
                                className="inline-flex items-center gap-2 text-primary font-semibold hover:underline decoration-2 mt-4"
                            >
                                <ArrowLeft className="w-4 h-4" />
                                Back to Login
                            </Link>
                        </div>
                    ) : (
                        <>
                            <div className="mb-8">
                                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                                    <Mail className="text-primary w-8 h-8" />
                                </div>
                                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Reset Password</h2>
                                <p className="text-gray-500 dark:text-gray-400">Enter your email and we&apos;ll send you a reset link</p>
                            </div>
                            <form onSubmit={handleSubmit} className="space-y-5">
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
                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="w-full bg-slate-900 dark:bg-primary text-white font-bold py-3.5 rounded-lg transition-all active:scale-[0.98] flex items-center justify-center gap-2 disabled:opacity-60"
                                >
                                    {loading ? (
                                        <>
                                            <Loader2 className="w-5 h-5 animate-spin" />
                                            Sending...
                                        </>
                                    ) : (
                                        'Send Reset Link'
                                    )}
                                </button>
                                <div className="text-center">
                                    <Link href="/login" className="text-sm text-primary font-semibold hover:underline decoration-2 inline-flex items-center gap-1">
                                        <ArrowLeft className="w-4 h-4" />
                                        Back to Login
                                    </Link>
                                </div>
                            </form>
                        </>
                    )}
                </div>
            </main>
            <AuthFooter />
        </div>
    );
}
