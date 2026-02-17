"use client";
import { useState, useRef } from 'react';
import { Smartphone, MessageSquareWarning, Info } from 'lucide-react';

export const MFAForm = ({ onVerify, isActive }) => {
    const [code, setCode] = useState(['', '', '', '', '', '']);
    const inputs = useRef([]);

    const handleChange = (index, value) => {
        if (isNaN(Number(value))) return;
        const newCode = [...code];
        newCode[index] = value;
        setCode(newCode);

        if (value && index < 5) {
            inputs.current[index + 1]?.focus();
        }
    };

    const handleKeyDown = (index, e) => {
        if (e.key === 'Backspace' && !code[index] && index > 0) {
            inputs.current[index - 1]?.focus();
        }
    };

    const handleSubmit = () => {
        if (code.join('').length === 6) {
            onVerify();
        }
    }

    return (
        <div className={`w-full max-w-[480px] relative group ${!isActive ? 'opacity-50 pointer-events-none grayscale' : ''}`}>
            <div className="absolute inset-0 bg-primary/5 dark:bg-primary/10 rounded-xl blur-3xl group-hover:bg-primary/10 transition-all"></div>
            <div className="relative bg-white dark:bg-slate-900 rounded-xl shadow-xl border-2 border-primary/20 dark:border-primary/30 p-8 overflow-hidden">
                <Smartphone className="absolute -top-8 -right-8 w-32 h-32 text-gray-50 dark:text-gray-800 select-none pointer-events-none opacity-20" />

                <div className="mb-8 relative z-10">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                        <MessageSquareWarning className="text-primary w-8 h-8" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Secure Verification</h2>
                    <p className="text-gray-500 dark:text-gray-400">Enter the 6-digit code sent to +1 (•••) •••-4291</p>
                </div>

                <div className="flex justify-between gap-2 mb-8 relative z-10">
                    {code.map((digit, index) => (
                        <input
                            key={index}
                            ref={(el) => { inputs.current[index] = el; }}
                            className="w-12 h-14 text-center text-xl font-bold rounded-lg border-2 border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-slate-800 focus:border-primary focus:ring-0 dark:text-white"
                            maxLength={1}
                            type="text"
                            value={digit}
                            onChange={(e) => handleChange(index, e.target.value)}
                            onKeyDown={(e) => handleKeyDown(index, e)}
                        />
                    ))}
                </div>

                <button
                    onClick={handleSubmit}
                    className="w-full bg-slate-900 dark:bg-primary text-white font-bold py-3.5 rounded-lg transition-transform active:scale-[0.98] mb-4"
                >
                    Verify Identity
                </button>

                <div className="text-center relative z-10">
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                        Didn&apos;t receive the code?
                        <button className="text-primary font-semibold hover:underline decoration-2 ml-1">Resend (0:45)</button>
                    </p>
                </div>

                <div className="mt-8 bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg flex gap-3 relative z-10">
                    <Info className="text-primary w-5 h-5 flex-shrink-0" />
                    <p className="text-xs text-blue-800 dark:text-blue-300 leading-relaxed">
                        MFA ensures that only you can access your child&apos;s pickup profile. Verification codes are valid for 5 minutes.
                    </p>
                </div>
            </div>
        </div>
    );
};
