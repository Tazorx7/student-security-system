"use client";
import { useState } from 'react';
import { Sidebar } from '../../components/dashboard/Sidebar';
import { DashboardHeader } from '../../components/dashboard/DashboardHeader';
import ProtectedRoute from '../../components/protectedRoute';
import { useAuth } from '../../context/AuthContext';
import { useCollection } from '../../hooks/useFirestore';
import { useFirestoreActions } from '../../hooks/useFirestore';
import { useToast } from '../../context/ToastContext';
import { LoadingSpinner, EmptyState, ErrorState } from '../../components/common/LoadingSpinner';
import { Phone, Plus, Edit, Trash2, X, Loader2 } from 'lucide-react';

export default function ContactsPage() {
    const { user } = useAuth();
    const { showToast } = useToast();
    const { addDocument, deleteDocument } = useFirestoreActions();
    const [showAdd, setShowAdd] = useState(false);
    const [newName, setNewName] = useState('');
    const [newPhone, setNewPhone] = useState('');
    const [newRelation, setNewRelation] = useState('');
    const [saving, setSaving] = useState(false);

    const collectionPath = user ? `users/${user.uid}/emergencyContacts` : null;
    const { data: contacts, loading, error, refetch } = useCollection(collectionPath);

    const handleAdd = async () => {
        if (!newName || !newPhone) {
            showToast('Name and phone are required.', 'warning');
            return;
        }
        setSaving(true);
        try {
            await addDocument(collectionPath, {
                name: newName, phone: newPhone, relation: newRelation,
            });
            showToast('Contact added successfully!', 'success');
            setNewName(''); setNewPhone(''); setNewRelation('');
            setShowAdd(false);
            refetch();
        } catch {
            showToast('Failed to add contact.', 'error');
        } finally {
            setSaving(false);
        }
    };

    const handleDelete = async (id) => {
        try {
            await deleteDocument(`${collectionPath}/${id}`);
            showToast('Contact removed.', 'info');
            refetch();
        } catch {
            showToast('Failed to remove contact.', 'error');
        }
    };

    return (
        <ProtectedRoute>
            <div className="flex h-screen bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 font-display">
                <Sidebar />
                <div className="flex-1 flex flex-col overflow-hidden">
                    <DashboardHeader />
                    <main className="flex-1 overflow-y-auto p-6 lg:p-10 space-y-6">
                        <div className="flex items-center justify-between">
                            <h2 className="text-2xl font-black">Emergency Contacts</h2>
                            <button onClick={() => setShowAdd(!showAdd)} className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-primary/90 transition-colors">
                                {showAdd ? <X className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                                {showAdd ? 'Cancel' : 'Add Contact'}
                            </button>
                        </div>

                        {showAdd && (
                            <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
                                <h3 className="font-bold text-lg">New Emergency Contact</h3>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                    <input value={newName} onChange={(e) => setNewName(e.target.value)} placeholder="Full Name" className="px-4 py-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-sm" />
                                    <input value={newPhone} onChange={(e) => setNewPhone(e.target.value)} placeholder="Phone Number" className="px-4 py-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-sm" />
                                    <input value={newRelation} onChange={(e) => setNewRelation(e.target.value)} placeholder="Relation (e.g. Aunt)" className="px-4 py-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-sm" />
                                </div>
                                <button onClick={handleAdd} disabled={saving} className="bg-primary text-white px-6 py-2.5 rounded-lg font-bold text-sm flex items-center gap-2 disabled:opacity-60">
                                    {saving ? <Loader2 className="w-4 h-4 animate-spin" /> : <Plus className="w-4 h-4" />}
                                    {saving ? 'Saving...' : 'Save Contact'}
                                </button>
                            </div>
                        )}

                        {loading ? (
                            <LoadingSpinner message="Loading contacts..." />
                        ) : error ? (
                            <ErrorState message={error} onRetry={refetch} />
                        ) : !contacts.length ? (
                            <EmptyState icon={Phone} title="No Contacts Yet" description="Add your first emergency contact above." />
                        ) : (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                {contacts.map((contact) => (
                                    <div key={contact.id} className="bg-white dark:bg-slate-900 p-5 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
                                        <div className="flex items-start justify-between">
                                            <div className="flex items-center gap-3">
                                                <div className="size-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                                                    <Phone className="w-5 h-5" />
                                                </div>
                                                <div>
                                                    <p className="font-bold">{contact.name || contact.title}</p>
                                                    <p className="text-sm text-slate-500">{contact.relation || 'Contact'}</p>
                                                </div>
                                            </div>
                                            <button onClick={() => handleDelete(contact.id)} className="text-slate-400 hover:text-red-500 transition-colors">
                                                <Trash2 className="w-4 h-4" />
                                            </button>
                                        </div>
                                        <p className="mt-3 text-sm font-mono text-slate-700 dark:text-slate-300">{contact.phone}</p>
                                    </div>
                                ))}
                            </div>
                        )}
                    </main>
                </div>
            </div>
        </ProtectedRoute>
    );
}
