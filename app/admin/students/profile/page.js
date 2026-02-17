"use client";
import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { ProfileHeader } from '../../../components/profile/ProfileHeader';
import { IdentityCard } from '../../../components/profile/IdentityCard';
import { PermissionsManager } from '../../../components/profile/PermissionsManager';
import { AuditTimeline } from '../../../components/profile/AuditTimeline';
import ProtectedRoute from '../../../components/protectedRoute';
import { useCollection, useDocument } from '../../../hooks/useFirestore';
import { LoadingSpinner, ErrorState } from '../../../components/common/LoadingSpinner';
import { limit } from 'firebase/firestore';

function StudentProfileContent() {
    const searchParams = useSearchParams();
    const idParam = searchParams.get('id');

    // Fetch specifically the requested student, or the first one if no params (for demo purposes)
    const { data: students, loading: listLoading } = useCollection('students', !idParam ? [limit(1)] : null);

    const studentId = idParam || (students?.[0]?.id);
    const { data: student, loading: docLoading, error } = useDocument(studentId ? `students/${studentId}` : null);

    const loading = listLoading || (studentId && docLoading);

    if (loading) return <div className="h-screen flex items-center justify-center"><LoadingSpinner message="Loading student profile..." /></div>;

    if (error || (!loading && !student)) return <div className="h-screen p-10"><ErrorState message="Student not found" /></div>;

    return (
        <div className="bg-background-light dark:bg-background-dark min-h-screen text-slate-900 dark:text-slate-100 font-display">
            <ProfileHeader student={student} />
            <main className="p-4 lg:p-10 max-w-screen-2xl mx-auto">
                <div className="grid grid-cols-12 gap-8">
                    <IdentityCard student={student} />
                    <PermissionsManager student={student} />
                    <AuditTimeline studentId={studentId} />
                </div>
            </main>
        </div>
    );
}

export default function StudentProfilePage() {
    return (
        <ProtectedRoute>
            <Suspense fallback={<div className="h-screen flex items-center justify-center"><LoadingSpinner message="Loading profile..." /></div>}>
                <StudentProfileContent />
            </Suspense>
        </ProtectedRoute>
    );
}
