import ProtectedRoute from "../components/protectedRoute";

export default function Dashboard(){
  return (
    <ProtectedRoute>
      <div style={{padding: "40px" }}>
        <h1>Staff Security Dashboard</h1>
        <p>Seen by authorized persons</p>
       {/*Student logs to be put here*/}
       </div>
    </ProtectedRoute>
  );
}
