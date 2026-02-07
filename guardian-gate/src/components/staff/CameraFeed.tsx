import React from 'react';
import { Settings, RefreshCw, Camera, QrCode, RefreshCcw } from 'lucide-react';

export const CameraFeed = () => {
    return (
        <div className="bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden flex flex-col h-full">
            <div className="p-4 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center">
                <div className="flex items-center gap-2">
                    <span className="relative flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                    </span>
                    <h3 className="font-bold text-slate-800 dark:text-slate-100 uppercase text-xs tracking-wider">Live Camera Feed - Gate 4</h3>
                </div>
                <div className="flex gap-2">
                    <button className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors">
                        <RefreshCw className="w-5 h-5 text-slate-500" />
                    </button>
                    <button className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors">
                        <Settings className="w-5 h-5 text-slate-500" />
                    </button>
                </div>
            </div>
            <div className="relative flex-grow bg-black aspect-video lg:aspect-auto min-h-[400px]">
                <div
                    className="absolute inset-0 bg-center bg-no-repeat bg-cover opacity-80"
                    style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCXxUqydsW6-y2azKMkZiOCEv7Pn3mh4zgxc-z444n1FGE4Xh1FTIR-RBL1tuV8YWp6NuHlZpX2LER94XYdnoD2pvG8jQJbOD_nbl2_5i9UdC_LeLRIZ3KgXHvDZtiPWWv_mKZxP-i2RRHn87i2_TD8uwZhViG7vcuZorBEXIN66w9Rg2h5SD0bd6AGHb68FCbea1lJywjkmXEgrFT1JA1R0XhBH7V8m19_XbwU05Amu-Ft-NfkwaznCjm1sUlKECCZnksQNDARGUc')" }}
                ></div>
                {/* Scanning Overlay */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="w-64 h-64 border-2 border-primary/50 rounded-xl relative">
                        <div className="absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 border-primary rounded-tl-lg"></div>
                        <div className="absolute top-0 right-0 w-8 h-8 border-t-4 border-r-4 border-primary rounded-tr-lg"></div>
                        <div className="absolute bottom-0 left-0 w-8 h-8 border-b-4 border-l-4 border-primary rounded-bl-lg"></div>
                        <div className="absolute bottom-0 right-0 w-8 h-8 border-b-4 border-r-4 border-primary rounded-br-lg"></div>
                    </div>
                </div>
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-4">
                    <button className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-xl font-bold flex items-center gap-2 shadow-lg transition-all active:scale-95">
                        <Camera className="w-5 h-5" />
                        CAPTURE SCAN
                    </button>
                    <button className="bg-white/20 backdrop-blur-md hover:bg-white/30 text-white px-6 py-3 rounded-xl font-bold flex items-center gap-2 transition-all">
                        <QrCode className="w-5 h-5" />
                        SCAN QR
                    </button>
                </div>
            </div>
            <div className="p-4 bg-slate-50 dark:bg-slate-800/50 flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <div
                        className="h-12 w-12 rounded-lg bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 bg-center bg-cover"
                        style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuA6vT74Nys3Jgga1SDfeHz9irly9ID75soay8LWP1vs2BrL8Vg9ouyrAl63CTuLCOsVvKBFBKVIkGewEevdF5QM1TiwJsazm5dsP_FrOn3ogRYTZ-A6Dn77AFYkNeb5eDMhE-Dqgcfj_wjeDCCab3esQf7Up98leO9OeRpPvogk38mQEwrTy3KZK5RGGuoSXdwNeuOzuen_nS6j-CMBr9ByS9WRzA8IG-B7-67hzXHHTGLs8WuEspzmxGlaimGydHB3ylP16OybEC8')" }}
                    ></div>
                    <div>
                        <p className="text-xs text-slate-500 font-bold uppercase tracking-tighter">Current Capture</p>
                        <p className="text-sm font-semibold text-slate-800 dark:text-slate-100 italic">Face detected: 98% confidence</p>
                    </div>
                </div>
                <button className="text-primary text-sm font-bold flex items-center gap-1">
                    <RefreshCcw className="w-4 h-4" />
                    RE-SCAN
                </button>
            </div>
        </div>
    );
};
