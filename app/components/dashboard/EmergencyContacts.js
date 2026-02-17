"use client";
import { Siren, PhoneCall, Activity } from 'lucide-react';
import Link from 'next/link';
import { useAuth } from '../../context/AuthContext';
import { useCollection } from '../../hooks/useFirestore';
import { LoadingSpinner } from '../common/LoadingSpinner';

export const EmergencyContacts = () => {
    const { user } = useAuth();
    const { data: contacts, loading } = useCollection(
        user ? `users/${user.uid}/emergencyContacts` : null
    );

    const displayContacts = contacts.length > 0 ? contacts.slice(0, 2) : [
        { id: '1', title: 'School Resource Officer', phone: '(555) 902-1234' },
        { id: '2', title: 'Campus Nurse', phone: '(555) 902-5678' },
    ];

    return (
        <div className="bg-primary rounded-xl p-6 text-white shadow-xl flex flex-col justify-between">
            <div>
                <div className="flex items-center justify-between mb-4">
                    <Siren className="w-8 h-8" />
                    <span className="text-[10px] font-black tracking-widest bg-white/20 px-2 py-0.5 rounded">QUICK ACCESS</span>
                </div>
                <h3 className="text-xl font-black mb-2 leading-tight">Emergency Protocols</h3>
                <p className="text-blue-100 text-sm leading-relaxed mb-6">
                    Verified emergency contacts are reachable with one-tap during system lockdowns or drills.
                </p>
                {loading ? (
                    <LoadingSpinner size="sm" message="" />
                ) : (
                    <div className="space-y-4">
                        {displayContacts.map((contact, i) => (
                            <div key={contact.id || i} className="flex items-center gap-3">
                                <div className="size-10 rounded-lg bg-white/10 flex items-center justify-center">
                                    {i === 0 ? <PhoneCall className="w-5 h-5" /> : <Activity className="w-5 h-5" />}
                                </div>
                                <div>
                                    <p className="text-xs font-bold text-blue-200">{contact.title || contact.name}</p>
                                    <p className="text-sm font-mono">{contact.phone}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
            <Link href="/dashboard/contacts" className="mt-8 w-full py-3 bg-white text-primary font-black rounded-lg text-sm hover:bg-blue-50 transition-colors shadow-lg uppercase text-center block">
                View Contact List
            </Link>
        </div>
    );
};
