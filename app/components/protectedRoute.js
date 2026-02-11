"use client"
import {useEffect} from "react";
import {useRouter} from "next/navigation";
import {auth} from "../../lib/firebase";
import {onAuthStateChanged} from "firebase/auth";

export default function
ProtectedRoute({children}){
  const router=useRouter();
  useEffect(() => {
    const unsubscribe=
onAuthStateChanged(auth, (user) => {
      if (!user){
        router.push("/");
      }
    }); 
    return () => unsubscribe();
   }, [router]);
   return <>{children}</>;
}    
