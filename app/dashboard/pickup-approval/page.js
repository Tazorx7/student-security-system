"use client";
import { Suspense, useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { Shield, ShieldCheck, CheckCircle, AlertTriangle, AlertCircle, HelpCircle, ChevronDown, Loader2 } from 'lucide-react';
import ProtectedRoute from '../../components/protectedRoute';
import { useDocument, useFirestoreActions } from '../../hooks/useFirestore';
import { LoadingSpinner, ErrorState } from '../../components/common/LoadingSpinner';
import { useToast } from '../../context/ToastContext';

function PickupApprovalContent() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const requestId = searchParams.get('id');
    const { showToast } = useToast();
    const { updateDocument } = useFirestoreActions();

    // Fetch the specific pickup request
    const { data: request, loading, error } = useDocument(requestId ? `pickupRequests/${requestId}` : null);

    const [reason, setReason] = useState('');
    const [notes, setNotes] = useState('');
    const [processing, setProcessing] = useState(false);

    // If no ID provided, show error or redirect
    useEffect(() => {
        if (!loading && !requestId) {
            // Alternatively could fetch the first pending request
        }
    }, [loading, requestId]);

    const handleAction = async (status) => {
        if (!requestId) return;
        if (status === 'approved' && !reason) {
            showToast('Please select a reason for approval.', 'warning');
            return;
        }

        setProcessing(true);
        try {
            await updateDocument(`pickupRequests/${requestId}`, {
                status,
                reason: status === 'approved' ? reason : 'denied',
                notes,
                processedAt: new Date(),
            });
            showToast(`Request ${status} successfully.`, status === 'approved' ? 'success' : 'info');
            router.push('/dashboard');
        } catch (err) {
            showToast('Failed to process request.', 'error');
            console.error(err);
        } finally {
            setProcessing(false);
        }
    };

    if (loading) return <div className="h-screen flex items-center justify-center"><LoadingSpinner message="Loading request details..." /></div>;

    if (!requestId || error || !request) return (
        <div className="h-screen flex flex-col items-center justify-center gap-4 text-center p-10 bg-background-light dark:bg-background-dark">
            <AlertCircle className="w-12 h-12 text-slate-400" />
            <h2 className="text-xl font-bold text-slate-700 dark:text-slate-300">Request Not Found</h2>
            <p className="text-slate-500">The pickup request you are looking for does not exist or has been removed.</p>
            <Link href="/dashboard" className="text-primary font-bold hover:underline">Return to Dashboard</Link>
        </div>
    );

    if (request.status !== 'pending') return (
        <div className="h-screen flex flex-col items-center justify-center gap-4 text-center p-10 bg-background-light dark:bg-background-dark">
            <CheckCircle className="w-12 h-12 text-green-500" />
            <h2 className="text-xl font-bold text-slate-700 dark:text-slate-300">Request Already Processed</h2>
            <p className="text-slate-500">This request has already been {request.status}.</p>
            <Link href="/dashboard" className="text-primary font-bold hover:underline">Return to Dashboard</Link>
        </div>
    );

    return (
        <div className="bg-background-light dark:bg-background-dark min-h-screen text-slate-900 dark:text-slate-100 font-display flex flex-col antialiased">
            <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-slate-200 dark:border-slate-800 bg-white dark:bg-background-dark px-6 md:px-10 py-3 sticky top-0 z-50">
                <div className="flex items-center gap-3">
                    <div className="size-8 text-primary flex items-center justify-center">
                        <Shield className="w-8 h-8 fill-current" />
                    </div>
                    <h2 className="text-slate-900 dark:text-white text-lg font-bold leading-tight tracking-tight">GuardianLink</h2>
                </div>
            </header>

            <main className="flex-1 flex flex-col items-center py-8 px-4 md:px-10">
                <div className="max-w-5xl w-full">
                    <div className="mb-8">
                        <h1 className="text-slate-900 dark:text-white text-3xl md:text-4xl font-black leading-tight tracking-tight mb-2">Verification Request: Pickup Authorization</h1>
                        <p className="text-slate-500 dark:text-slate-400 text-lg">A request has been initiated for a non-guardian pickup. Please verify the identities below.</p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        <div className="lg:col-span-2 space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm">
                                    <div className="p-4 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center">
                                        <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Your Child</span>
                                        <span className="text-primary"><AlertCircle className="w-5 h-5" /></span>
                                    </div>
                                    <div className="p-6 flex flex-col items-center text-center">
                                        <div className="size-24 rounded-full bg-slate-200 dark:bg-slate-800 mb-4 flex items-center justify-center text-2xl font-bold text-slate-400">
                                            {request.childName ? request.childName[0] : '?'}
                                        </div>
                                        <p className="text-xl font-bold">{request.childName}</p>
                                        <p className="text-sm text-slate-500">{request.childGrade || 'Grade 2'} &bull; {request.childRoom || 'Room 104'}</p>
                                    </div>
                                </div>
                                <div className="bg-white dark:bg-slate-900 rounded-xl border-2 border-primary overflow-hidden shadow-lg shadow-primary/10">
                                    <div className="p-4 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center bg-primary/5">
                                        <span className="text-xs font-bold uppercase tracking-wider text-primary">Authorized Person</span>
                                        <ShieldCheck className="text-primary w-5 h-5" />
                                    </div>
                                    <div className="p-6 flex flex-col items-center text-center">
                                        <div className="size-24 rounded-full bg-slate-200 dark:bg-slate-800 mb-4 flex items-center justify-center text-2xl font-bold text-slate-400">
                                            {request.guardianName ? request.guardianName[0] : '?'}
                                        </div>
                                        <p className="text-xl font-bold">{request.guardianName}</p>
                                        <p className="text-sm text-slate-500">{request.guardianRelation}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900 rounded-xl p-5 flex gap-4">
                                <AlertTriangle className="text-amber-600 dark:text-amber-400 flex-shrink-0 w-6 h-6" />
                                <div>
                                    <p className="text-amber-800 dark:text-amber-200 font-bold mb-1">Legal Notice</p>
                                    <p className="text-amber-700 dark:text-amber-300 text-sm leading-relaxed">
                                        By clicking &quot;Approve Pickup&quot;, you acknowledge that you are authorizing this individual to take custody of your child.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm h-fit">
                            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-6">Authorization Details</h3>
                            <div className="space-y-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-slate-700 dark:text-slate-300 block">Why are you authorizing this person today?</label>
                                    <div className="relative">
                                        <select value={reason} onChange={(e) => setReason(e.target.value)} className="block w-full rounded-lg border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:border-primary focus:ring-primary h-12 px-4 appearance-none">
                                            <option disabled value="">Select a reason...</option>
                                            <option value="scheduled">Scheduled Pickup (Work Conflict)</option>
                                            <option value="emergency">Emergency Situation</option>
                                            <option value="activity">Extracurricular Activity</option>
                                            <option value="family">Family Friend / Relative Visit</option>
                                            <option value="other">Other (Please specify)</option>
                                        </select>
                                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-slate-500">
                                            <ChevronDown className="w-5 h-5" />
                                        </div>
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-slate-700 dark:text-slate-300 block">Additional Notes (Optional)</label>
                                    <textarea
                                        value={notes}
                                        onChange={(e) => setNotes(e.target.value)}
                                        className="block w-full rounded-lg border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:border-primary focus:ring-primary p-4"
                                        placeholder="e.g. She will be bringing him back by 6PM..."
                                        rows={3}
                                    />
                                </div>
                                <div className="pt-4 space-y-3">
                                    <button
                                        onClick={() => handleAction('approved')}
                                        disabled={processing}
                                        className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-4 rounded-lg shadow-md shadow-primary/20 flex items-center justify-center gap-2 transition-all active:scale-95 disabled:opacity-70"
                                    >
                                        {processing ? <Loader2 className="w-5 h-5 animate-spin" /> : <CheckCircle className="w-5 h-5" />}
                                        Approve Pickup
                                    </button>
                                    <button
                                        onClick={() => handleAction('denied')}
                                        disabled={processing}
                                        className="w-full bg-white dark:bg-slate-900 border border-red-200 dark:border-red-900 text-red-600 hover:bg-red-50 dark:hover:bg-red-950/20 font-bold py-4 rounded-lg flex items-center justify-center gap-2 transition-all active:scale-95 disabled:opacity-70"
                                    >
                                        {processing ? <Loader2 className="w-5 h-5 animate-spin" /> : <AlertCircle className="w-5 h-5" />}
                                        Deny &amp; Notify School
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <footer className="bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 py-4 px-10 shrink-0">
                <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="flex items-center gap-2 text-slate-500 text-xs">
                        <span className="inline-block w-2 h-2 rounded-full bg-green-500"></span>
                        Encrypted Connection Secured by GuardianLink SSL
                    </div>
                    <p className="text-slate-400 text-xs">&copy; 2024 GuardianLink Schools. All security protocols active.</p>
                </div>
            </footer>
        </div>
    );
}

export default function PickupApprovalPage() {
    return (
        <ProtectedRoute>
            <Suspense fallback={<div className="h-screen flex items-center justify-center"><LoadingSpinner message="Loading..." /></div>}>
                <PickupApprovalContent />
            </Suspense>
        </ProtectedRoute>
    );
}
