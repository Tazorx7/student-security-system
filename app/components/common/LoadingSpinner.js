"use client";

export const LoadingSpinner = ({ size = "md", message = "Loading..." }) => {
    const sizeClasses = {
        sm: "size-6 border-2",
        md: "size-10 border-4",
        lg: "size-14 border-4",
    };

    return (
        <div className="flex flex-col items-center justify-center gap-3 py-8">
            <div
                className={`${sizeClasses[size]} border-primary border-t-transparent rounded-full animate-spin`}
            />
            {message && (
                <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">{message}</p>
            )}
        </div>
    );
};

export const FullPageSpinner = ({ message = "Verifying access..." }) => (
    <div className="flex h-screen items-center justify-center bg-background-light dark:bg-background-dark">
        <LoadingSpinner size="lg" message={message} />
    </div>
);

export const SkeletonBlock = ({ className = "" }) => (
    <div
        className={`bg-slate-200 dark:bg-slate-800 rounded-lg animate-pulse ${className}`}
    />
);

export const TableSkeleton = ({ rows = 5, cols = 4 }) => (
    <div className="space-y-3">
        {Array.from({ length: rows }).map((_, i) => (
            <div key={i} className="flex gap-4">
                {Array.from({ length: cols }).map((_, j) => (
                    <SkeletonBlock key={j} className="h-5 flex-1" />
                ))}
            </div>
        ))}
    </div>
);

export const CardSkeleton = () => (
    <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 space-y-4">
        <SkeletonBlock className="h-5 w-1/3" />
        <SkeletonBlock className="h-4 w-2/3" />
        <SkeletonBlock className="h-4 w-1/2" />
        <SkeletonBlock className="h-10 w-full" />
    </div>
);

export const EmptyState = ({ icon: Icon, title, description, action }) => (
    <div className="flex flex-col items-center justify-center py-16 text-center">
        {Icon && (
            <div className="size-16 rounded-2xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center mb-4">
                <Icon className="w-8 h-8 text-slate-400" />
            </div>
        )}
        <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{title}</h3>
        {description && (
            <p className="text-sm text-slate-500 dark:text-slate-400 max-w-md mb-6">{description}</p>
        )}
        {action}
    </div>
);

export const ErrorState = ({ message = "Something went wrong", onRetry }) => (
    <div className="flex flex-col items-center justify-center py-16 text-center">
        <div className="size-16 rounded-2xl bg-red-100 dark:bg-red-900/30 flex items-center justify-center mb-4">
            <svg className="w-8 h-8 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        </div>
        <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Error</h3>
        <p className="text-sm text-slate-500 dark:text-slate-400 max-w-md mb-6">{message}</p>
        {onRetry && (
            <button
                onClick={onRetry}
                className="px-5 py-2 bg-primary text-white rounded-lg font-bold text-sm hover:bg-primary/90 transition-all"
            >
                Try Again
            </button>
        )}
    </div>
);
