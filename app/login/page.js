"use client";
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { AuthHeader, AuthFooter } from '../components/auth/AuthShell';
import { LoginForm } from '../components/auth/LoginForm';
import { useAuth } from '../context/AuthContext';
import { FullPageSpinner } from '../components/common/LoadingSpinner';
import { useToast } from '../context/ToastContext';

export default function LoginPage() {
    const router = useRouter();
    const { user, role, loading, login } = useAuth();
    const { showToast } = useToast();

    useEffect(() => {
        if (!loading && user && role) {
            redirectByRole(role);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [user, role, loading]);

    const redirectByRole = (userRole) => {
        switch (userRole) {
            case 'admin': router.push('/admin'); break;
            case 'staff': router.push('/staff'); break;
            default: router.push('/dashboard'); break;
        }
    };

    const handleLogin = async (email, password) => {
        const credential = await login(email, password);
        showToast('Login successful!', 'success');
        // Role redirect will happen via the useEffect above once auth state updates
    };

    if (loading) {
        return <FullPageSpinner message="Checking authentication..." />;
    }

    if (user) {
        return <FullPageSpinner message="Redirecting to your dashboard..." />;
    }

    return (
        <div className="bg-gradient-to-br from-slate-50 via-slate-100 to-white dark:from-background-dark dark:via-slate-900 dark:to-slate-950 min-h-screen flex flex-col">
            <AuthHeader />
            <main className="flex-1 flex items-center justify-center p-4">
                <LoginForm onLogin={handleLogin} />
            </main>
            <AuthFooter />
        </div>
    );
}
