"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "../context/AuthContext";
import { FullPageSpinner } from "./common/LoadingSpinner";

/**
 * ProtectedRoute - wraps page content requiring authentication.
 * @param {string[]} allowedRoles - optional array of roles allowed (e.g. ['admin', 'staff'])
 * @param {React.ReactNode} children
 */
export default function ProtectedRoute({ children, allowedRoles }) {
  const { user, role, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push("/login");
    }
  }, [user, loading, router]);

  useEffect(() => {
    if (!loading && user && allowedRoles && role && !allowedRoles.includes(role)) {
      // Redirect unauthorized roles to their correct dashboard
      switch (role) {
        case 'admin': router.push('/admin'); break;
        case 'staff': router.push('/staff'); break;
        default: router.push('/dashboard'); break;
      }
    }
  }, [user, role, loading, allowedRoles, router]);

  if (loading) {
    return <FullPageSpinner message="Verifying access..." />;
  }

  if (!user) {
    return <FullPageSpinner message="Redirecting to login..." />;
  }

  if (allowedRoles && role && !allowedRoles.includes(role)) {
    return <FullPageSpinner message="Redirecting..." />;
  }

  return children;
}
