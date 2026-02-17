"use client";
import { useState } from 'react';
import { Unlock, ShieldAlert, Shield, Info, Loader2 } from 'lucide-react';
import { useDocument } from '../../hooks/useFirestore';
import { useFirestoreActions } from '../../hooks/useFirestore';
import { useAuth } from '../../context/AuthContext';
import { useToast } from '../../context/ToastContext';

export const EmergencyOverride = () => {
    const { user } = useAuth();
    const { showToast } = useToast();
    const { updateDocument, addDocument } = useFirestoreActions();
    const [reason, setReason] = useState('');
    const [processing, setProcessing] = useState(false);

    const handleOverride = async () => {
        if (!reason || reason === 'Select valid reason...') {
            showToast('Please select a valid override reason.', 'warning');
            return;
        }
        setProcessing(true);
        try {
            await addDocument('auditLogs', {
                type: 'emergency_override',
                userId: user?.uid,
                reason,
                action: 'manual_release',
            });
            showToast('Emergency override confirmed. Audit log recorded.', 'success');
            setReason('');
        } catch (err) {
            showToast('Failed to process override. Please try again.', 'error');
        } finally {
            setProcessing(false);
        }
    };

    return (
        <section className="bg-white dark:bg-slate-900 rounded-xl shadow-lg border-2 border-red-500 overflow-hidden relative">
            <div className="absolute top-0 right-0 p-2">
                <Unlock className="text-red-500/20 w-16 h-16" />
            </div>
            <div className="p-6">
                <h3 className="text-lg font-extrabold text-red-600 mb-2 flex items-center gap-2">
                    <ShieldAlert className="w-6 h-6" />
                    Emergency Override
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-6 font-medium">
                    Authorized for Principals only. Overrides all facial recognition and status blocks for a manual student release.
                </p>
                <div className="space-y-4">
                    <div>
                        <label className="block text-[11px] font-bold text-slate-500 uppercase mb-1.5">Override Reason</label>
                        <select
                            value={reason}
                            onChange={(e) => setReason(e.target.value)}
                            className="w-full bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 rounded-lg text-sm focus:ring-red-500"
                        >
                            <option>Select valid reason...</option>
                            <option>Emergency Evacuation</option>
                            <option>Medical Emergency</option>
                            <option>Verified Custody Update (Paperwork)</option>
                            <option>System Hardware Failure</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-[11px] font-bold text-slate-500 uppercase mb-1.5">Authorization Signature</label>
                        <div className="h-24 w-full border-2 border-dashed border-slate-200 dark:border-slate-700 rounded-lg flex items-center justify-center text-slate-300 dark:text-slate-700 bg-slate-50 dark:bg-slate-800/50">
                            <span className="text-xs font-medium italic">Sign here to authorize release</span>
                        </div>
                    </div>
                    <button
                        onClick={handleOverride}
                        disabled={processing}
                        className="w-full bg-red-600 text-white font-bold py-3 rounded-lg shadow-md hover:bg-red-700 transition-all flex items-center justify-center gap-2 group disabled:opacity-60"
                    >
                        {processing ? (
                            <Loader2 className="w-5 h-5 animate-spin" />
                        ) : (
                            <Shield className="w-5 h-5 group-hover:scale-110 transition-transform" />
                        )}
                        {processing ? 'Processing...' : 'Confirm Manual Release'}
                    </button>
                </div>
            </div>
            <div className="bg-red-50 dark:bg-red-900/10 px-6 py-3 flex items-center gap-2">
                <Info className="text-red-600 w-4 h-4" />
                <span className="text-[10px] text-red-600 font-bold uppercase tracking-tight">Requires high-friction confirmation</span>
            </div>
        </section>
    );
};
