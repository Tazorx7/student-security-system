# Frontend Tasks — Student Security System (GuardianGate)

> **Status**: Phase 1 (Backend infrastructure + Firebase auth bridge) is complete.  
> All UI shells are built with **hardcoded mock data** — zero Firebase integration on the frontend.  
> Tasks below are ordered from **least complex → most complex**.

---

## 🟢 Tier 1 — Quick Wins (Low Complexity)

### 1. Dark Mode Toggle
- [ ] Add a theme toggle button to `Navbar.js`, `DashboardHeader.js`, `PrincipalHeader.js`, and `StaffHeader.js`
- [ ] Toggle the `dark` class on `<html>` element (Tailwind `darkMode: "class"` is already configured)
- [ ] Persist user preference in `localStorage`

### 2. Wrap Admin & Staff Pages in `<ProtectedRoute>`
- [ ] `app/admin/page.js` — missing `<ProtectedRoute>` wrapper
- [ ] `app/admin/alerts/page.js` — missing
- [ ] `app/admin/audit/page.js` — missing
- [ ] `app/admin/emergency/page.js` — missing
- [ ] `app/admin/guardians/page.js` — missing
- [ ] `app/admin/reports/page.js` — missing
- [ ] `app/admin/settings/page.js` — missing
- [ ] `app/admin/students/profile/page.js` — missing
- [ ] `app/staff/page.js` — missing
- [ ] `app/staff/history/page.js` — missing
- [ ] `app/staff/roster/page.js` — missing
- [ ] `app/dashboard/pickup-approval/page.js` — missing

### 3. Remove Demo Role Switcher from Login Page
- [ ] Remove the hardcoded "Demo Role" bar in `app/login/page.js` (lines 33–53)
- [ ] Role should be determined from the user's Firestore profile after real auth

### 4. Add Missing `<title>` / SEO Metadata per Page
- [ ] Add `metadata` exports or `<Head>` tags for each route (currently only root layout has metadata)
- [ ] Pages: `/login`, `/dashboard`, `/admin`, `/staff`, and all sub-pages

---

## 🟡 Tier 2 — Moderate Complexity

### 5. Wire Up Firebase Authentication in Login Flow
- [ ] In `LoginForm.js`: call `signInWithEmailAndPassword(auth, email, password)` from Firebase
- [ ] Handle auth errors (wrong password, user not found, too many attempts) with UI feedback
- [ ] Add loading spinner on the "Sign In" button during auth
- [ ] After successful auth, fetch user role from Firestore and redirect accordingly
- [ ] In `MFAForm.js`: integrate real MFA verification (if backend supports it) or remove the MFA step if not applicable

### 6. Wire Up Logout Functionality
- [ ] Add a working "Sign Out" button in `Sidebar.js`, `AdminSidebar.js`, and `StaffHeader.js`
- [ ] Call `signOut(auth)` and redirect to `/login`
- [ ] Confirm via a modal or toast before signing out

### 7. Add Loading States & Error Boundaries
- [ ] Create a reusable `<LoadingSpinner>` component in `app/components/common/`
- [ ] Create an `<ErrorBoundary>` or error fallback component
- [ ] Add loading states to all pages that will fetch data (skeleton loaders or spinners)
- [ ] Add error states with retry buttons for failed data fetches

### 8. Build "Forgot Password" Flow
- [ ] Create `app/forgot-password/page.js`
- [ ] Call `sendPasswordResetEmail(auth, email)` from Firebase
- [ ] Show success/error feedback to the user
- [ ] Link it from the "Forgot password?" anchor in `LoginForm.js`

### 9. Toast / Notification System
- [ ] Create a reusable `<Toast>` component (success, error, warning, info variants)
- [ ] Use it across all form submissions, button actions, and error states
- [ ] Position at top-right or bottom-right of the viewport

---

## 🟠 Tier 3 — Significant Effort

### 10. Replace Mock Data with Firestore Reads — Parent Dashboard
- [ ] `ChildrenGrid.js` — fetch children linked to the logged-in parent from Firestore
- [ ] `RecentActivity.js` — fetch real pickup/check-in event history
- [ ] `EmergencyContacts.js` — fetch from user's emergency contacts collection
- [ ] `PickupRequestAlert.js` — listen for real-time pickup requests (use `onSnapshot`)
- [ ] `dashboard/history/page.js` — fetch paginated pickup history from Firestore
- [ ] `dashboard/contacts/page.js` — fetch real emergency contacts
- [ ] `dashboard/guardians/page.js` — fetch authorized guardians list

### 11. Replace Mock Data with Firestore Reads — Admin Dashboard
- [ ] `QuickStats.js` — fetch aggregate stats (students on campus, pending pickups, incidents)
- [ ] `DismissalLog.js` — fetch today's dismissal log entries
- [ ] `IncidentReview.js` — fetch pending security incidents
- [ ] `EmergencyOverride.js` — read current lockdown status
- [ ] `admin/guardians/page.js` — fetch all guardians across the school
- [ ] `admin/audit/page.js` — fetch audit trail logs
- [ ] `admin/reports/page.js` — fetch compliance metrics
- [ ] `admin/students/profile/page.js` — fetch individual student profile data

