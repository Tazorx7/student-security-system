import { db } from "./firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

export const logSecurityIncident = async (type, description, severity) => {
  try {
    const docRef = await addDoc(collection(db, "securityLogs"), {
      type: type,
      description: description,
      severity: severity,
      timestamp: serverTimestamp(), // Use server time for audit integrity
      status: "open"
    });
    console.log("Incident logged with ID: ", docRef.id);
  } catch (e) {
    console.error("Security Log Error: ", e);
  }
};
