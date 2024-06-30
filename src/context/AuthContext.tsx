// src/context/AuthContext.tsx
"use client";
import { createContext, useContext, useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = 'https://tsxeysxfhgbhddxbewri.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRzeGV5c3hmaGdiaGRkeGJld3JpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTk3Nzg0MzcsImV4cCI6MjAzNTM1NDQzN30.W0wHRRSY8lSQ57F2oGPuF1WL1fuAxW8MRsqoLO8bXr0';

const supabase = createClient(supabaseUrl, supabaseAnonKey);

export { supabase };

interface AuthContextProps {
  user: any;
  signInWithGoogle: () => void;
  signInWithMicrosoft: () => void;
  signOut: () => void;
}

const AuthContext = createContext<AuthContextProps>({
  user: null,
  signInWithGoogle: () => {},
  signInWithMicrosoft: () => {},
  signOut: () => {},
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const { data: authListener } = supabase.auth.onAuthStateChange(
      (event, session) => {
        const currentUser = session?.user || null;
        setUser(currentUser);
      }
    );

    // Check for an active session
    supabase.auth.getSession().then(({ data: { session } }) => {
      return setUser(session?.user ?? null);
    });

    return () => {
      authListener?.subscription.unsubscribe();
    };
  }, []);

  const signInWithGoogle = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "google",
    });
  };
  
  const signInWithMicrosoft = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "google",
    });
  };

  const signOut = async () => {
    await supabase.auth.signOut();
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, signInWithGoogle, signInWithMicrosoft, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