### 12. Replace Mock Data with Firestore Reads — Staff Dashboard
- [ ] `VerificationPanel.js` — fetch current verification queue
- [ ] `RecentApprovals.js` — fetch recent approval/denial records
- [ ] `staff/history/page.js` — fetch gate activity logs
- [ ] `staff/roster/page.js` — fetch real student roster with live attendance status

### 13. Wire Up Form Submissions & Button Actions
- [ ] **Pickup Approval page**: "Approve Pickup" & "Deny & Notify School" buttons → write to Firestore
- [ ] **Emergency Contacts page**: "Add New Contact", "Edit", "Remove" → CRUD operations on Firestore
- [ ] **Authorized Guardians page**: "Authorize New Guardian", QR code, Edit, Delete → Firestore writes
- [ ] **Admin Guardian Database**: "Add Guardian" button and row click → Firestore actions
- [ ] **Emergency Override page**: "ARM/DISARM LOCKDOWN", "Manual Gate Release", "Broadcast Now", "Trigger Silent Alarm" → Firestore writes + real-time updates
- [ ] **Settings page**: save notification preferences, contact hierarchy, device management to Firestore
- [ ] **Compliance Reports**: "Generate PDF" and "Export" → generate and download real reports

### 14. Implement Working Search & Filter Logic
- [ ] `dashboard/history/page.js` — wire up search input and filter/date-range dropdowns
- [ ] `admin/guardians/page.js` — wire up guardian search and filter button
- [ ] `admin/audit/page.js` — wire up log search, date range picker, and filter
- [ ] `admin/alerts/page.js` — wire up alert search bar and `AlertFilters.js` component
- [ ] `staff/history/page.js` — wire up name/guardian filter input
- [ ] `staff/roster/page.js` — wire up student search bar

---

## 🔴 Tier 4 — High Complexity

### 15. Role-Based Access Control (RBAC) on Frontend
- [ ] Create an auth context (`AuthContext`) that exposes `user`, `role`, and `loading` globally
- [ ] Enhance `ProtectedRoute` to accept `allowedRoles` prop (e.g., `<ProtectedRoute allowedRoles={['admin']}>`)
- [ ] Redirect unauthorized roles to their correct dashboard (e.g., parent trying to access `/admin`)
- [ ] Conditionally show/hide sidebar nav items based on role
- [ ] Hide admin-only actions from non-admin users

### 16. Real-Time Listeners & Live Updates
- [ ] Use Firestore `onSnapshot` for:
  - Pickup request alerts (parent dashboard)
  - Verification queue (staff dashboard)
  - Incident feed (admin dashboard)
  - Lockdown status (emergency override)
  - Alert feed (admin alerts page)
- [ ] Add visual indicators for live data (pulse dots, "Live" badges)
- [ ] Handle listener cleanup on unmount

### 17. Camera Feed / Verification Integration (Staff)
- [ ] `CameraFeed.js` — integrate with a real camera stream or placeholder with upload
- [ ] Face match / ID verification workflow tied to backend APIs
- [ ] Display verification confidence score and match/no-match UI

### 18. Notification System with Firebase Cloud Messaging (FCM)
- [ ] Set up FCM in the frontend for push notifications
- [ ] Notify parents of pickup requests in real-time
- [ ] Notify staff of new verification queue entries
- [ ] Notify admin of security incidents
- [ ] Handle notification permissions and fallback for denied permissions

### 19. Pagination & Infinite Scroll
- [ ] `dashboard/history/page.js` — "Load More History" button → paginated Firestore queries
- [ ] `admin/audit/page.js` — paginate audit log entries
- [ ] `admin/guardians/page.js` — paginate guardian database table
- [ ] `staff/history/page.js` — "View Full Archive" → paginated gate logs
- [ ] Use Firestore `startAfter` cursors for efficient pagination

### 20. Responsive Design & Accessibility Audit
- [ ] Audit all pages on mobile breakpoints (some pages like `pickup-approval` lack `<MobileNav>`)
- [ ] Ensure all interactive elements have `aria-labels` and proper focus management
- [ ] Add keyboard navigation support (tab order, escape to close modals)
- [ ] Test with screen readers
- [ ] Ensure color contrast meets WCAG AA standards

### 21. Comprehensive End-to-End Testing
- [ ] Set up a testing framework (e.g., Cypress or Playwright)
- [ ] Test auth flow: login → MFA → correct dashboard redirect
- [ ] Test protected routes: unauthenticated users redirected to `/login`
- [ ] Test RBAC: roles can only access their permitted pages
- [ ] Test CRUD operations: add/edit/remove contacts, guardians
- [ ] Test real-time updates: pickup alerts, verification queue
- [ ] Test responsive layouts across viewports
