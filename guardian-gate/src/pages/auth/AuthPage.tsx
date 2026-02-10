import React, { useState } from 'react';
import { LoginForm } from '../../components/auth/LoginForm';
import { MFAForm } from '../../components/auth/MFAForm';
import { useNavigate } from 'react-router-dom';

const AuthPage = () => {
    const [step, setStep] = useState<'login' | 'mfa'>('login');
    const navigate = useNavigate();
    const [role, setRole] = useState<'parent' | 'staff' | 'admin'>('parent');

    const handleLogin = (selectedRole: 'parent' | 'staff' | 'admin' = 'parent') => {
        setRole(selectedRole);
        setStep('mfa');
    };

    const handleVerify = () => {
        // Navigate to dashboard based on selected role
        if (role === 'staff') {
            navigate('/staff');
        } else if (role === 'admin') {
            navigate('/admin');
        } else {
            navigate('/dashboard');
        }
    };

    return (
        <div className="w-full max-w-5xl flex flex-col gap-8 items-center justify-center">
            {step === 'login' && (
                <div className="flex gap-4 p-4 bg-slate-50 dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 mb-4">
                    <p className="text-sm font-bold text-slate-500 self-center">Demo Role:</p>
                    <button
                        onClick={() => setRole('parent')}
                        className={`px-3 py-1 rounded text-sm font-bold transition-all ${role === 'parent' ? 'bg-primary text-white' : 'hover:bg-slate-200 dark:hover:bg-slate-700'}`}
                    >
                        Parent
                    </button>
                    <button
                        onClick={() => setRole('staff')}
                        className={`px-3 py-1 rounded text-sm font-bold transition-all ${role === 'staff' ? 'bg-primary text-white' : 'hover:bg-slate-200 dark:hover:bg-slate-700'}`}
                    >
                        Staff
                    </button>
                    <button
                        onClick={() => setRole('admin')}
                        className={`px-3 py-1 rounded text-sm font-bold transition-all ${role === 'admin' ? 'bg-primary text-white' : 'hover:bg-slate-200 dark:hover:bg-slate-700'}`}
                    >
                        Admin
                    </button>
                </div>
            )}

            <div className={`flex flex-col md:flex-row gap-8 items-center justify-center w-full transition-all duration-300`}>
                <div className={`transition-all duration-300 ${step === 'mfa' ? 'opacity-50 pointer-events-none blur-sm hidden md:block' : ''}`}>
                    <LoginForm onLogin={() => handleLogin(role)} />
                </div>
                {step === 'mfa' && (
                    <MFAForm onVerify={handleVerify} isActive={true} />
                )}
            </div>
        </div>
    );
};

export default AuthPage;
