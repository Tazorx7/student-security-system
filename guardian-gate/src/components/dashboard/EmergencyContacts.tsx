import React from 'react';
import { Siren, PhoneCall, Activity } from 'lucide-react';

export const EmergencyContacts = () => {
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
                <div className="space-y-4">
                    <div className="flex items-center gap-3">
                        <div className="size-10 rounded-lg bg-white/10 flex items-center justify-center">
                            <PhoneCall className="w-5 h-5" />
                        </div>
                        <div>
                            <p className="text-xs font-bold text-blue-200">School Resource Officer</p>
                            <p className="text-sm font-mono">(555) 902-1234</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="size-10 rounded-lg bg-white/10 flex items-center justify-center">
                            <Activity className="w-5 h-5" />
                        </div>
                        <div>
                            <p className="text-xs font-bold text-blue-200">Campus Nurse</p>
                            <p className="text-sm font-mono">(555) 902-5678</p>
                        </div>
                    </div>
                </div>
            </div>
            <button className="mt-8 w-full py-3 bg-white text-primary font-black rounded-lg text-sm hover:bg-blue-50 transition-colors shadow-lg uppercase">
                View Contact List
            </button>
        </div>
    );
};
