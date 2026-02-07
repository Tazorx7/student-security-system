import React from 'react';
import { Phone, Plus, MapPin, User, Mail, ShieldAlert, Heart, MoreVertical } from 'lucide-react';

const EmergencyContacts = () => {
    const contacts = [
        { id: 1, name: 'Sarah Johnson', relation: 'Mother (Primary)', phone: '+1 (555) 012-3456', email: 'sarah.j@example.com', address: '123 Oak Lane, Springfield', primary: true },
        { id: 2, name: 'Mark Johnson', relation: 'Father', phone: '+1 (555) 012-3457', email: 'mark.j@example.com', address: '123 Oak Lane, Springfield', primary: false },
        { id: 3, name: 'Alice Smith', relation: 'Grandmother', phone: '+1 (555) 012-3488', email: 'alice.s@example.com', address: '456 Maple Dr, Springfield', primary: false },
    ];

    return (
        <div className="flex-1 overflow-y-auto p-8 space-y-8 bg-background-light dark:bg-background-dark">
            <div className="max-w-6xl mx-auto space-y-8">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                        <h1 className="text-3xl font-black tracking-tight text-slate-900 dark:text-white flex items-center gap-3">
                            Emergency Contacts
                            <span className="bg-red-100 text-red-600 text-[10px] px-2 py-1 rounded-full uppercase tracking-widest font-black">Priority List</span>
                        </h1>
                        <p className="text-slate-500 dark:text-slate-400">Manage who the school should contact first in case of an emergency.</p>
                    </div>
                    <button className="flex items-center gap-2 bg-primary text-white px-5 py-3 rounded-xl font-bold text-sm shadow-xl shadow-primary/30 hover:scale-[1.02] active:scale-95 transition-all">
                        <Plus className="w-4 h-4" />
                        Add New Contact
                    </button>
                </div>

                <div className="bg-amber-50 dark:bg-amber-900/10 border border-amber-200 dark:border-amber-900/30 rounded-2xl p-6 flex gap-4">
                    <ShieldAlert className="text-amber-600 dark:text-amber-500 w-6 h-6 shrink-0 mt-0.5" />
                    <div>
                        <p className="text-amber-800 dark:text-amber-200 font-bold">Important Note</p>
                        <p className="text-amber-700/80 dark:text-amber-400/80 text-sm leading-relaxed">
                            Emergency contacts are separate from your Authorized Guardians. These individuals will be contacted if you are unreachable. Please ensure their phone numbers are always up to date.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {contacts.map((contact) => (
                        <div key={contact.id} className={`group bg-white dark:bg-slate-900 rounded-2xl border transition-all hover:shadow-xl ${contact.primary ? 'border-primary ring-4 ring-primary/5' : 'border-slate-200 dark:border-slate-800'}`}>
                            <div className="p-6">
                                <div className="flex justify-between items-start mb-6">
                                    <div className={`size-12 rounded-xl flex items-center justify-center ${contact.primary ? 'bg-primary text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-500'}`}>
                                        <User className="w-6 h-6" />
                                    </div>
                                    <button className="p-1 text-slate-400 hover:text-slate-600 transition-colors">
                                        <MoreVertical className="w-5 h-5" />
                                    </button>
                                </div>

                                <div className="mb-6">
                                    <h3 className="text-xl font-black text-slate-900 dark:text-white flex items-center gap-2">
                                        {contact.name}
                                        {contact.primary && <Heart className="w-4 h-4 fill-primary text-primary" />}
                                    </h3>
                                    <p className="text-sm font-bold text-primary uppercase tracking-wider mt-1">{contact.relation}</p>
                                </div>

                                <div className="space-y-4">
                                    <div className="flex items-center gap-3 text-slate-600 dark:text-slate-400">
                                        <div className="size-8 rounded-lg bg-slate-50 dark:bg-slate-800 flex items-center justify-center flex-shrink-0">
                                            <Phone className="w-4 h-4" />
                                        </div>
                                        <span className="text-sm font-mono font-medium">{contact.phone}</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-slate-600 dark:text-slate-400">
                                        <div className="size-8 rounded-lg bg-slate-50 dark:bg-slate-800 flex items-center justify-center flex-shrink-0">
                                            <Mail className="w-4 h-4" />
                                        </div>
                                        <span className="text-sm truncate">{contact.email}</span>
                                    </div>
                                    <div className="flex items-start gap-3 text-slate-600 dark:text-slate-400 pt-2 border-t border-slate-50 dark:border-slate-800">
                                        <div className="size-8 rounded-lg bg-slate-50 dark:bg-slate-800 flex items-center justify-center flex-shrink-0">
                                            <MapPin className="w-4 h-4" />
                                        </div>
                                        <span className="text-xs leading-relaxed">{contact.address}</span>
                                    </div>
                                </div>
                            </div>
                            <div className="p-2 bg-slate-50 dark:bg-slate-800/50 rounded-b-2xl border-t border-slate-100 dark:border-slate-800 flex gap-1">
                                <button className="flex-1 py-2 text-xs font-bold text-slate-600 dark:text-slate-400 hover:text-primary transition-colors">Edit</button>
                                <div className="w-px h-4 bg-slate-200 dark:bg-slate-700 self-center"></div>
                                <button className="flex-1 py-2 text-xs font-bold text-slate-600 dark:text-slate-400 hover:text-red-500 transition-colors">Remove</button>
                            </div>
                        </div>
                    ))}

                    <button className="border-2 border-dashed border-slate-200 dark:border-slate-800 rounded-2xl flex flex-col items-center justify-center p-8 gap-4 hover:border-primary/50 hover:bg-primary/5 transition-all text-slate-400 hover:text-primary min-h-[340px]">
                        <div className="size-16 rounded-full border-4 border-current flex items-center justify-center bg-transparent">
                            <Plus className="w-8 h-8" />
                        </div>
                        <div className="text-center">
                            <p className="font-bold">Add Contact</p>
                            <p className="text-xs opacity-70">Include another guardian or friend</p>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default EmergencyContacts;
