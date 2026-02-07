import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import RootLayout from './layouts/RootLayout';
import LandingPage from './pages/LandingPage';
import AuthLayout from './layouts/AuthLayout';
import AuthPage from './pages/auth/AuthPage';
import DashboardLayout from './layouts/DashboardLayout';
import ParentDashboard from './pages/dashboard/ParentDashboard';
import PickupHistory from './pages/dashboard/PickupHistory';
import EmergencyContacts from './pages/dashboard/EmergencyContacts';
import AuthorizedGuardians from './pages/dashboard/AuthorizedGuardians';
import PickupApproval from './pages/dashboard/PickupApproval';
import StaffDashboard from './pages/staff/StaffDashboard';
import StaffHistory from './pages/staff/StaffHistory';
import StudentRoster from './pages/staff/StudentRoster';
import PrincipalDashboard from './pages/admin/PrincipalDashboard';
import StudentProfile from './pages/admin/StudentProfile';
import AlertsCenter from './pages/admin/AlertsCenter';
import AuditLogs from './pages/admin/AuditLogs';
import SecuritySettings from './pages/admin/SecuritySettings';
import GuardianDatabase from './pages/admin/GuardianDatabase';
import ComplianceReports from './pages/admin/ComplianceReports';
import EmergencyOverride from './pages/admin/EmergencyOverride';

// Placeholders
const Placeholder = ({ title }: { title: string }) => (
  <div className="p-8">
    <h1 className="text-2xl font-bold">{title}</h1>
    <p>This page is under construction.</p>
  </div>
);

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<LandingPage />} />
        </Route>

        <Route element={<AuthLayout />}>
          <Route path="/login" element={<AuthPage />} />
        </Route>

        {/* Parent Dashboard Routes */}
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<ParentDashboard />} />
          <Route path="history" element={<PickupHistory />} />
          <Route path="contacts" element={<EmergencyContacts />} />
          <Route path="guardians" element={<AuthorizedGuardians />} />
          <Route path="alerts" element={<AlertsCenter />} />
          <Route path="profile" element={<StudentProfile />} />
          <Route path="approval" element={<PickupApproval />} />
        </Route>

        {/* Staff Routes */}
        <Route path="/staff">
          <Route index element={<StaffDashboard />} />
          <Route path="history" element={<StaffHistory />} />
          <Route path="roster" element={<StudentRoster />} />
        </Route>

        {/* Admin Routes */}
        <Route path="/admin">
          <Route index element={<PrincipalDashboard />} />
          <Route path="alerts" element={<AlertsCenter />} />
          <Route path="students" element={<Placeholder title="Students List" />} />
          <Route path="students/profile" element={<StudentProfile />} />
          <Route path="guardians" element={<GuardianDatabase />} />

          <Route path="verification" element={<Placeholder title="Live Verification" />} />
          <Route path="database" element={<GuardianDatabase />} />
          <Route path="audit" element={<AuditLogs />} />
          <Route path="reports" element={<ComplianceReports />} />
          <Route path="override" element={<EmergencyOverride />} />
          <Route path="settings" element={<SecuritySettings />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
